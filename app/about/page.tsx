import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe, Users, Award, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">About Flash Logix</h1>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    <span className="text-accent-foreground font-bold">Flash Logix</span> is Rwanda's leading logistics and freight forwarding company. We specialize in cargo shipping, warehousing, customs clearance, supply chain management, and complete logistics solutions across East Africa and beyond.
                                </p>
                                <p className="text-muted-foreground">Based in Kigali, Rwanda, we provide fast, reliable, and professional logistics services. From air freight to sea cargo, from warehousing to customs clearance, we handle every step of your supply chain.</p>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/New folder/7.jpg" className="rounded-2xl w-full h-64 object-cover shadow-xl" alt="About Flash Logix" width={1207} height={929} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Why Choose Flash Logix?</h2>
                            <p className="mt-4 text-muted-foreground">Fast, trusted, and experienced logistics experts in Rwanda.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-[#FFBF00] flex items-center justify-center mx-auto mb-4">
                                        <Globe className="size-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                                    <p className="text-sm text-muted-foreground">International freight forwarding with global shipping partnerships.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-[#FFBF00] flex items-center justify-center mx-auto mb-4">
                                        <Users className="size-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                                    <p className="text-sm text-muted-foreground">Expert team specializing in logistics, freight, and supply chain management.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-[#FFBF00] flex items-center justify-center mx-auto mb-4">
                                        <Award className="size-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Proven Success</h3>
                                    <p className="text-sm text-muted-foreground">Thousands of successful shipments and satisfied clients.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-[#FFBF00] flex items-center justify-center mx-auto mb-4">
                                        <Target className="size-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                                    <p className="text-sm text-muted-foreground">Tailored logistics solutions to meet your unique business needs.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-semibold lg:text-5xl mb-6">Our Mission & Vision</h2>
                                <p className="text-muted-foreground mb-4">
                                    Our mission is to provide fast, reliable, and professional logistics services to businesses across Rwanda and East Africa. We simplify complex supply chain processes and ensure timely delivery.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    Our vision is to be Rwanda's leading logistics company, known for excellence in freight forwarding, warehousing, customs clearance, and comprehensive supply chain solutions.
                                </p>
                            </div>
                            <div>
                                <Image src="/New folder/11.jpg" alt="Logistics Services" width={600} height={400} className="rounded-2xl shadow-lg" />
                            </div>
                        </div>
                        
                        <div className="mt-16 bg-[#FFBF00] rounded-3xl p-8 md:p-12 text-black">
                            <h3 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[#FFBF00] font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-black">Air Freight</h4>
                                        <p className="text-sm text-gray-700">Fast international cargo shipping</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[#FFBF00] font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-black">Sea Freight</h4>
                                        <p className="text-sm text-gray-700">Cost-effective bulk shipping</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[#FFBF00] font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-black">Road Transport</h4>
                                        <p className="text-sm text-gray-700">Regional delivery across East Africa</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[#FFBF00] font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-black">Warehousing</h4>
                                        <p className="text-sm text-gray-700">Secure storage & inventory management</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[#FFBF00] font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-black">Customs Clearance</h4>
                                        <p className="text-sm text-gray-700">Import/Export documentation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[#FFBF00] font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-black">Supply Chain</h4>
                                        <p className="text-sm text-gray-700">End-to-end logistics solutions</p>
                                    </div>
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
