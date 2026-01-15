import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import JobSeekerForm from '@/components/job-seeker-form'
import { Briefcase, Users, Wrench, GraduationCap, Building2, MapPin } from 'lucide-react'

export default function CanadaPage() {
    return (
        <>
        <HeroHeader />
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4">Work in Canada</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Explore Canadian job opportunities with work permit and immigration support</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">Available Job Categories</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Briefcase className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Skilled Workers</h3>
                                            <p className="text-sm text-muted-foreground">IT, Engineering, Healthcare</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Users className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Trades Workers</h3>
                                            <p className="text-sm text-muted-foreground">Electricians, Plumbers, Welders</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Wrench className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Construction</h3>
                                            <p className="text-sm text-muted-foreground">Carpenters, Laborers, Supervisors</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <GraduationCap className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Post-Graduation Work</h3>
                                            <p className="text-sm text-muted-foreground">PGWP opportunities</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition md:col-span-2">
                                        <Building2 className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Corporate & Business</h3>
                                            <p className="text-sm text-muted-foreground">Management, Finance, Marketing, Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin className="size-6 text-blue-600" />
                                    <h2 className="text-3xl font-bold">Popular Provinces</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Manitoba', 'Saskatchewan'].map(province => (
                                        <div key={province} className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl text-center font-semibold">
                                            {province}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Our Services</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><span>✓</span> Job matching with Canadian employers</li>
                                        <li className="flex gap-2"><span>✓</span> Work permit application support</li>
                                        <li className="flex gap-2"><span>✓</span> LMIA assistance</li>
                                        <li className="flex gap-2"><span>✓</span> Resume & cover letter preparation</li>
                                        <li className="flex gap-2"><span>✓</span> Interview coaching</li>
                                        <li className="flex gap-2"><span>✓</span> Settlement support</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Why Canada?</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><span>✓</span> High salaries & benefits</li>
                                        <li className="flex gap-2"><span>✓</span> Pathway to permanent residency</li>
                                        <li className="flex gap-2"><span>✓</span> Excellent quality of life</li>
                                        <li className="flex gap-2"><span>✓</span> Universal healthcare</li>
                                        <li className="flex gap-2"><span>✓</span> Family sponsorship options</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24 h-fit">
                            <JobSeekerForm country="Canada" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}
