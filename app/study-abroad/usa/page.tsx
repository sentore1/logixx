import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import StudyForm from '@/components/study-form'

export default function USAPage() {
    return (
        <>
        <HeroHeader />
        <main className="pt-32 pb-16">
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Study in USA</h1>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Access world-renowned universities with F1/M1 student visas and OPT work opportunities
                    </p>

                    <div className="grid gap-8 md:grid-cols-3 mb-16">
                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">Admission Support</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>University selection guidance</li>
                                    <li>Program recommendations</li>
                                    <li>Application assistance</li>
                                    <li>I-20 form processing</li>
                                    <li>SEVIS fee payment support</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">Student Visa (F1/M1)</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>DS-160 form completion</li>
                                    <li>Visa fee payment guidance</li>
                                    <li>Embassy interview preparation</li>
                                    <li>Financial documentation</li>
                                    <li>Visa approval support</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">SOP Writing</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Statement of Purpose writing</li>
                                    <li>Personal statement drafting</li>
                                    <li>Essay editing services</li>
                                    <li>Recommendation letter guidance</li>
                                    <li>Application review</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Why Study in USA?</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>World's top-ranked universities</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Diverse program options</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>OPT work authorization (up to 3 years)</span>
                                </div>
                            </div>
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Research and innovation opportunities</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Global career prospects</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Cultural diversity and networking</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold text-center">Apply for Study in USA</h2>
                            <p className="text-sm text-muted-foreground text-center">Fill out the form and our experts will contact you</p>
                        </CardHeader>
                        <CardContent>
                            <StudyForm destination="USA" />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
