import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, TrendingUp, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ExpressEntryPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Express Entry - Fast-Track to Canada</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    Express Entry is Canada's fast-track immigration system for skilled workers. <span className="text-accent-foreground font-bold">Flash Logix maximizes your CRS score</span> to secure your invitation to apply.
                                </p>
                                <p className="text-muted-foreground">We optimize your profile, guide you through ECA and language tests, and manage your complete application for the fastest processing.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Zap className="size-4" />
                                            <h3 className="text-sm font-medium">Fast Processing</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Get your PR in as little as 6 months with Express Entry.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="size-4" />
                                            <h3 className="text-sm font-medium">Score Boost</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Maximize your CRS score with our expert strategies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/Express.png" className="rounded-2xl w-full h-auto" alt="express entry illustration" width={1206} height={612} />
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
                                    <p className="text-muted-foreground">Express Entry applications are typically processed within 6 months of receiving an Invitation to Apply (ITA). Flash Logix helps you build a competitive profile to receive your ITA faster.</p>
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
