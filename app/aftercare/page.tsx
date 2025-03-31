import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sun, Scissors, Leaf, Trash2, ShowerHead, Droplet } from "lucide-react"

export const metadata = {
  title: "Aftercare Guidelines | THE DERMA LOUNGE",
  description:
    "Essential aftercare guidelines following your laser hair removal treatment at THE DERMA LOUNGE in Newport, Wales.",
}

export default function AftercarePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Laser Hair Removal Aftercare"
          description="Follow these important guidelines after your laser hair removal treatment for the best results."
        />

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-8 text-center uppercase logo-text">
              Post-Treatment Care
            </h2>

            <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Proper aftercare is essential for maximizing the results of your laser hair removal treatment and
              minimizing any potential side effects. Please follow these guidelines carefully.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sun className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Avoid Sun Exposure</h3>
                <p className="text-muted-foreground">
                  Avoid sun exposure and sunbeds for a minimum of 4 days after your appointment and use SPF 30+. Your
                  skin will be more sensitive to UV rays after treatment.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Scissors className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  No Shaving or Perfumes
                </h3>
                <p className="text-muted-foreground">
                  Do not shave or apply perfume or deodorant to the area for 24-48 hours after treatment. These can
                  irritate the treated skin.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Leaf className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Soothe Your Skin</h3>
                <p className="text-muted-foreground">
                  Apply aloe vera or use cool packs on the area if red, warm or swollen. Unscented lotion can also be
                  applied to soothe the treated area.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Trash2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  No Waxing or Plucking
                </h3>
                <p className="text-muted-foreground">
                  Do not wax, bleach or pluck the hair throughout the course of your treatments. Please only shave the
                  area between sessions when necessary.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <ShowerHead className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Avoid Heat</h3>
                <p className="text-muted-foreground">
                  Avoid hot baths, showers, saunas and steam rooms and intense exercise for 2-3 days post treatment.
                  Excessive heat can aggravate the treated area.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Droplet className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  Avoid Certain Products
                </h3>
                <p className="text-muted-foreground">
                  Avoid the use of retinols, AHAs and glycolic acids for a minimum of 5-7 days post treatment. These
                  products can increase skin sensitivity.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-sm">
              <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase text-center">
                What to Expect After Treatment
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Mild redness and swelling around the hair follicles is normal and should subside within 24-48 hours.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    The treated hair will fall out gradually over the next 1-3 weeks. This is not immediate hair loss.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    You may experience what appears to be regrowth after 2-3 weeks; much of this is actually hair being
                    shed from the follicle.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Exfoliate gently after the first week to help remove dead hair from the follicles.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Contact us immediately if you experience any blistering, excessive redness, swelling, or other
                    unusual reactions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-8 text-center uppercase logo-text">
              Between Treatments
            </h2>

            <div className="bg-white p-8 border border-primary/20 rounded-sm">
              <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase text-center">
                Maintaining Your Results
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Follow the recommended treatment schedule. Treatments are typically spaced 4-6 weeks apart depending
                    on the treatment area.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Use sunscreen with SPF 30+ on treated areas when exposed to the sun, even between treatments.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Only shave the treated areas between sessions - never wax, tweeze, or use depilatory creams.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Stay consistent with your treatment schedule for the best results. Missing appointments can reduce
                    the effectiveness of your treatment plan.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Keep your skin hydrated by drinking plenty of water and using gentle, alcohol-free moisturizers.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Questions About Your Treatment?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any concerns about your treatment or are experiencing any unusual symptoms, please don't
              hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto"
                >
                  Book Next Treatment
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

