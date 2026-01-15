import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Globe, Clock } from 'lucide-react'
import Image from 'next/image'

export default function WorkPermitPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Work Permit - Your Gateway to International Career</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    A work permit allows foreign nationals to work legally in a host country. <span className="text-accent-foreground font-bold">Flash Logix specializes in securing work permits</span> for professionals seeking international career opportunities.
                                </p>
                                <p className="text-muted-foreground">Access international job markets, gain valuable work experience, and create pathways to permanent residency with our expert guidance.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="size-4" />
                                            <h3 className="text-sm font-medium">Career Growth</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Access to high-demand jobs and international experience.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Globe className="size-4" />
                                            <h3 className="text-sm font-medium">Global Reach</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Work permits for Canada, UK, USA, UAE, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/workpermit2.jpg" className="rounded-2xl" alt="work permit illustration" width={1206} height={612} />
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
                                    <p className="text-muted-foreground">Work permit processing typically takes 2-6 months depending on the country and visa type. Flash Logix ensures your application is complete and accurate to avoid delays.</p>
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
