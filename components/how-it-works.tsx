import { CheckCircle, FileText, Plane, UserCheck, MessageSquare, Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl mb-4">How Flash Logix Works</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your trusted logistics partner in Rwanda. We simplify cargo shipping and supply chain management in 4 clear steps.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFBF00]">
                            <UserCheck className="size-5 text-black" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Request Quote</h3>
                        <p className="text-sm text-gray-600">
                            Get instant shipping quote for air, sea, or road freight.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFBF00]">
                            <FileText className="size-5 text-black" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Cargo Processing</h3>
                        <p className="text-sm text-gray-600">
                            Complete documentation and customs clearance support.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFBF00]">
                            <CheckCircle className="size-5 text-black" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Shipment Dispatch</h3>
                        <p className="text-sm text-gray-600">
                            Professional handling and secure transportation.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFBF00]">
                            <Plane className="size-5 text-black" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Delivery & Tracking</h3>
                        <p className="text-sm text-gray-600">
                            Real-time tracking and timely delivery.
                        </p>
                    </div>
                </div>

                <div className="bg-[#FFBF00] rounded-[2rem] p-8 md:p-10 text-black shadow-2xl">
                    <h3 className="text-3xl font-bold mb-8 text-center">Complete Logistics Solutions</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Air Freight</strong>
                                <span className="text-sm text-gray-700">Fast international shipping</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Sea Freight</strong>
                                <span className="text-sm text-gray-700">Cost-effective bulk cargo</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Road Transport</strong>
                                <span className="text-sm text-gray-700">Regional delivery services</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Warehousing</strong>
                                <span className="text-sm text-gray-700">Secure storage solutions</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Customs Clearance</strong>
                                <span className="text-sm text-gray-700">Expert documentation support</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Real-Time Tracking</strong>
                                <span className="text-sm text-gray-700">Monitor your shipments 24/7</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-black text-[#FFBF00] hover:bg-gray-800 font-semibold hover:scale-105 transition-transform duration-200">
                                <Link href="/contact" className="flex items-center gap-2">
                                    <MessageSquare className="size-4" />
                                    Get Free Quote
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="bg-transparent text-black hover:bg-black hover:text-[#FFBF00] font-semibold border-2 border-black hover:scale-105 transition-transform duration-200">
                                <Link href="/tools" className="flex items-center gap-2">
                                    <Package className="size-4" />
                                    Track Shipment
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
