import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export const metadata = {
  title: "Gallery | THE DERMA LOUNGE",
  description:
    "View before and after photos of our treatments at THE DERMA LOUNGE. See the results of our laser hair removal and facial treatments.",
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader title="Gallery" description="View our treatment results and clinic photos." />

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Before & After
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-primary/20 p-4">
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <Image
                    src="/before-after-1.png"
                    alt="Before and after laser hair removal treatment showing significant hair reduction"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">
                  Underarm Laser Hair Removal
                </h3>
                <p className="text-muted-foreground text-sm">Results after 6 sessions</p>
              </div>

              <div className="border border-primary/20 p-4">
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <Image
                    src="/before-1.png"
                    alt="Before laser hair removal treatment"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Before Treatment</h3>
                <p className="text-muted-foreground text-sm">Underarm area before laser hair removal</p>
              </div>

              <div className="border border-primary/20 p-4">
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <Image
                    src="/after-1.png"
                    alt="After laser hair removal treatment"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">After Treatment</h3>
                <p className="text-muted-foreground text-sm">Underarm area after 6 sessions of laser hair removal</p>
              </div>

              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-primary/20 p-4">
                  <div className="relative aspect-square bg-primary/10 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-primary/40 text-xl font-serif tracking-widest uppercase">Before & After</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Laser Hair Removal</h3>
                  <p className="text-muted-foreground text-sm">Results after 6 sessions</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Our Clinic
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="border border-primary/20 p-4 bg-white">
                  <div className="relative aspect-video bg-primary/10 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-primary/40 text-xl font-serif tracking-widest uppercase">Clinic Photo</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our modern, relaxing treatment space designed for your comfort
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Experience The Results Yourself
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to see your own transformation? Book your appointment today and take the first step towards
              beautiful, radiant skin.
            </p>
            <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider">
                Book Your Appointment
              </Button>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

