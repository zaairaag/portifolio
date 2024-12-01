import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato comigo para discutir seu projeto.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        badge="Contato"
        title="Vamos"
        titleHighlight="conversar?"
        description="Entre em contato comigo para discutir seu projeto ou apenas para trocar uma ideia."
      />

      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </div>
  )
}
