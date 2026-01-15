import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function EuropeServicesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-8">
                            <Image src="/New folder/eauropeiimage.jpg" alt="Europe Immigration" width={1200} height={400} className="rounded-2xl mx-auto mb-8 max-h-96 object-cover" />
                        </div>
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">🇪🇺 Europe Immigration & Visa Programs</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Family reunification, study programs, work opportunities, and Schengen visas across Europe
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Family Sponsor Visas</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <p className="text-muted-foreground mb-4">Reunite with your family in Europe through spouse, dependent, or parent sponsorship programs.</p>
                                        <ul className="space-y-3 text-muted-foreground mb-6">
                                            <li>✓ <strong>Spouse Visas</strong> - Join your partner in Europe</li>
                                            <li>✓ <strong>Dependent Visas</strong> - Bring your children</li>
                                            <li>✓ <strong>Parent Family Reunification</strong> - Sponsor your parents</li>
                                        </ul>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            <strong>Countries:</strong> Germany, France, Sweden, Netherlands, Belgium, Spain, Italy, and more
                                        </p>
                                        <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/family-reunification">Learn More</Link></Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Study in Europe</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <p className="text-muted-foreground mb-4">Access world-class education with affordable tuition and post-study work opportunities.</p>
                                        <ul className="space-y-3 text-muted-foreground mb-6">
                                            <li>✓ <strong>University Admissions</strong> - Bachelor's, Master's, PhD programs</li>
                                            <li>✓ <strong>Student Visa Applications</strong> - Complete visa processing</li>
                                            <li>✓ <strong>Scholarship Guidance</strong> - Find funding opportunities</li>
                                        </ul>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            <strong>Countries:</strong> Germany, Norway, Belgium, France, Italy, Spain, Netherlands, Sweden
                                        </p>
                                        <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/study-abroad/europe">Explore Programs</Link></Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Work Opportunities (Job Vacancies)</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <p className="text-muted-foreground mb-4">Access high-demand jobs across Europe with work permit sponsorship.</p>
                                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <h3 className="font-semibold mb-2">Available Positions:</h3>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>✓ Warehouse workers</li>
                                                    <li>✓ Factory workers</li>
                                                    <li>✓ Construction workers</li>
                                                    <li>✓ Caregivers & health assistants</li>
                                                    <li>✓ Hospitality sector jobs</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Top Countries:</h3>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>✓ Slovakia</li>
                                                    <li>✓ Poland</li>
                                                    <li>✓ Germany</li>
                                                    <li>✓ Czech Republic</li>
                                                    <li>✓ Malta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/job-seekers/europe">View Job Vacancies</Link></Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Schengen Visas</h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <p className="text-muted-foreground mb-4">Travel to 27 European countries with a single Schengen visa.</p>
                                        <ul className="space-y-3 text-muted-foreground mb-6">
                                            <li>✓ <strong>Tourist Visa</strong> - Explore Europe for up to 90 days</li>
                                            <li>✓ <strong>Business Visa</strong> - Attend meetings and conferences</li>
                                            <li>✓ <strong>Medical Visa</strong> - Receive medical treatment</li>
                                            <li>✓ <strong>Family Visit</strong> - Visit relatives in Europe</li>
                                        </ul>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            We handle: Supporting documents preparation, embassy appointment booking, application tracking
                                        </p>
                                        <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/sponsorship-visa">Apply for Schengen Visa</Link></Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-3xl font-semibold mb-6 text-center">Europe Tools & Resources</h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                <Card>
                                    <CardHeader><h3 className="font-semibold">Schengen Visa Checklist</h3></CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">Complete document checklist generator</p></CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><h3 className="font-semibold">Invitation Letter Templates</h3></CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">Family visit and business invitation templates</p></CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><h3 className="font-semibold">Job Vacancy List</h3></CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">Updated weekly with new opportunities</p></CardContent>
                                </Card>
                            </div>
                            <div className="mt-6 text-center">
                                <Button asChild variant="outline"><Link href="/tools">View All Tools</Link></Button>
                            </div>
                        </div>

                        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-950/20 rounded-3xl p-12">
                            <h2 className="text-3xl font-semibold mb-4">Ready to Move to Europe?</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free consultation to discuss your Europe immigration options</p>
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Book Free Consultation</Link></Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
