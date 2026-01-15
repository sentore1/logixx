import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function RoadTransportPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8">Road Transport Solutions</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Reliable road freight services connecting Rwanda to East Africa and beyond.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Transport Services</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Full truck load (FTL)</li>
                                    <li>• Less truck load (LTL)</li>
                                    <li>• Cross-border transport</li>
                                    <li>• Last-mile delivery</li>
                                    <li>• Temperature-controlled trucks</li>
                                    <li>• Oversized cargo transport</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Coverage Areas</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Rwanda nationwide</li>
                                    <li>• Uganda & Kenya</li>
                                    <li>• Tanzania & Burundi</li>
                                    <li>• DRC border regions</li>
                                    <li>• Port connections</li>
                                    <li>• Regional corridors</li>
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