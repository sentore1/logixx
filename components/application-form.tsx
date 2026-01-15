'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, User, DollarSign, Briefcase, MessageSquare } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { usePathname } from 'next/navigation'

export default function ApplicationForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const pathname = usePathname()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: pathname,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            country: formData.get('country'),
            budget: formData.get('budget'),
            professionalField: formData.get('professionalField'),
            message: formData.get('message'),
        }

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()

            if (res.ok && result.success) {
                setMessage('Application submitted successfully!')
                form.reset()
            } else {
                setMessage('Failed to submit. Please try again.')
            }
        } catch (error) {
            console.error('Submit error:', error)
            setMessage('Failed to submit. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card className="border-border/50 rounded-3xl max-w-xl ml-auto">
            <CardContent className="p-8">
                <h2 className="text-3xl font-semibold mb-2">Apply Here</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and our team will contact you within 24 hours.</p>
                {message && <p className={`text-sm mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">First Name *</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                <input name="firstName" type="text" required className="w-full h-12 pl-10 pr-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name *</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                <input name="lastName" type="text" required className="w-full h-12 pl-10 pr-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <input name="email" type="email" required className="w-full h-12 pl-10 pr-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <input name="phone" type="tel" className="w-full h-12 pl-10 pr-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Country</label>
                        <select name="country" className="w-full h-12 px-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Australia</option>
                            <option>UAE</option>
                            <option>Germany</option>
                            <option>France</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Budget</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <input name="budget" type="text" placeholder="e.g 2000$ - 15000$" className="w-full h-12 pl-10 pr-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Professional Field</label>
                        <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <input name="professionalField" type="text" placeholder="e.g Software Engineer" className="w-full h-12 pl-10 pr-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Comment or Message</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                            <textarea name="message" rows={4} className="w-full pl-10 pr-4 pt-3 pb-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
                        </div>
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</Button>
                </form>
            </CardContent>
        </Card>
    )
}
