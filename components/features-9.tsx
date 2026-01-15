'use client'
import { useState } from 'react'
import { Logo } from '@/components/logo'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function Features9() {
    return (
        <section className="px-4 py-16 md:py-32">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MapIcon className="size-4" />
                            Global logistics network
                        </span>

                        <p className="mt-8 text-2xl font-semibold">Connect your business worldwide. We deliver cargo across all continents.</p>
                    </div>

                    <div
                        aria-hidden
                        className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-lg bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                <span className="text-l">📦</span> Cargo delivered to Germany, Kigali
                            </div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MessageCircle className="size-4" />
                            Expert logistics support
                        </span>

                        <p className="my-8 text-2xl font-semibold">Get personalized guidance from our logistics experts via email or chat.</p>
                    </div>
                    <div
                        aria-hidden
                        className="flex flex-col gap-2">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex size-5 rounded-full border">
                                    <Logo className="m-auto size-3" />
                                </span>
                                <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
                            </div>
                            <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-4 text-xs">I need help shipping my cargo to Tanzania.</div>
                        </div>

                        <div>
                            <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-black p-4 text-xs text-[#FFBF00]">Our team will review your cargo requirements and guide you through each step. Let's schedule a consultation.</div>
                            <span className="text-muted-foreground block text-right text-xs">Now</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">5,700+ Successful Deliveries</p>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            Delivery success rate
                        </span>

                        <p className="my-8 text-base font-semibold">
                            Track our proven logistics record. <span className="text-muted-foreground"> Consistently delivering cargo on time across East Africa.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: '#FFBF00',
    radius: 0.15,
}

const Map = () => {
    const [isHovered, setIsHovered] = useState(false)
    const viewBox = `0 0 120 60`
    return (
        <div 
            className="transition-transform duration-500 hover:scale-110"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg
                viewBox={viewBox}
                style={{ background: svgOptions.backgroundColor }}>
                {points.map((point, index) => (
                    <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r={isHovered ? 0.3 : svgOptions.radius}
                        fill={isHovered ? '#FFBF00' : '#374151'}
                        style={{
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

const chartConfig = {
    desktop: {
        label: 'Shipments',
        color: '#FFBF00',
    },
    mobile: {
        label: 'Deliveries',
        color: '#FFD700',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'Jan', desktop: 1830, mobile: 1500 },
    { month: 'Feb', desktop: 2240, mobile: 1900 },
    { month: 'Mar', desktop: 2820, mobile: 2430 },
    { month: 'Apr', desktop: 3240, mobile: 2950 },
    { month: 'May', desktop: 3850, mobile: 3520 },
    { month: 'Jun', desktop: 4570, mobile: 4230 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-120 aspect-auto md:h-96"
            config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient
                        id="fillDesktop"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillMobile"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    active
                    cursor={false}
                    content={<ChartTooltipContent className="dark:bg-muted" />}
                />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.3}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.3}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}
