import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  price: string
}

export function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <div className="border border-primary/20 p-6 hover:border-primary transition-colors bg-white">
      <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-primary font-medium">{price}</p>
        <Link href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
          >
            Book
          </Button>
        </Link>
      </div>
    </div>
  )
}

