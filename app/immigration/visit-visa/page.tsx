import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'

export default function VisitVisaPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Visit Visa - Short-Term Travel Made Easy</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    A visit visa allows temporary entry for business, family visits, or short stays. <span className="text-accent-foreground font-bold">Flash Logix streamlines your application</span> for quick approval.
                                </p>
                                <p className="text-muted-foreground">Perfect for business meetings, family visits, medical treatment, and attending special events worldwide.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="size-4" />
                                            <h3 className="text-sm font-medium">Multiple Purposes</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Business, tourism, family visits, and more.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="size-4" />
                                            <h3 className="text-sm font-medium">Quick Process</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Fast processing for urgent travel needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/visit.jpg" className="rounded-2xl w-full h-auto" alt="visit visa illustration" width={1206} height={612} />
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
                                    <p className="text-muted-foreground">Visit visa applications are typically processed within 2-3 weeks. Flash Logix ensures your application is complete and accurate for the fastest approval.</p>
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
