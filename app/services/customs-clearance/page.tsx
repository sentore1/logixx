import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function CustomsClearancePage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Customs Clearance</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Expert customs clearance and documentation services for smooth import/export operations.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Import Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Import documentation</li>
                                    <li>• Duty calculation</li>
                                    <li>• Permit applications</li>
                                    <li>• Compliance verification</li>
                                    <li>• Tax optimization</li>
                                    <li>• Fast clearance processing</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Export Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Export documentation</li>
                                    <li>• Certificate of origin</li>
                                    <li>• Export permits</li>
                                    <li>• Regulatory compliance</li>
                                    <li>• Trade agreements</li>
                                    <li>• Documentation support</li>
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