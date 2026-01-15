import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Truck, Ship, Plane, Warehouse, FileCheck, Package, Clock, Shield, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
                    <div className="mx-auto max-w-6xl px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-[#FFBF00]">Services</span></h1>
                        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                            Comprehensive logistics and freight forwarding solutions across Rwanda and East Africa
                        </p>
                        <Button asChild size="lg" className="bg-[#FFBF00] text-black hover:bg-yellow-400 font-semibold">
                            <Link href="/contact">Get Free Quote</Link>
                        </Button>
                    </div>
                </section>

                {/* Main Services Grid */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Air Freight */}
                            <div className="group relative overflow-hidden rounded-[2rem] bg-white border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBF00] rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="p-8">
                                    <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6">
                                        <Plane className="size-5 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Air Freight</h3>
                                    <p className="text-gray-600 mb-6">Fast international cargo shipping with express delivery options and temperature-controlled solutions.</p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Express air cargo delivery
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Temperature-controlled cargo
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Dangerous goods handling
                                        </li>
                                    </ul>
                                    <Button asChild className="w-full bg-black text-[#FFBF00] hover:bg-gray-800 group">
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Get Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Sea Freight */}
                            <div className="group relative overflow-hidden rounded-[2rem] bg-white border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBF00] rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="p-8">
                                    <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6">
                                        <Ship className="size-5 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Sea Freight</h3>
                                    <p className="text-gray-600 mb-6">Cost-effective bulk shipping solutions with full container and less container load options.</p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Full Container Load (FCL)
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Less Container Load (LCL)
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Break bulk cargo
                                        </li>
                                    </ul>
                                    <Button asChild className="w-full bg-black text-[#FFBF00] hover:bg-gray-800 group">
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Get Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Road Transport */}
                            <div className="group relative overflow-hidden rounded-[2rem] bg-white border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBF00] rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="p-8">
                                    <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6">
                                        <Truck className="size-5 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Road Transport</h3>
                                    <p className="text-gray-600 mb-6">Regional delivery across East Africa with cross-border trucking and last-mile delivery.</p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Regional East Africa delivery
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Cross-border trucking
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Last-mile delivery
                                        </li>
                                    </ul>
                                    <Button asChild className="w-full bg-black text-[#FFBF00] hover:bg-gray-800 group">
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Get Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Warehousing */}
                            <div className="group relative overflow-hidden rounded-[2rem] bg-white border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBF00] rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="p-8">
                                    <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6">
                                        <Warehouse className="size-5 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Warehousing</h3>
                                    <p className="text-gray-600 mb-6">Secure storage facilities with inventory management and distribution services.</p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Secure storage facilities
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Inventory management
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Distribution services
                                        </li>
                                    </ul>
                                    <Button asChild className="w-full bg-black text-[#FFBF00] hover:bg-gray-800 group">
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Get Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Customs Clearance */}
                            <div className="group relative overflow-hidden rounded-[2rem] bg-white border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBF00] rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="p-8">
                                    <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6">
                                        <FileCheck className="size-5 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Customs Clearance</h3>
                                    <p className="text-gray-600 mb-6">Expert customs brokerage and import/export documentation services.</p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Import/Export documentation
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Duty calculation
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Compliance management
                                        </li>
                                    </ul>
                                    <Button asChild className="w-full bg-black text-[#FFBF00] hover:bg-gray-800 group">
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Get Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Express Delivery */}
                            <div className="group relative overflow-hidden rounded-[2rem] bg-white border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBF00] rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="p-8">
                                    <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6">
                                        <Package className="size-5 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Express Delivery</h3>
                                    <p className="text-gray-600 mb-6">Time-critical shipments with same-day and next-day delivery options.</p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Same-day delivery
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Next-day delivery
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                            Time-critical shipments
                                        </li>
                                    </ul>
                                    <Button asChild className="w-full bg-black text-[#FFBF00] hover:bg-gray-800 group">
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Get Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Why Choose Flash Logix?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We deliver excellence in every shipment with our comprehensive logistics solutions</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Clock className="size-10 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Fast & Reliable</h3>
                                <p className="text-gray-600">On-time delivery with real-time tracking and 24/7 customer support</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Shield className="size-10 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Secure & Safe</h3>
                                <p className="text-gray-600">Advanced security measures and insurance coverage for all shipments</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Globe className="size-10 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Global Network</h3>
                                <p className="text-gray-600">Extensive network across East Africa and international destinations</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ship Your <span className="text-[#FFBF00]">Cargo?</span></h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get a free quote from our logistics experts and experience the Flash Logix difference
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-[#FFBF00] text-black hover:bg-yellow-400 font-semibold">
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-[#FFBF00] text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black">
                                <Link href="https://wa.me/250793145109">WhatsApp Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}