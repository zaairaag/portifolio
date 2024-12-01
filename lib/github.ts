import { GitHubRepo } from '@/data/projects'

const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_USERNAME = 'zaairaag' // Seu username do GitHub

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        next: {
          revalidate: 3600, // Revalidate every hour
        },
      }
    )

    if (!response.ok) {
      console.error('GitHub API Response:', await response.text())
      throw new Error('Failed to fetch GitHub repositories')
    }

    const repos: GitHubRepo[] = await response.json()

    // Sort by last updated
    return repos
      .sort((a, b) => {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      })
      .slice(0, 12) // Get top 12 repos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}
