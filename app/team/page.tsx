'use client'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function TeamPage() {
    const teamMembers = [
        {
            name: "1. Iradukunda Olivier - Co-founder & Managing Director",
            position: "Managing Director",
            background: "Committed to delivering exceptional customer service and building lasting relationships with clients across the region.",
            image1: "/team/4.jpg",
            image2: "/team/44.jpg"
        },
        {
            name: "2. Igiraneza Jacques - Co-founder & Director of Operations",
            position: "Director of Operations",
            background: "15+ years of logistics expertise across East Africa. Passionate about connecting businesses through innovative supply chain solutions.",
            image1: "/team/1.jpg",
            image2: "/team/11.jpg"
        }
    ]

    const TeamMemberCard = ({ member, index }: { member: any, index: number }) => {
        const [currentImage, setCurrentImage] = useState(member.image1)
        
        return (
            <div className="group relative max-w-md mx-auto">
                <Card className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl border-2 border-gray-100">
                    <CardContent className="p-6">
                        <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
                            <Image
                                src={currentImage}
                                alt={member.name}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-105"
                                onMouseEnter={() => setCurrentImage(member.image2)}
                                onMouseLeave={() => setCurrentImage(member.image1)}
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2 text-black group-hover:text-[#FFBF00] transition-colors duration-300">{member.name}</h3>
                            <div className="w-12 h-0.5 bg-[#FFBF00] mx-auto mb-3"></div>
                            <p className="text-gray-700 font-medium text-base mb-3">{member.position}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-20">
                            <h1 className="text-4xl font-bold lg:text-5xl mb-6 text-black">
                                Meet Our <span className="text-[#FFBF00]">Leadership</span>
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                                The dedicated professionals behind Flash Logix who make your logistics dreams a reality across East Africa and beyond.
                            </p>
                        </div>

                        {/* Team Members Grid */}
                        <div className="grid gap-12 md:grid-cols-2 lg:gap-16 mb-20 max-w-4xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard key={index} member={member} index={index} />
                            ))}
                        </div>

                        {/* Company Values */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <Card className="bg-[#FFBF00] border-[#FFBF00] text-center rounded-3xl">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-black mb-4">15+ Years</h3>
                                    <p className="text-black">Of logistics excellence in East Africa</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#FFBF00] border-[#FFBF00] text-center rounded-3xl">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-black mb-4">24/7</h3>
                                    <p className="text-black">Customer support and tracking</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#FFBF00] border-[#FFBF00] text-center rounded-3xl">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-black mb-4">100%</h3>
                                    <p className="text-black">Commitment to your success</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Join Our Team */}
                        <Card className="bg-black border-black border-2 rounded-3xl">
                            <CardContent className="p-12 text-center">
                                <h2 className="text-3xl font-bold text-[#FFBF00] mb-6">Join Our Growing Team</h2>
                                <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                                    Flash Logix is always seeking passionate individuals to join our mission of connecting East Africa through world-class logistics solutions.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-[#FFBF00]">
                                    <MapPin className="w-5 h-5" />
                                    <span>Kigali, Rwanda | careers@flashlogixco.com</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}