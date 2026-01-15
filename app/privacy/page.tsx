import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function PrivacyPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>
                        <div className="prose max-w-none">
                            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                            <p className="mb-6">Flash Logix collects information necessary to provide our logistics services, including contact details, shipment information, and tracking data.</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Process and track shipments</li>
                                <li>Communicate service updates</li>
                                <li>Improve our logistics services</li>
                                <li>Comply with legal requirements</li>
                            </ul>
                            
                            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                            <p className="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                            
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p>For privacy-related questions, contact us at info@flashlogix.rw or +250 793 145 109.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}