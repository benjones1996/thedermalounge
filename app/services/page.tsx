import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-serif tracking-widest text-primary mb-2 text-center uppercase logo-text">
        Our Services
      </h1>
      <div className="w-24 h-px bg-primary mx-auto mb-12"></div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif tracking-widest text-primary mb-8 uppercase">Laser Hair Removal</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Laser Hair Removal"
            description="Advanced laser technology for permanent hair reduction. Safe and effective for various skin types."
            price="From £50"
          />
          <ServiceCard
            title="Laser Hair Removal Packages"
            description="Save 20% when you purchase a package of laser hair removal treatments for multiple areas or sessions."
            price="20% Discount"
          />
          <ServiceCard
            title="Laser Hair Removal Bundle"
            description="Buy 6 sessions and get 2 free. Our most popular option for achieving optimal results."
            price="Buy 6 Get 2 Free"
          />
          <ServiceCard
            title="Small Areas"
            description="Treatments for smaller areas such as upper lip, chin, sideburns, or between eyebrows."
            price="From £30"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif tracking-widest text-primary mb-8 uppercase">Facial Treatments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Facials"
            description="Customized facial treatments to address your specific skin concerns, including cleansing, exfoliation, and hydration."
            price="From £75"
          />
          <ServiceCard
            title="Signature Facial"
            description="Our premium facial treatment includes deep cleansing, exfoliation, extraction, mask, and massage."
            price="From £95"
          />
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-6">
          Visit us at 242 Stow Hill, Newport, Wales, NP20 4HA or contact us on Instagram @thedermalounge_uk for more
          information.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto">
              Book Now
            </Button>
          </Link>
          <Link href="https://www.instagram.com/thedermalounge_uk/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider w-full sm:w-auto"
            >
              Follow on Instagram
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

