import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import JobSeekerForm from '@/components/job-seeker-form'
import { Briefcase, Users, Wrench, Heart, UtensilsCrossed, MapPin } from 'lucide-react'

export default function EuropePage() {
    return (
        <>
        <HeroHeader />
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4">Work in Europe</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find your dream job across Europe with visa sponsorship and full relocation support</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">Available Job Categories</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Briefcase className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Warehouse Workers</h3>
                                            <p className="text-sm text-muted-foreground">Logistics, packing, inventory</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Users className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Factory Workers</h3>
                                            <p className="text-sm text-muted-foreground">Manufacturing, production</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Wrench className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Construction</h3>
                                            <p className="text-sm text-muted-foreground">Builders, electricians, plumbers</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Heart className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Caregivers</h3>
                                            <p className="text-sm text-muted-foreground">Elderly care, nursing assistants</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition md:col-span-2">
                                        <UtensilsCrossed className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Hospitality</h3>
                                            <p className="text-sm text-muted-foreground">Hotels, restaurants, tourism, housekeeping</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin className="size-6 text-blue-600" />
                                    <h2 className="text-3xl font-bold">Top Hiring Countries</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Germany', 'Poland', 'Slovakia', 'Czech Republic', 'Malta', 'Netherlands'].map(country => (
                                        <div key={country} className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl text-center font-semibold">
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Our Services</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><span>✓</span> Job matching with verified employers</li>
                                        <li className="flex gap-2"><span>✓</span> Work visa & sponsorship support</li>
                                        <li className="flex gap-2"><span>✓</span> CV/Resume preparation</li>
                                        <li className="flex gap-2"><span>✓</span> Interview coaching</li>
                                        <li className="flex gap-2"><span>✓</span> Document translation</li>
                                        <li className="flex gap-2"><span>✓</span> Pre-departure orientation</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Why Europe?</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><span>✓</span> Competitive salaries</li>
                                        <li className="flex gap-2"><span>✓</span> Strong labor protection</li>
                                        <li className="flex gap-2"><span>✓</span> Path to permanent residency</li>
                                        <li className="flex gap-2"><span>✓</span> Quality healthcare</li>
                                        <li className="flex gap-2"><span>✓</span> Family reunification</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24 h-fit">
                            <JobSeekerForm country="Europe" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}
