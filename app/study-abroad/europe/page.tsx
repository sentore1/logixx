import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import StudyForm from '@/components/study-form'

export default function EuropePage() {
    return (
        <>
        <HeroHeader />
        <main className="pt-32 pb-16">
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Study in Europe</h1>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Affordable quality education in Germany, Norway, Belgium, France, Italy, Spain and more
                    </p>

                    <div className="grid gap-8 md:grid-cols-3 mb-16">
                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">University Admissions</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>University selection (Germany, France, etc.)</li>
                                    <li>Bachelor's, Master's, PhD programs</li>
                                    <li>Application preparation</li>
                                    <li>Document translation services</li>
                                    <li>Admission letter processing</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">Student Visa Applications</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Schengen student visa processing</li>
                                    <li>National visa applications</li>
                                    <li>Financial proof preparation</li>
                                    <li>Health insurance arrangement</li>
                                    <li>Embassy appointment booking</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">Scholarship Guidance</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>DAAD scholarships (Germany)</li>
                                    <li>Erasmus+ programs</li>
                                    <li>Country-specific scholarships</li>
                                    <li>Application essay writing</li>
                                    <li>Funding opportunity research</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Why Study in Europe?</h2>
                        <p className="text-center text-muted-foreground mb-8"><strong>Popular Countries:</strong> Germany, Norway, Belgium, France, Italy, Spain, Netherlands, Sweden</p>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Low or no tuition fees (Germany, Norway)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>High-quality education system</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Post-study work opportunities</span>
                                </div>
                            </div>
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Schengen area travel benefits</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Multicultural environment</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>English-taught programs available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold text-center">Apply for Study in Europe</h2>
                            <p className="text-sm text-muted-foreground text-center">Fill out the form and our experts will contact you</p>
                        </CardHeader>
                        <CardContent>
                            <StudyForm destination="Europe" />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
