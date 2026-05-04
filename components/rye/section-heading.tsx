export function SectionHeading({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  )
}
