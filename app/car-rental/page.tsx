import { Car, MapPin, Clock, Shield, Settings2 } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { CardDecorator } from './card-decorator'
import Image from 'next/image'
import CarRentalForm from '@/components/car-rental-form'

export default function CarRentalPage() {
    return (
        <>
        <HeroHeader />
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Premium Car Rental Services for Every Journey</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <Image src="/carrent.png" className="rounded-2xl w-full h-auto" alt="car rental illustration" width={1207} height={929} />
                    </div>
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Our car rental service is designed to provide you with <span className="text-accent-foreground font-bold">flexibility and convenience</span> for all your travel needs.
                        </p>
                        <p className="text-muted-foreground">From airport pickups to long-term rentals, we offer a wide range of vehicles and flexible booking options to ensure your journey is comfortable and hassle-free.</p>
                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>The car rental experience was seamless from start to finish. Professional service, well-maintained vehicles, and competitive pricing made our trip unforgettable.</p>
                                <div className="mt-6">
                                    <cite className="block font-medium">Uwase Aline, Business Owner</cite>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Rent Your Perfect Car Today</h2>
                    <p>Choose from a wide selection of vehicles for your travel needs. Affordable rates, flexible booking, and excellent service.</p>
                </div>
                <div className="bg-blue-600 rounded-3xl border border-border/50 p-8 max-w-2xl mx-auto shadow-2xl">
                    <CarRentalForm />
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Car className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-blue-600">Wide Selection</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Choose from economy to luxury vehicles for any occasion.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-blue-600">Multiple Locations</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Convenient pickup and drop-off locations nationwide.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-blue-600">Flexible Rental</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Daily, weekly, or monthly rental options available.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-blue-600">Full Insurance</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Comprehensive insurance coverage for peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Why Choose Our Car Rental Service</h2>
                    <p className="mt-4">Experience premium car rental with flexible options, competitive pricing, and exceptional customer service.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Car className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Wide Vehicle Selection</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Choose from economy to luxury vehicles, all well-maintained and ready for your journey.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Flexible Booking</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">From hourly to monthly rentals, customize your booking to fit your schedule and budget.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Shield className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Full Insurance Coverage</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Drive with confidence knowing you have comprehensive insurance protection included.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
