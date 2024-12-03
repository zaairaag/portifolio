interface SectionHeaderProps {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {description}
        </p>
      )}
    </div>
  )
}
