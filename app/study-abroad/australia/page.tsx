import { GraduationCap, Globe, BookOpen, Award } from 'lucide-react'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import StudyForm from '@/components/study-form'

export default function AustraliaPage() {
    return (
        <>
        <HeroHeader />
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-semibold lg:text-5xl">Study in Australia</h2>
                        <p className="mt-6">Discover world-class education opportunities in Australia with our comprehensive support and guidance.</p>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li><GraduationCap className="size-5" />Top Universities</li>
                            <li><Globe className="size-5" />Visa Assistance</li>
                            <li><BookOpen className="size-5" />Course Selection</li>
                            <li><Award className="size-5" />Scholarship Guidance</li>
                        </ul>
                    </div>
                    <StudyForm destination="Australia" />
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
