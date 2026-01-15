import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function TermsPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Terms of Service</h1>
                        <div className="prose max-w-none">
                            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">Service Agreement</h2>
                            <p className="mb-6">By using Flash Logix services, you agree to these terms and conditions for freight forwarding, warehousing, and logistics services.</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">Service Scope</h2>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Freight forwarding and transportation</li>
                                <li>Warehousing and storage services</li>
                                <li>Customs clearance assistance</li>
                                <li>Supply chain management</li>
                            </ul>
                            
                            <h2 className="text-2xl font-semibold mb-4">Liability</h2>
                            <p className="mb-6">Flash Logix provides services with professional care. Liability is limited to the value of goods as declared and insured.</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
                            <p className="mb-6">Payment terms are specified in individual service agreements. Standard payment terms are net 30 days from invoice date.</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                            <p>For questions about these terms, contact us at info@flashlogix.rw or +250 793 145 109.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}