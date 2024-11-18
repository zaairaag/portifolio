import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

// Função para obter as linguagens mais usadas do GitHub
async function getGitHubLanguages() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  try {
    // Busca seus repositórios
    const { data: repos } = await octokit.repos.listForUser({
      username: 'zairacandido',
      sort: 'updated',
      per_page: 100
    });

    // Mapeia as linguagens usadas
    const languages = new Map();
    
    // Busca as linguagens de cada repositório
    const languagePromises = repos.map(async (repo) => {
      const { data } = await octokit.repos.listLanguages({
        owner: 'zairacandido',
        repo: repo.name
      });
      
      // Soma os bytes de cada linguagem
      Object.entries(data).forEach(([lang, bytes]) => {
        languages.set(lang, (languages.get(lang) || 0) + bytes);
      });
    });

    await Promise.all(languagePromises);

    // Converte para array e ordena por uso
    const sortedLanguages = Array.from(languages.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: Math.round((bytes / Array.from(languages.values()).reduce((a, b) => a + b)) * 100)
      }));

    return sortedLanguages;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return [];
  }
}

// Função para obter frameworks e tecnologias dos arquivos package.json
async function getPackageJsonTechnologies() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  try {
    const { data: repos } = await octokit.repos.listForUser({
      username: 'zairacandido',
      sort: 'updated',
      per_page: 100
    });

    const technologies = new Set();

    // Busca package.json de cada repositório
    const packagePromises = repos.map(async (repo) => {
      try {
        const { data } = await octokit.repos.getContent({
          owner: 'zairacandido',
          repo: repo.name,
          path: 'package.json'
        });

        if (data && 'content' in data) {
          const content = JSON.parse(Buffer.from(data.content, 'base64').toString());
          
          // Adiciona dependências e devDependencies
          Object.keys(content.dependencies || {}).forEach(tech => technologies.add(tech));
          Object.keys(content.devDependencies || {}).forEach(tech => technologies.add(tech));
        }
      } catch (error) {
        // Ignora repositórios sem package.json
      }
    });

    await Promise.all(packagePromises);

    return Array.from(technologies);
  } catch (error) {
    console.error('Error fetching package.json data:', error);
    return [];
  }
}

export async function GET() {
  try {
    const [languages, packages] = await Promise.all([
      getGitHubLanguages(),
      getPackageJsonTechnologies()
    ]);

    // Mapeamento de tecnologias para categorias
    const techCategories = {
      Linguagens: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
      Frontend: ['react', 'next', 'vue', 'angular', 'tailwindcss', 'framer-motion'],
      Backend: ['express', 'nest', 'fastify', 'prisma', 'mongoose'],
      'DevOps & Ferramentas': ['docker', 'kubernetes', 'jest', 'cypress'],
      'Design & UI': ['figma', 'storybook', 'chakra-ui', 'material-ui'],
      Microsoft: ['sharepoint', 'office-ui-fabric-react', '@microsoft']
    };

    // Organiza as tecnologias em categorias
    const categorizedTech = Object.entries(techCategories).map(([category, keywords]) => ({
      category,
      items: [...languages, ...packages]
        .filter(tech => {
          const techName = typeof tech === 'string' ? tech : tech.name;
          return keywords.some(keyword => 
            techName.toLowerCase().includes(keyword.toLowerCase())
          );
        })
        .map(tech => {
          const name = typeof tech === 'string' ? tech : tech.name;
          return {
            name,
            icon: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
            color: '#' + Math.floor(Math.random()*16777215).toString(16),
            level: tech.percentage >= 50 ? 'Avançado' : 'Intermediário'
          };
        })
    }));

    return NextResponse.json(categorizedTech);
  } catch (error) {
    console.error('Error in GET route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
