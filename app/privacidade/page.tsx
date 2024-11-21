"use client";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
        <p className="mb-4">
          Última atualização: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informações que coletamos</h2>
          <p>
            Este site coleta apenas informações básicas de navegação através de cookies essenciais
            para o funcionamento do site e análise de tráfego anônima.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Como usamos suas informações</h2>
          <p>
            As informações coletadas são utilizadas apenas para melhorar a experiência de navegação
            e entender como os visitantes interagem com o conteúdo do site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
          <p>
            Utilizamos cookies essenciais para o funcionamento do site. Você pode configurar seu
            navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Seus direitos</h2>
          <p>
            Você tem o direito de solicitar informações sobre os dados que coletamos sobre você,
            bem como solicitar sua exclusão. Para exercer esses direitos, entre em contato através
            do email disponível no site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contato</h2>
          <p>
            Para questões relacionadas à privacidade, entre em contato através do email:{" "}
            <a href="mailto:zaira.candido@hotmail.com" className="text-primary hover:underline">
              zaira.candido@hotmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
