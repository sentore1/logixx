import { HeroHeader } from '@/components/header'
import ApplicationForm from '@/components/application-form'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, FileCheck, Clock } from 'lucide-react'
import Image from 'next/image'

export default function SponsorshipVisaPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Sponsorship Visa - Complete Support</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    Sponsorship visas allow employers or family members to sponsor foreign nationals. <span className="text-accent-foreground font-bold">Flash Logix manages the entire process</span> for both sponsors and applicants.
                                </p>
                                <p className="text-muted-foreground">From employer sponsorship to family reunification, we ensure compliance with all requirements and smooth processing.</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Shield className="size-4" />
                                            <h3 className="text-sm font-medium">Full Compliance</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Meet all legal requirements and obligations.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <FileCheck className="size-4" />
                                            <h3 className="text-sm font-medium">Expert Guidance</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Complete support for sponsors and applicants.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/Permanent Resident.jpg" className="rounded-2xl w-full h-auto" alt="sponsorship visa illustration" width={1206} height={612} />
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
                                    <h2 className="text-2xl font-semibold mb-3">How Flash Logix Helps</h2>
                                    <p className="text-muted-foreground">We guide both sponsors and applicants through documentation, eligibility assessment, application submission, and follow-up. Our expertise ensures compliance with all sponsorship requirements.</p>
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
