import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function ExpressDeliveryPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Express Delivery</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Fast, secure express delivery services for urgent shipments and time-critical cargo.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Express Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Same-day delivery</li>
                                    <li>• Next-day delivery</li>
                                    <li>• Time-definite delivery</li>
                                    <li>• Document express</li>
                                    <li>• Medical supplies rush</li>
                                    <li>• E-commerce fulfillment</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Real-time tracking</li>
                                    <li>• Proof of delivery</li>
                                    <li>• Insurance coverage</li>
                                    <li>• Signature confirmation</li>
                                    <li>• 24/7 customer support</li>
                                    <li>• Money-back guarantee</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}