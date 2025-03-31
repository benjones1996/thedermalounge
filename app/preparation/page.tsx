import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sun, Scissors, SprayCanIcon as Spray, Trash2, ShowerHead, Droplet } from "lucide-react"

export const metadata = {
  title: "Pre-Treatment Guidelines | THE DERMA LOUNGE",
  description:
    "Essential preparation guidelines for your laser hair removal treatment at THE DERMA LOUNGE in Newport, Wales.",
}

export default function PreparationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Laser Hair Removal Preparation"
          description="Follow these important guidelines before your laser hair removal treatment for optimal results."
        />

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-8 text-center uppercase logo-text">
              Pre-Treatment Guidelines
            </h2>

            <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Proper preparation is essential for safe and effective laser hair removal treatment. Please follow these
              guidelines carefully before your appointment to ensure the best results.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sun className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Avoid Sun Exposure</h3>
                <p className="text-muted-foreground">
                  Avoid sun exposure and sunbeds for a minimum of 3 days before your appointment. Tanned skin can
                  increase the risk of side effects from laser treatment.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Scissors className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Shave The Area</h3>
                <p className="text-muted-foreground">
                  Shave the treatment area between 24-48 hours before your appointment. This ensures the laser targets
                  the hair follicle beneath the skin, not the hair above it.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Spray className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">No Fake Tan</h3>
                <p className="text-muted-foreground">
                  Ensure no fake tan or spray tan is on the skin for at least 2 weeks before treatment. Tanning products
                  can interfere with the laser and increase the risk of skin reactions.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Trash2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  No Waxing Or Plucking
                </h3>
                <p className="text-muted-foreground">
                  Do not wax, bleach or pluck the hair for a minimum of 4 weeks before your appointment. The laser
                  targets the hair follicle, which needs to be intact for effective treatment.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <ShowerHead className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Clean Treatment Area</h3>
                <p className="text-muted-foreground">
                  Ensure treatment area is clean and free from products such as deodorant, moisturisers and perfumes
                  etc. These products can interfere with the laser and potentially cause skin reactions.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Droplet className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Avoid Essential Oils</h3>
                <p className="text-muted-foreground">
                  Avoid the use of essential oils for at least 48 hours before treatment. Essential oils can make your
                  skin more sensitive to light and heat.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-sm">
              <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase text-center">
                Additional Preparation Tips
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Wear loose, comfortable clothing to your appointment, especially over the treatment area.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Avoid taking medications that increase photosensitivity for at least one week before your treatment
                    (consult with your doctor before stopping any medications).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Stay hydrated before your treatment to help your skin respond better to the laser.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    If you have a history of cold sores and are having facial treatment, consider preventative
                    medication as laser can sometimes trigger outbreaks.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Inform us of any changes to your health or medication since your consultation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-8 text-center uppercase logo-text">
              What to Expect During Treatment
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-primary/20 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  The Treatment Process
                </h3>
                <p className="text-muted-foreground mb-4">
                  The treatment is relatively quick and easy. The length of time depends on the area being treated.
                </p>
                <p className="text-muted-foreground">
                  The treatment consists of the applicator sweeping back and forth across the desired area in a quick
                  motion. You may feel a slight warming sensation or a feeling similar to a rubber band snapping against
                  your skin.
                </p>
              </div>

              <div className="bg-white p-8 border border-primary/20 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Number of Treatments</h3>
                <p className="text-muted-foreground mb-4">
                  We recommend a minimum of 6 treatments, with some hair types requiring more.
                </p>
                <p className="text-muted-foreground mb-4">The average for a successful program is 8-10 treatments.</p>
                <p className="text-muted-foreground">
                  It is very important to complete all treatments for optimum results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Ready for Your Treatment?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about preparing for your laser hair removal treatment, please don't hesitate to
              contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto">
                  Book Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

