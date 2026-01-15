import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function SeaFreightPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Sea Freight Solutions</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Cost-effective ocean freight services for large volume shipments worldwide.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Container Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Full container load (FCL)</li>
                                    <li>• Less container load (LCL)</li>
                                    <li>• Refrigerated containers</li>
                                    <li>• Special cargo handling</li>
                                    <li>• Port-to-port delivery</li>
                                    <li>• Door-to-door service</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Key Ports</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Mombasa, Kenya</li>
                                    <li>• Dar es Salaam, Tanzania</li>
                                    <li>• Dubai, UAE</li>
                                    <li>• Rotterdam, Netherlands</li>
                                    <li>• Shanghai, China</li>
                                    <li>• Global port network</li>
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