import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Counter, type CounterFormat } from "@/components/rye/counter"

type StaticProps = {
  label: string
  value: string
  detail: string
  className?: string
  numeric?: undefined
  hoverable?: boolean
}

type NumericProps = {
  label: string
  detail: string
  className?: string
  numeric: { to: number; format: CounterFormat }
  value?: undefined
  hoverable?: boolean
}

export function MetricCard(props: StaticProps | NumericProps) {
  const { label, detail, className, hoverable = true } = props
  return (
    <Card
      size="sm"
      className={cn("shadow-none", className)}
      data-hoverable={hoverable ? "true" : undefined}
    >
      <CardContent>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="mt-2 text-2xl font-semibold tabular text-foreground">
          {"numeric" in props && props.numeric ? (
            <Counter to={props.numeric.to} format={props.numeric.format} />
          ) : (
            (props as StaticProps).value
          )}
        </div>
        <div className="mt-1 text-sm text-muted-foreground">{detail}</div>
      </CardContent>
    </Card>
  )
}
