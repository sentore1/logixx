'use client'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const canadaImages = [
    '/New folder/canadaimage.jpg',
    '/New folder/canadaimage4.jpg',
    '/New folder/canadavisa2.jpg',
    '/New folder/canadaapprove.jpg'
]

export default function CanadaServicesPage() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % canadaImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="relative mb-8">
                            <div className="relative h-80 rounded-3xl overflow-hidden">
                                <Image
                                    src={canadaImages[currentImage]}
                                    alt="Canada Immigration"
                                    fill
                                    className="object-cover"
                                />
                                <button onClick={() => setCurrentImage((prev) => (prev - 1 + canadaImages.length) % canadaImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <ChevronLeft className="size-6" />
                                </button>
                                <button onClick={() => setCurrentImage((prev) => (prev + 1) % canadaImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <ChevronRight className="size-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {canadaImages.map((_, idx) => (
                                        <button key={idx} onClick={() => setCurrentImage(idx)} className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">🇨🇦 Canada Immigration & Visa Services</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Expert guidance for Canadian permanent residency, work permits, study visas, and visitor visas
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Permanent Residency (Express Entry)</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li>✓ <strong>Federal Skilled Worker Program (FSWP)</strong> - For skilled workers with foreign work experience</li>
                                            <li>✓ <strong>Federal Skilled Trades Program (FSTP)</strong> - For skilled tradespeople</li>
                                            <li>✓ <strong>Canadian Experience Class (CEC)</strong> - For those with Canadian work experience</li>
                                            <li>✓ <strong>Provincial Nominee Programs (PNP)</strong> - Province-specific immigration pathways</li>
                                            <li>✓ <strong>Atlantic Immigration Program (AIP)</strong> - For Atlantic provinces</li>
                                        </ul>
                                        <div className="mt-6 flex gap-4">
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/express-entry">Learn More</Link></Button>
                                            <Button asChild variant="outline"><Link href="/contact">Book Consultation</Link></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Express Entry Tools</h2>
                                <div className="grid gap-6 md:grid-cols-3">
                                    <Card>
                                        <CardHeader><h3 className="font-semibold">CRS Calculator</h3></CardHeader>
                                        <CardContent><p className="text-sm text-muted-foreground">Calculate your Comprehensive Ranking System score</p></CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader><h3 className="font-semibold">NOC Code Finder</h3></CardHeader>
                                        <CardContent><p className="text-sm text-muted-foreground">Find your occupation code</p></CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader><h3 className="font-semibold">WES ECA Guidance</h3></CardHeader>
                                        <CardContent><p className="text-sm text-muted-foreground">Educational credential assessment help</p></CardContent>
                                    </Card>
                                </div>
                                <div className="mt-6 text-center">
                                    <Button asChild variant="outline"><Link href="/tools">View All Tools</Link></Button>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Work Permits</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li>✓ <strong>Francophone Mobility Program</strong> - For French-speaking workers</li>
                                            <li>✓ <strong>LMIA-based Work Permits</strong> - Employer-supported work permits</li>
                                            <li>✓ <strong>Open Work Permits</strong> - Work for any employer in Canada</li>
                                            <li>✓ <strong>Employer-specific Permits</strong> - Tied to specific employer</li>
                                        </ul>
                                        <div className="mt-6">
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/work-permit">Apply Now</Link></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Study in Canada</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li>✓ <strong>Admission Support</strong> - University and college applications</li>
                                            <li>✓ <strong>Student Visa Application</strong> - Complete visa processing</li>
                                            <li>✓ <strong>Statement of Purpose (SOP) Writing</strong> - Professional SOP assistance</li>
                                        </ul>
                                        <div className="mt-6">
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/study-abroad/canada">Explore Programs</Link></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Temporary Residency</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li>✓ <strong>Visitor Visa</strong> - Tourist and business visits</li>
                                            <li>✓ <strong>Super Visa</strong> - Long-term parent/grandparent visits</li>
                                            <li>✓ <strong>Family Visit Visa</strong> - Visit family in Canada</li>
                                            <li>✓ <strong>Tourist Visa</strong> - Explore Canada</li>
                                        </ul>
                                        <div className="mt-6">
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/tourist-visa">Apply for Visa</Link></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-950/20 rounded-3xl p-12">
                            <h2 className="text-3xl font-semibold mb-4">Ready to Move to Canada?</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free consultation to discuss your Canada immigration options</p>
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Book Free Consultation</Link></Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
