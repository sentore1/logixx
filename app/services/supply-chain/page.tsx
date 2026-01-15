import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function SupplyChainPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Supply Chain Management</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            End-to-end supply chain solutions to optimize your business operations.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Solutions</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Supply chain optimization</li>
                                    <li>• Vendor management</li>
                                    <li>• Route planning</li>
                                    <li>• Cost analysis</li>
                                    <li>• Risk management</li>
                                    <li>• Performance monitoring</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Reduced operational costs</li>
                                    <li>• Improved efficiency</li>
                                    <li>• Better inventory control</li>
                                    <li>• Enhanced visibility</li>
                                    <li>• Faster delivery times</li>
                                    <li>• Strategic partnerships</li>
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