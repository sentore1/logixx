import { Plane, Globe, Clock, Shield } from 'lucide-react'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import FlightBookingForm from '@/components/flight-booking-form'

export default function FlightBookingPage() {
    return (
        <>
        <HeroHeader />
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Book Your International Flights With Us</h2>
                    <p>Experience seamless flight booking with competitive prices, worldwide destinations, and 24/7 support for all your travel needs.</p>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background rounded-3xl border border-border/50 p-8 max-w-2xl mx-auto shadow-2xl">
                    <FlightBookingForm />
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Plane className="size-4" />
                            <h3 className="text-sm font-medium">International Flights</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Access flights to destinations worldwide with multiple airline options.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4" />
                            <h3 className="text-sm font-medium">Worldwide Destinations</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Book flights to any destination across the globe with ease.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            <h3 className="text-sm font-medium">24/7 Support</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Round-the-clock customer support for all your booking needs.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Secure Booking</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Safe and secure payment processing for your peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
