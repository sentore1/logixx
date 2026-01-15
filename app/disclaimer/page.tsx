import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function DisclaimerPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8">Disclaimer</h1>
                        
                        <div className="space-y-6 text-muted-foreground">
                            <p>
                                The information provided by Flash Logix on our website and through our logistics services is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
                            </p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">No Professional Advice</h2>
                            <p>
                                The information on this website does not constitute professional legal, financial, or customs advice. You should consult with appropriate professionals before making any decisions based on the information provided.
                            </p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Logistics Service Results</h2>
                            <p>
                                While Flash Logix strives to provide the best possible logistics services, we cannot guarantee specific delivery times or outcomes due to factors beyond our control such as weather, customs delays, or regulatory changes.
                            </p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. Flash Logix has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                            </p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to Services</h2>
                            <p>
                                Flash Logix reserves the right to modify, suspend, or discontinue any aspect of our logistics services at any time without prior notice.
                            </p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Limitation of Liability</h2>
                            <p>
                                In no event shall Flash Logix be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our logistics services.
                            </p>

                            <p className="mt-8 text-sm">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
