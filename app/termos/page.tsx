"use client";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
      
      <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
        <p className="mb-4">
          Última atualização: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar este site, você aceita e concorda em cumprir estes termos e condições de uso.
            Se você não concordar com qualquer parte destes termos, não deverá usar o site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, designs e códigos,
            são de propriedade exclusiva de Zaíra Gonçalves ou utilizados com permissão.
            A reprodução, distribuição ou modificação deste conteúdo sem autorização prévia é proibida.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Uso do Site</h2>
          <p>
            Você concorda em usar este site apenas para propósitos legais e de maneira que não infrinja
            os direitos de terceiros. É proibido qualquer uso do site que possa causar danos, 
            sobrecarregar ou prejudicar seu funcionamento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Links Externos</h2>
          <p>
            Este site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo
            ou práticas de privacidade desses sites. O acesso a qualquer link externo é por sua conta e risco.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Modificações</h2>
          <p>
            Reservamos o direito de modificar estes termos de uso a qualquer momento. As modificações
            entram em vigor imediatamente após sua publicação no site. O uso continuado do site após
            as alterações significa sua aceitação dos novos termos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
          <p>
            Para questões relacionadas aos termos de uso, entre em contato através do email:{" "}
            <a href="mailto:contato@zairagoncalves.com" className="text-primary hover:underline">
              contato@zairagoncalves.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
