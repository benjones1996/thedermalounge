interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-serif tracking-widest text-white mb-2 uppercase logo-text">{title}</h1>
      {description && (
        <>
          <div className="w-24 h-px bg-white mx-auto my-4"></div>
          <p className="text-white/90 max-w-2xl mx-auto">{description}</p>
        </>
      )}
    </div>
  )
}

