import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function FreightForwardingPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Freight Forwarding Services</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Flash Logix provides comprehensive freight forwarding solutions across air, sea, and road transport networks.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• International air freight</li>
                                    <li>• Ocean freight forwarding</li>
                                    <li>• Road transport solutions</li>
                                    <li>• Door-to-door delivery</li>
                                    <li>• Cargo consolidation</li>
                                    <li>• Real-time tracking</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• 15+ years of experience</li>
                                    <li>• Competitive rates</li>
                                    <li>• Reliable delivery times</li>
                                    <li>• Expert handling</li>
                                    <li>• 24/7 customer support</li>
                                    <li>• Full insurance coverage</li>
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