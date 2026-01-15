import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Ship, DollarSign, Package, Anchor } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SeaFreightPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24 pb-16">
                <section className="py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
                    <div className="mx-auto max-w-6xl px-6 text-center">
                        <div className="w-20 h-20 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Ship className="size-10 text-black" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sea <span className="text-[#FFBF00]">Freight</span></h1>
                        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                            Cost-effective ocean shipping solutions for bulk cargo worldwide
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
                                <h2 className="text-3xl font-bold mb-6">Ocean Freight Solutions</h2>
                                <p className="text-gray-600 mb-6">Our sea freight services offer the most economical shipping solution for large volumes and non-urgent cargo to international destinations.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Full Container Load (FCL)
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Less Container Load (LCL)
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Break bulk cargo
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-[#FFBF00] rounded-full mr-3"></div>
                                        Port-to-port shipping
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Image src="/servicesimage/sea.jpg" alt="Sea Freight" width={600} height={400} className="rounded-2xl shadow-lg" />
                            </div>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3 mb-20">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="size-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Cost Effective</h3>
                                <p className="text-gray-600">Most economical solution for bulk cargo shipments</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Package className="size-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Large Capacity</h3>
                                <p className="text-gray-600">Handle oversized and heavy cargo with ease</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Anchor className="size-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Reliable Service</h3>
                                <p className="text-gray-600">Scheduled sailings to major ports worldwide</p>
                            </div>
                        </div>

                        <div className="bg-[#FFBF00] rounded-3xl p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4 text-black">Ready to Ship by Sea?</h2>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Get competitive rates for your ocean freight needs</p>
                            <Button asChild size="lg" className="bg-black text-[#FFBF00] hover:bg-gray-800">
                                <Link href="/contact">Get Sea Freight Quote</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}