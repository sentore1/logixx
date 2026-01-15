import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Plane, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function TouristVisaPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Tourist Visa - Explore the World</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    A tourist visa allows you to visit a country for leisure, sightseeing, or visiting family. <span className="text-accent-foreground font-bold">Flash Logix simplifies the process</span> for hassle-free travel.
                                </p>
                                <p className="text-muted-foreground">Explore new destinations, visit loved ones, and attend special events with our streamlined tourist visa services.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Plane className="size-4" />
                                            <h3 className="text-sm font-medium">Easy Travel</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Quick visa processing for leisure and family visits.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="size-4" />
                                            <h3 className="text-sm font-medium">Global Access</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Tourist visas for all major destinations worldwide.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/heroimage2.png" className="rounded-2xl w-full h-auto" alt="tourist visa illustration" width={1206} height={612} />
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
                                    <p className="text-muted-foreground">Tourist visa processing typically takes 2-4 weeks. Flash Logix ensures all documentation is correct to avoid delays and rejections.</p>
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
