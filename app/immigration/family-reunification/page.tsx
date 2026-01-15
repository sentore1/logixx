import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Heart, Clock } from 'lucide-react'
import Image from 'next/image'

export default function FamilyReunificationPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Family Reunification - Bring Your Loved Ones</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    Family reunification visas allow you to bring your loved ones to join you. <span className="text-accent-foreground font-bold">Flash Logix specializes in reuniting families</span> through expert immigration guidance.
                                </p>
                                <p className="text-muted-foreground">Sponsor your spouse, children, parents, and other family members with our comprehensive family immigration services.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Users className="size-4" />
                                            <h3 className="text-sm font-medium">Family Together</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Reunite with spouse, children, and parents abroad.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Heart className="size-4" />
                                            <h3 className="text-sm font-medium">Expert Support</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Complete guidance through the sponsorship process.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/family.jpg" className="rounded-2xl w-full h-auto" alt="family reunification illustration" width={1206} height={612} />
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
                                    <p className="text-muted-foreground">Family reunification applications typically take 12-24 months depending on the relationship and country. Flash Logix ensures complete documentation for smooth processing.</p>
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
