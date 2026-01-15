import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Plane, Clock, Shield, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AirFreightPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24 pb-16">
                <section className="py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
                    <div className="mx-auto max-w-6xl px-6 text-center">
                        <div className="w-20 h-20 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Plane className="size-10 text-black" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Air <span className="text-[#FFBF00]">Freight</span></h1>
                        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                            Fast, reliable air cargo services connecting Rwanda to the world
                        </p>
                        <Button asChild size="lg" className="bg-[#FFBF00] text-black hover:bg-yellow-400 font-semibold">
                            <Link href="/contact">Get Quote</Link>
                        </Button>
                    </div>
                </section>

                <section className="py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Express Air Cargo Solutions</h2>
                                <p className="text-gray-600 mb-6">Our air freight services provide the fastest shipping solutions for time-sensitive cargo, connecting Rwanda to major international destinations.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Express air cargo delivery
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Temperature-controlled cargo
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Dangerous goods handling
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Door-to-door delivery
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Image src="/servicesimage/air.jpg" alt="Air Freight" width={600} height={400} className="rounded-2xl shadow-lg" />
                            </div>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3 mb-20">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="size-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Fast Transit</h3>
                                <p className="text-gray-600">24-48 hour delivery to major destinations worldwide</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="size-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Secure Handling</h3>
                                <p className="text-gray-600">Professional cargo handling with full insurance coverage</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="size-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Global Network</h3>
                                <p className="text-gray-600">Connections to 200+ destinations worldwide</p>
                            </div>
                        </div>

                        <div className="bg-[#FFBF00] rounded-3xl p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4 text-black">Ready to Ship by Air?</h2>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Get instant quotes for your air freight needs</p>
                            <Button asChild size="lg" className="bg-black text-[#FFBF00] hover:bg-gray-800">
                                <Link href="/contact">Get Air Freight Quote</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}