import { Briefcase, Globe, FileText, Award } from 'lucide-react'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import JobSeekerForm from '@/components/job-seeker-form'

export default function AsiaPage() {
    return (
        <>
        <HeroHeader />
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-semibold lg:text-5xl">Job Seekers in Asia</h2>
                        <p className="mt-6">Find your dream job in Asia with our comprehensive support and guidance.</p>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li><Briefcase className="size-5" />Job Search Assistance</li>
                            <li><Globe className="size-5" />Work Visa Support</li>
                            <li><FileText className="size-5" />Resume Building</li>
                            <li><Award className="size-5" />Interview Preparation</li>
                        </ul>
                    </div>
                    <JobSeekerForm country="Asia" />
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
