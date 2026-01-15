'use client'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const usaImages = [
    '/New folder/usavisa.jpg',
    '/New folder/greencard.jpg',
    '/New folder/lottery.jpg',
    '/New folder/studentvisa.jpg'
]

export default function USAServicesPage() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % usaImages.length)
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
                                    src={usaImages[currentImage]}
                                    alt="USA Visa Services"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <button onClick={() => setCurrentImage((prev) => (prev - 1 + usaImages.length) % usaImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <ChevronLeft className="size-6" />
                                </button>
                                <button onClick={() => setCurrentImage((prev) => (prev + 1) % usaImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <ChevronRight className="size-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {usaImages.map((_, idx) => (
                                        <button key={idx} onClick={() => setCurrentImage(idx)} className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">🇺🇸 USA Visa Services</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Complete support for DV Lottery, student visas, work visas, and family-based immigration
                        </p>

                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <h2 className="text-2xl font-semibold">DV Lottery Support</h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Complete assistance with Diversity Visa Lottery application, photo requirements, and interview preparation.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                        <li>✓ Application form completion</li>
                                        <li>✓ Photo specifications guidance</li>
                                        <li>✓ Document preparation</li>
                                        <li>✓ Interview coaching</li>
                                    </ul>
                                    <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/visit-visa">Apply Now</Link></Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h2 className="text-2xl font-semibold">K1 Fiancé Visa</h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        K1 visa for fiancé(e)s of US citizens. Complete support from petition to interview.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                        <li>✓ I-129F petition assistance</li>
                                        <li>✓ Relationship evidence preparation</li>
                                        <li>✓ Embassy interview preparation</li>
                                        <li>✓ Medical exam guidance</li>
                                    </ul>
                                    <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Get Started</Link></Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h2 className="text-2xl font-semibold">Student Visas (F1/M1)</h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        F1 and M1 student visa applications for universities and vocational schools.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                        <li>✓ University admission support</li>
                                        <li>✓ I-20 form processing</li>
                                        <li>✓ DS-160 form completion</li>
                                        <li>✓ SEVIS fee payment guidance</li>
                                        <li>✓ Visa interview preparation</li>
                                    </ul>
                                    <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/study-abroad/usa">Learn More</Link></Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h2 className="text-2xl font-semibold">B1/B2 & Family-Based Visas</h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Tourist, business, and family-based visa applications for temporary and permanent stays.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                        <li>✓ B1/B2 tourist and business visas</li>
                                        <li>✓ Family reunification visas</li>
                                        <li>✓ DS-160 form assistance</li>
                                        <li>✓ Supporting documents preparation</li>
                                        <li>✓ Interview coaching</li>
                                    </ul>
                                    <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Apply Now</Link></Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-3xl font-semibold mb-6 text-center">USA Visa Tools</h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                <Card>
                                    <CardHeader><h3 className="font-semibold">DS-160 Preparation</h3></CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">Complete guide to filling DS-160 form correctly</p></CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><h3 className="font-semibold">DV Lottery Photo Tool</h3></CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">Ensure your photo meets all requirements</p></CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><h3 className="font-semibold">Interview Preparation</h3></CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">Tips and practice for visa interviews</p></CardContent>
                                </Card>
                            </div>
                            <div className="mt-6 text-center">
                                <Button asChild variant="outline"><Link href="/tools">View All Tools</Link></Button>
                            </div>
                        </div>

                        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-950/20 rounded-3xl p-12">
                            <h2 className="text-3xl font-semibold mb-4">Ready to Apply for USA Visa?</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free consultation to discuss your USA immigration options</p>
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Book Free Consultation</Link></Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
