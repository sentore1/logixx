import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Shield, Clock } from 'lucide-react'
import Image from 'next/image'

export default function PermanentResidentPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Permanent Resident - Build Your Future Abroad</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    Permanent residency grants you the right to live, work, and study indefinitely. <span className="text-accent-foreground font-bold">Flash Logix guides you through every step</span> of securing your permanent resident status.
                                </p>
                                <p className="text-muted-foreground">Access healthcare, sponsor family members, and create a pathway to citizenship with our comprehensive PR services.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Home className="size-4" />
                                            <h3 className="text-sm font-medium">Settle Permanently</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Live and work indefinitely with full rights and benefits.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Shield className="size-4" />
                                            <h3 className="text-sm font-medium">Secure Future</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Access to healthcare, education, and social services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/Permanent Resident.jpg" className="rounded-2xl" alt="permanent resident illustration" width={1206} height={612} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl px-6">
                    <ApplicationForm />

                    <Card className="border-border/50 rounded-3xl mt-16 max-w-xl ml-auto">
                        <CardContent className="p-8">
                            <div className="flex gap-4 items-start">
                                <Clock className="size-6 text-primary shrink-0" />
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3">Processing Time</h2>
                                    <p className="text-muted-foreground">Permanent residency applications typically take 6-18 months. Flash Logix ensures your application meets all requirements for the fastest possible processing.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </>
    )
}
