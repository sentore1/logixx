import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import JobSeekerForm from '@/components/job-seeker-form'
import { Briefcase, GraduationCap, Heart, Building2, Laptop, MapPin } from 'lucide-react'

export default function USAPage() {
    return (
        <>
        <HeroHeader />
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4">Work in USA</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover American job opportunities with visa sponsorship and immigration support</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">Available Job Categories</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Laptop className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Tech & IT</h3>
                                            <p className="text-sm text-muted-foreground">Software, Data, Cybersecurity</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Heart className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Healthcare</h3>
                                            <p className="text-sm text-muted-foreground">Nurses, Doctors, Medical Staff</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <Building2 className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Corporate</h3>
                                            <p className="text-sm text-muted-foreground">Finance, Management, Consulting</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
                                        <GraduationCap className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">OPT/CPT Students</h3>
                                            <p className="text-sm text-muted-foreground">Post-study work opportunities</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition md:col-span-2">
                                        <Briefcase className="size-5 text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg">Skilled Professionals</h3>
                                            <p className="text-sm text-muted-foreground">Engineering, Architecture, Research, Education</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin className="size-6 text-blue-600" />
                                    <h2 className="text-3xl font-bold">Popular States</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Washington'].map(state => (
                                        <div key={state} className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl text-center font-semibold">
                                            {state}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Our Services</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><span>✓</span> Job matching with US employers</li>
                                        <li className="flex gap-2"><span>✓</span> H-1B visa application support</li>
                                        <li className="flex gap-2"><span>✓</span> Green Card assistance</li>
                                        <li className="flex gap-2"><span>✓</span> Resume optimization for US market</li>
                                        <li className="flex gap-2"><span>✓</span> Interview preparation</li>
                                        <li className="flex gap-2"><span>✓</span> Relocation guidance</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Why USA?</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><span>✓</span> Highest salaries globally</li>
                                        <li className="flex gap-2"><span>✓</span> Career growth opportunities</li>
                                        <li className="flex gap-2"><span>✓</span> Innovation & technology hub</li>
                                        <li className="flex gap-2"><span>✓</span> Diverse work culture</li>
                                        <li className="flex gap-2"><span>✓</span> Path to Green Card</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24 h-fit">
                            <JobSeekerForm country="USA" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}
