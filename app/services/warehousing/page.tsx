import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function WarehousingPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Warehousing Services</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Secure storage and inventory management solutions for your business needs.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Storage Solutions</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Climate-controlled storage</li>
                                    <li>• Bulk storage facilities</li>
                                    <li>• Short & long-term storage</li>
                                    <li>• Inventory management</li>
                                    <li>• Distribution services</li>
                                    <li>• Cross-docking operations</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• 24/7 security monitoring</li>
                                    <li>• Real-time inventory tracking</li>
                                    <li>• Flexible storage options</li>
                                    <li>• Professional handling</li>
                                    <li>• Insurance coverage</li>
                                    <li>• Strategic Kigali location</li>
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