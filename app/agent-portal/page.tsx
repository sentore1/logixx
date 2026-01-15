'use client'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function AgentPortalPage() {
    return (
        <>
        <HeroHeader />
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Are you an agency interested in a partnership?</h2>
                    <p className="mt-4 text-muted-foreground">Please fill out the form below, and our team will get back to you shortly</p>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background rounded-3xl border border-border/50 p-8 shadow-2xl">
                    <form className="space-y-5">
                        <div><label className="block text-sm mb-1">Company name</label><input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Year of established</label><input type="text" placeholder="E.g" className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Owner name</label><input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Company Address</label><input type="text" placeholder="Address" className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Email</label><input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Tel</label><input type="tel" placeholder="Tel" className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Choose Service</label><select className="w-full px-3 py-2 border rounded-md"><option>Study Abroad</option><option>Immigration</option><option>Job Seekers</option><option>Language Test</option><option>Flight Booking</option><option>Car Rental</option></select></div>
                        <div><label className="block text-sm mb-1">Upload business certificate</label><input type="file" className="w-full px-3 py-2 border rounded-md" /><p className="text-xs mt-1 text-muted-foreground">No file chosen</p></div>
                        <div><label className="block text-sm mb-1">Message</label><textarea rows={4} placeholder="Message" className="w-full px-3 py-2 border rounded-md"></textarea></div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send</Button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
