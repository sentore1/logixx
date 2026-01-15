import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function AirFreightPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Air Freight Solutions</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Fast and reliable air cargo services for time-sensitive shipments worldwide.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Express air freight</li>
                                    <li>• Consolidated shipments</li>
                                    <li>• Charter flights</li>
                                    <li>• Temperature-controlled cargo</li>
                                    <li>• Dangerous goods handling</li>
                                    <li>• Door-to-door delivery</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Destinations</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Europe & UK</li>
                                    <li>• North America</li>
                                    <li>• Asia Pacific</li>
                                    <li>• Middle East</li>
                                    <li>• East Africa</li>
                                    <li>• Global network coverage</li>
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