import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Truck, Ship, Plane, Warehouse, FileCheck, Package } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-16 bg-black text-white">
                    <div className="mx-auto max-w-5xl px-6 text-center">
                        <h1 className="text-5xl font-bold mb-4">Our <span className="text-[#FFBF00]">Services</span></h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Comprehensive logistics solutions across Rwanda and East Africa
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Air Freight */}
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Plane className="size-5 text-[#FFBF00] mb-3" />
                                <h3 className="text-xl font-bold mb-2">Air Freight</h3>
                                <p className="text-gray-600 text-sm mb-4">Fast international cargo shipping with express delivery options.</p>
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>

                            {/* Sea Freight */}
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Ship className="size-5 text-[#FFBF00] mb-3" />
                                <h3 className="text-xl font-bold mb-2">Sea Freight</h3>
                                <p className="text-gray-600 text-sm mb-4">Cost-effective bulk shipping with FCL and LCL options.</p>
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>

                            {/* Road Transport */}
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Truck className="size-5 text-[#FFBF00] mb-3" />
                                <h3 className="text-xl font-bold mb-2">Road Transport</h3>
                                <p className="text-gray-600 text-sm mb-4">Regional delivery across East Africa with cross-border trucking.</p>
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>

                            {/* Warehousing */}
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Warehouse className="size-5 text-[#FFBF00] mb-3" />
                                <h3 className="text-xl font-bold mb-2">Warehousing</h3>
                                <p className="text-gray-600 text-sm mb-4">Secure storage with inventory management and distribution.</p>
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>

                            {/* Customs Clearance */}
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <FileCheck className="size-5 text-[#FFBF00] mb-3" />
                                <h3 className="text-xl font-bold mb-2">Customs Clearance</h3>
                                <p className="text-gray-600 text-sm mb-4">Expert customs brokerage and import/export documentation.</p>
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>

                            {/* Express Delivery */}
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Package className="size-5 text-[#FFBF00] mb-3" />
                                <h3 className="text-xl font-bold mb-2">Express Delivery</h3>
                                <p className="text-gray-600 text-sm mb-4">Time-critical shipments with same-day and next-day delivery.</p>
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-black text-white">
                    <div className="mx-auto max-w-3xl px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
                        <p className="text-gray-300 mb-6">
                            Get a free quote from our logistics experts
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild size="lg" className="bg-[#FFBF00] text-black hover:bg-yellow-400">
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-[#FFBF00] text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black">
                                <Link href="https://wa.me/250793145109">WhatsApp</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}