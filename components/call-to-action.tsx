import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 px-4">
            <div className="mx-auto max-w-5xl border px-6 py-12 md:py-20 lg:py-32" style={{ backgroundColor: 'black', borderRadius: '40px' }}>
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-light text-white lg:text-5xl mb-6">Get Your Free Shipping Quote</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-white/90 text-lg text-center">Speak with our logistics experts about freight forwarding, warehousing, or   customs clearance. Free quote and consultation included.</p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#FFBF00] text-black hover:bg-yellow-500 rounded-full font-semibold">
                            <Link href="/contact">
                                <span>Get Free Quote</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FFBF00] rounded-full font-semibold">
                            <Link href="https://wa.me/250793145109" target="_blank">
                                <span>WhatsApp Us</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
