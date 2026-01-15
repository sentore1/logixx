'use client'
import { useState } from 'react'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { MapPin, Phone, Mail, Calculator, X } from 'lucide-react'
import ContactForm from '@/components/contact-form'
import QuickQuoteCalculator from '@/components/quick-quote-calculator'

export default function ContactPage() {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8 text-center">Contact Flash Logix</h1>
                        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                            Get in touch with Rwanda's leading logistics and freight forwarding company.
                        </p>
                        <p className="text-center text-sm text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Working Hours: Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 2:00 PM
                        </p>

                        <div className="grid gap-8 lg:grid-cols-3">
                            <Card className="h-fit">
                                <CardContent className="p-3 space-y-1">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="size-4 text-yellow-600" />
                                        <div>
                                            <h3 className="font-semibold text-sm">Our Office</h3>
                                            <p className="text-muted-foreground text-xs">Kigali, Rwanda</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="size-4 text-yellow-600" />
                                        <div>
                                            <h3 className="font-semibold text-sm">Phone</h3>
                                            <p className="text-muted-foreground text-xs">+250 793 145 109</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="size-4 text-yellow-600" />
                                        <div>
                                            <h3 className="font-semibold text-sm">Email</h3>
                                            <p className="text-muted-foreground text-xs">info@flashlogixco.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calculator className="size-4 text-yellow-600" />
                                        <Button 
                                            onClick={() => setIsCalculatorOpen(true)}
                                            className="bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-2 py-1 h-auto"
                                        >
                                            Calculator
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="lg:col-span-2">
                                <Card style={{backgroundColor: '#ffbf00'}} className="rounded-3xl">
                                    <CardContent className="p-8">
                                        <ContactForm />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            
            <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Quick Quote Calculator</DialogTitle>
                    </DialogHeader>
                    <QuickQuoteCalculator />
                </DialogContent>
            </Dialog>
        </>
    )
}
