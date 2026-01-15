import { BookOpen, Award, Clock, CheckCircle } from 'lucide-react'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import LanguageTestForm from '@/components/language-test-form'

export default function TOEFLPage() {
    return (
        <>
        <HeroHeader />
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-5 lg:gap-24">
                    <LanguageTestForm testType="TOEFL" />
                    <div className="lg:col-span-2 order-1 md:order-2">
                        <h2 className="text-4xl font-semibold lg:text-5xl">TOEFL Test</h2>
                        <p className="mt-6">Prepare for your TOEFL exam with our expert guidance and comprehensive support.</p>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li><BookOpen className="size-5" />Test Preparation</li>
                            <li><Award className="size-5" />Expert Coaching</li>
                            <li><Clock className="size-5" />Flexible Scheduling</li>
                            <li><CheckCircle className="size-5" />Test Booking</li>
                        </ul>
                        <div className="mt-8 border rounded-2xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                <div><p className="font-medium text-sm">How long is the TOEFL test?</p><p className="text-sm text-muted-foreground mt-1">The test takes about 3 hours.</p></div>
                                <div><p className="font-medium text-sm">What is the test format?</p><p className="text-sm text-muted-foreground mt-1">Reading, Listening, Speaking, and Writing sections.</p></div>
                                <div><p className="font-medium text-sm">How is TOEFL scored?</p><p className="text-sm text-muted-foreground mt-1">Total score ranges from 0 to 120 points.</p></div>
                                <div><p className="font-medium text-sm">When will I get my results?</p><p className="text-sm text-muted-foreground mt-1">Results are available within 6 days.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}
