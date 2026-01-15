import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Calculator, FileText, BookOpen, Search, Download, CheckSquare } from 'lucide-react'
import Link from 'next/link'

export default function ToolsPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Tools & Resources</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Professional immigration tools to help you prepare your application
                        </p>

                        <div className="space-y-16">
                            <div>
                                <h2 className="text-3xl font-semibold mb-8">🇨🇦 Canada Tools</h2>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <Card>
                                        <CardHeader>
                                            <Calculator className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">CRS Points Calculator</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Calculate your Comprehensive Ranking System score for Express Entry</p>
                                            <a href="https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Use Calculator →</a>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <Search className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">NOC Code Finder</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Find your National Occupational Classification code</p>
                                            <a href="https://noc.esdc.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Find NOC Code →</a>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <Download className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Express Entry Guide</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Complete guide to Canada Express Entry process</p>
                                            <Link href="/immigration/express-entry" className="text-blue-600 hover:underline text-sm">View Guide →</Link>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <BookOpen className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">WES/ECA Instructions</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Educational Credential Assessment guidance</p>
                                            <a href="https://www.wes.org/ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Visit WES →</a>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <FileText className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Sample SOPs & LOEs</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Statement of Purpose and Letter of Explanation templates</p>
                                            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Request Samples →</Link>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CheckSquare className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">PR Document Checklist</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Complete checklist for Permanent Residency application</p>
                                            <Link href="/immigration/permanent-resident" className="text-blue-600 hover:underline text-sm">View Checklist →</Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-8">🇺🇸 USA Tools</h2>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <Card>
                                        <CardHeader>
                                            <FileText className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">DS-160 Preparation</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Complete guide to filling DS-160 form</p>
                                            <a href="https://ceac.state.gov/genniv/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Fill DS-160 →</a>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <Download className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">DV Lottery Guide</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Complete DV Lottery application support</p>
                                            <a href="https://dvprogram.state.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Apply DV Lottery →</a>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <BookOpen className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Interview Preparation</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">USA visa interview tips and preparation</p>
                                            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Get Prepared →</Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-8">🇪🇺 Europe Tools</h2>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <Card>
                                        <CardHeader>
                                            <CheckSquare className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Schengen Visa Checklist</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Complete document checklist for Schengen visa</p>
                                            <a href="https://www.schengenvisainfo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">View Info →</a>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <FileText className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Invitation Letter Templates</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Templates for family visit and business invitations</p>
                                            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Get Templates →</Link>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <Search className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Job Vacancy List</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Updated weekly - warehouse, factory, construction jobs</p>
                                            <Link href="/job-seekers/europe" className="text-blue-600 hover:underline text-sm">View Jobs →</Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold mb-8">General Tools</h2>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <Card>
                                        <CardHeader>
                                            <Calculator className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Visa Fee Calculator</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Calculate total costs for your visa application</p>
                                            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Calculate Fees →</Link>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CheckSquare className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Eligibility Assessment</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Free assessment to check your eligibility</p>
                                            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Start Assessment →</Link>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <BookOpen className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Appointment Booking</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Book consultation with our immigration experts</p>
                                            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Book Now →</Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
