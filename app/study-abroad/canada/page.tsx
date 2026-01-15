import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import StudyForm from '@/components/study-form'

export default function CanadaPage() {
    return (
        <>
        <HeroHeader />
        <main className="pt-32 pb-16">
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Study in Canada</h1>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        World-class education with post-graduation work opportunities and pathways to permanent residency
                    </p>

                    <div className="grid gap-8 md:grid-cols-3 mb-16">
                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">Admission Support</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>University and college selection</li>
                                    <li>Program recommendations</li>
                                    <li>Application preparation</li>
                                    <li>Document verification</li>
                                    <li>Admission letter processing</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">Student Visa Application</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Study permit application</li>
                                    <li>Financial documentation</li>
                                    <li>Biometrics appointment</li>
                                    <li>Medical examination guidance</li>
                                    <li>Visa interview preparation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-semibold">SOP Writing</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Professional SOP writing</li>
                                    <li>Letter of explanation</li>
                                    <li>Study plan preparation</li>
                                    <li>Career goals statement</li>
                                    <li>Document review & editing</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Why Study in Canada?</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>High-quality education system</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Affordable tuition fees</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Post-graduation work permit (PGWP)</span>
                                </div>
                            </div>
                            <div className="space-y-3 text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Pathway to permanent residency</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Safe and multicultural environment</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Part-time work while studying</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold text-center">Apply for Study in Canada</h2>
                            <p className="text-sm text-muted-foreground text-center">Fill out the form and our experts will contact you</p>
                        </CardHeader>
                        <CardContent>
                            <StudyForm destination="Canada" />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
