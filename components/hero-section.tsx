'use client'
import React from 'react'
import Image from 'next/image'
import { Mail, SendHorizonal, ChevronLeft, ChevronRight, Truck, Shield, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import Link from 'next/link'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const heroImages = [
    '/New folder/1.jpg',
    '/New folder/2.jpg',
    '/New folder/3.jpg',
    '/New folder/4.jpg',
    '/New folder/5.jpg'
]

export default function HeroSection() {
    const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [currentImage, setCurrentImage] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        
        setLoading(true)
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'Logistics Quote Request',
                    email,
                }),
            })
            setEmail('')
            alert('Thank you! We will contact you soon.')
        } catch (error) {
            alert('Failed to send. Please try again.')
        }
        setLoading(false)
    }

    return (
        <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
            <section className="relative">
                <div className="absolute inset-0">
                    <Image
                        src="/New folder/1.jpg"
                        alt="Flash Logix Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48 z-10">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <div className="mb-4">
                                <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-medium text-black">
                                    🇷🇼 #1 in Rwanda
                                </span>
                            </div>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-normal md:text-6xl text-white">
                                Rwanda's Leading Logistics & Freight Solutions
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-pretty text-base text-white">
                                Flash Logix - Your trusted partner for cargo shipping, warehousing, customs clearance, and complete supply chain management across Rwanda and East Africa.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            } as any,
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12">
                                <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
                                    <div className="bg-[#ffbf00] border-[#ffbf00] has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                        <SendHorizonal className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4 text-black" />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none text-sm text-black placeholder:text-black/70"
                                            type="email"
                                            maxLength={50}
                                            required
                                        />
                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-xl bg-black hover:bg-gray-800 text-yellow-400">
                                                <span className="hidden md:block">Get Quote</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden text-yellow-400"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <div className="relative mx-auto mt-20 max-w-5xl">
                                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <Image
                                            src={heroImages[currentImage]}
                                            alt="Flash Logix Logistics Services"
                                            fill
                                            className="object-cover object-center"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-black/30" />
                                        <button onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                            <ChevronLeft className="size-6" />
                                        </button>
                                        <button onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                                            <ChevronRight className="size-6" />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {heroImages.map((_, idx) => (
                                                <button key={idx} onClick={() => setCurrentImage(idx)} className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-16">
                                    <div className="group relative m-auto max-w-6xl">
                                        <div className="flex flex-col items-center md:flex-row">
                                            <div className="inline md:max-w-44 md:border-r md:border-white/30 md:pr-6">
                                                <p className="text-end text-sm text-white">Our Partners</p>
                                            </div>
                                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                                <InfiniteSlider
                                                    speedOnHover={20}
                                                    speed={40}
                                                    gap={48}>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">Norrsken Rwanda</span>
                                                    </div>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">LuNa Smelter</span>
                                                    </div>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">International Vaccine Institute</span>
                                                    </div>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">TRL Space</span>
                                                    </div>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">Gorilla Logistics</span>
                                                    </div>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">STUNET</span>
                                                    </div>
                                                    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-sm whitespace-nowrap">
                                                        <span className="text-sm font-medium text-white">PRYRO</span>
                                                    </div>
                                                </InfiniteSlider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
            </section>
        </main>
    )
}

const AppComponent = () => {
    return (
        <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
            <div className="flex items-center gap-1.5 text-orange-400">
                <Image
                    src="/heroimage.png"
                    alt="Hero"
                    width={20}
                    height={20}
                    className="size-5"
                />
                <div className="text-sm font-medium">Steps</div>
            </div>
            <div className="space-y-3">
                <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">This year, you're walking more on average than you did in 2023.</div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">8,081</span>
                            <span className="text-muted-foreground text-xs">Steps/day</span>
                        </div>
                        <div className="flex h-5 items-center rounded bg-gradient-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white">2024</div>
                    </div>
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">5,412</span>
                            <span className="text-muted-foreground text-xs">Steps/day</span>
                        </div>
                        <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
