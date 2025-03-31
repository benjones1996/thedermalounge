import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Laser Hair Removal FAQs | THE DERMA LOUNGE",
  description:
    "Find answers to frequently asked questions about laser hair removal treatments at THE DERMA LOUNGE in Newport, Wales.",
}

export default function LaserFAQsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Laser Hair Removal FAQs"
          description="Get answers to your most frequently asked questions about laser hair removal treatments."
        />

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              About Laser Hair Removal
            </h2>

            <div className="space-y-8">
              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What is laser hair removal?
                </h3>
                <p className="text-muted-foreground mb-4">
                  A beam of light energy is used to break down and destroy the hair follicle. The laser targets the
                  pigment (melanin) in the hair follicle, heating it up and damaging it to prevent future hair growth.
                </p>
                <p className="text-muted-foreground mb-4">Once the hair follicle is destroyed, a hair cannot regrow.</p>
                <p className="text-muted-foreground">
                  However, hormonal changes and other factors could trigger another follicle to grow a hair in the
                  future.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How many treatments will I need?
                </h3>
                <p className="text-muted-foreground mb-4">
                  We recommend a minimum of 6 treatments, with some hair types requiring more.
                </p>
                <p className="text-muted-foreground mb-4">The average for a successful program is 8-10 treatments.</p>
                <p className="text-muted-foreground">
                  It is very important to complete all treatments for optimum results.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How long does the treatment take?
                </h3>
                <p className="text-muted-foreground mb-4">
                  The treatment is relatively quick and easy. The length of time depends on the area being treated.
                </p>
                <p className="text-muted-foreground">
                  The treatment consists of the applicator sweeping back and forth across the desired area in a quick
                  motion.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  Is laser hair removal painful?
                </h3>
                <p className="text-muted-foreground">
                  Most clients describe the sensation as a mild pinching or warm feeling. The level of discomfort varies
                  depending on the individual's pain tolerance and the area being treated. Our advanced laser technology
                  includes cooling features to minimize discomfort during treatment.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  Is laser hair removal permanent?
                </h3>
                <p className="text-muted-foreground">
                  Laser hair removal provides long-lasting hair reduction. While the treatment destroys the hair
                  follicles, new follicles can develop due to hormonal changes or other factors over time. Most clients
                  experience significant and permanent hair reduction, but maintenance treatments may be needed
                  periodically.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How should I prepare for my treatment?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Proper preparation is essential for effective laser hair removal. Key preparation steps include:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Avoid sun exposure for at least 3 days before treatment</li>
                  <li>• Shave the area 24-48 hours before your appointment</li>
                  <li>• No fake tan or spray tan for at least 2 weeks before treatment</li>
                  <li>• Avoid waxing, bleaching or plucking for 4 weeks before treatment</li>
                  <li>• Ensure the treatment area is clean and free from products</li>
                  <li>• Avoid essential oils for 48 hours before treatment</li>
                </ul>
                <p className="text-muted-foreground">
                  <Link href="/preparation" className="text-primary hover:underline">
                    Visit our Preparation page
                  </Link>{" "}
                  for more detailed information.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What aftercare is required?
                </h3>
                <p className="text-muted-foreground mb-4">
                  After your laser hair removal treatment, follow these key aftercare guidelines:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Avoid sun exposure for at least 4 days after treatment and use SPF 30+</li>
                  <li>• No shaving or applying perfume/deodorant to the area for 24-48 hours</li>
                  <li>• Apply aloe vera or use cool packs if the area is red, warm or swollen</li>
                  <li>• Avoid hot baths, showers, saunas and intense exercise for 2-3 days</li>
                  <li>• Avoid retinols, AHAs and glycolic acids for 5-7 days</li>
                </ul>
                <p className="text-muted-foreground">
                  <Link href="/aftercare" className="text-primary hover:underline">
                    Visit our Aftercare page
                  </Link>{" "}
                  for more detailed information.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How long should I wait between treatments?
                </h3>
                <p className="text-muted-foreground">
                  The recommended interval between laser hair removal treatments depends on the area being treated and
                  your hair growth cycle. Typically, treatments are scheduled 4-6 weeks apart for facial areas and 6-8
                  weeks apart for body areas. Your practitioner will create a personalized treatment schedule based on
                  your specific needs.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  What are your booking and cancellation policies?
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Booking Policy:</strong> A 25% non-refundable deposit will be taken during your initial
                  consultation to secure your first treatment session. This is redeemable against your treatment.
                </p>
                <p className="text-muted-foreground">
                  <strong>Cancellation Policy:</strong> Cancellations must be made no later than 48 hours before your
                  appointment for a full refund.
                </p>
              </div>

              <div className="border border-primary/20 p-8 rounded-sm">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">
                  How much does laser hair removal cost?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our prices vary depending on the treatment area and package you choose:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Large areas (Full Leg, Full Back, etc.): £129 per session</li>
                  <li>• Medium areas (Half Leg, Brazilian, etc.): £89 per session</li>
                  <li>• Small areas (Underarm, Bikini, etc.): £49 per session</li>
                  <li>• Micro areas (Upper Lip, Chin, etc.): £29 per session</li>
                </ul>
                <p className="text-muted-foreground">
                  We offer significant discounts on packages of multiple treatments.
                  <Link href="/price-list" className="text-primary hover:underline ml-1">
                    View our complete Price List
                  </Link>{" "}
                  for detailed information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Still Have Questions?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any other questions about laser hair removal or would like to schedule a consultation, please
              don't hesitate to contact us.
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
                  Book a Consultation
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

