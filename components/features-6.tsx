import { MapPin, Shield, Clock, Truck } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Reliable Logistics, Trusted Service</h2>
                    <p className="max-w-sm sm:ml-auto">We combine global logistics expertise with personalized service to ensure your cargo reaches its destination safely and on time.</p>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            <h3 className="text-sm font-medium">50+ Destinations</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Worldwide shipping routes with expert local logistics knowledge.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">100% Secure</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Your cargo and shipment data are fully protected and insured.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            <h3 className="text-sm font-medium">Fast Delivery</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Quick transit times with efficient customs clearance handling.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Truck className="size-4" />
                            <h3 className="text-sm font-medium">Expert Fleet</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Professional logistics team with years of freight experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
