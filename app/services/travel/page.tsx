'use client'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plane, MapPin, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const travelImages = [
    '/New folder/travelimage.jpg',
    '/New folder/travelimage2.jpg',
    '/New folder/travelimage3.jpg',
    '/New folder/travelimages.jpg'
]

export default function TravelServicesPage() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % travelImages.length)
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
                                    src={travelImages[currentImage]}
                                    alt="Travel Services"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50"></div>
                                <button onClick={() => setCurrentImage((prev) => (prev - 1 + travelImages.length) % travelImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <ChevronLeft className="size-6" />
                                </button>
                                <button onClick={() => setCurrentImage((prev) => (prev + 1) % travelImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <ChevronRight className="size-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {travelImages.map((_, idx) => (
                                        <button key={idx} onClick={() => setCurrentImage(idx)} className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Travel & Agency Services</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Complete travel solutions including flight booking and car rental services
                        </p>

                        <div className="grid gap-8 md:grid-cols-2 mb-16">
                            <Card>
                                <CardHeader>
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                        <Plane className="size-4 text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">Flight Booking Services</h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        Book international and domestic flights at competitive rates with expert assistance.
                                    </p>
                                    <ul className="space-y-3 text-muted-foreground mb-6">
                                        <li><strong>International Flights</strong> - Worldwide destinations</li>
                                        <li><strong>Competitive Rates</strong> - Best prices guaranteed</li>
                                        <li><strong>Flight Changes</strong> - Easy rebooking assistance</li>
                                        <li><strong>Group Bookings</strong> - Special rates for groups</li>
                                        <li><strong>24/7 Support</strong> - Travel assistance anytime</li>
                                    </ul>
                                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700"><Link href="/flight-booking">Book Flight Now</Link></Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                        <MapPin className="size-4 text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">Car Rental Services</h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        Reliable car rental services in Rwanda and international destinations.
                                    </p>
                                    <ul className="space-y-3 text-muted-foreground mb-6">
                                        <li><strong>Wide Selection</strong> - Economy to luxury vehicles</li>
                                        <li><strong>Airport Pickup</strong> - Convenient pickup locations</li>
                                        <li><strong>Flexible Rental</strong> - Daily, weekly, monthly rates</li>
                                        <li><strong>Insurance Options</strong> - Comprehensive coverage</li>
                                        <li><strong>GPS & Extras</strong> - Additional equipment available</li>
                                    </ul>
                                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700"><Link href="/car-rental">Rent a Car</Link></Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Our Travel Services?</h2>
                            <div className="grid gap-6 md:grid-cols-4">
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                            <Shield className="size-4 text-blue-600" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Trusted Service</h3>
                                        <p className="text-sm text-muted-foreground">Years of experience in travel industry</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                            <Clock className="size-4 text-blue-600" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Fast Booking</h3>
                                        <p className="text-sm text-muted-foreground">Quick and easy reservation process</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                            <Plane className="size-4 text-blue-600" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Best Prices</h3>
                                        <p className="text-sm text-muted-foreground">Competitive rates on all services</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="size-4 text-blue-600" />
                                        </div>
                                        <h3 className="font-semibold mb-2">24/7 Support</h3>
                                        <p className="text-sm text-muted-foreground">Always here to help you</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-semibold mb-4">Complete Travel Package</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Combine your visa application with our travel services for a seamless experience. We handle everything from visa processing to flight booking and car rental.
                                    </p>
                                    <ul className="space-y-2 text-muted-foreground mb-6">
                                        <li>Visa application assistance</li>
                                        <li>Flight booking at best rates</li>
                                        <li>Airport car rental arrangement</li>
                                        <li>Travel insurance options</li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 mb-4"><Link href="/contact">Get Travel Package Quote</Link></Button>
                                    <p className="text-sm text-muted-foreground">Or call us: +250 793 145 109</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
