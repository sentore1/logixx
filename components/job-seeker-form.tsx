'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'
import { usePathname } from 'next/navigation'
import { Send } from 'lucide-react'

export default function JobSeekerForm({ country }: { country: string }) {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const pathname = usePathname()

    const getJobCategories = () => {
        if (country === 'Europe') {
            return ['Warehouse Worker', 'Factory Worker', 'Construction', 'Caregiver / Health Assistant', 'Hospitality', 'Other']
        } else if (country === 'Canada') {
            return ['Skilled Worker (IT, Engineering, Healthcare)', 'Trades Worker', 'Construction', 'Post-Graduation Work', 'Corporate & Business', 'Other']
        } else if (country === 'USA') {
            return ['Tech & IT', 'Healthcare', 'Corporate', 'OPT/CPT Student', 'Skilled Professional', 'Other']
        } else if (country === 'UK') {
            return ['Healthcare (NHS)', 'IT & Tech', 'Finance & Business', 'Graduate Visa', 'Skilled Worker', 'Other']
        }
        return ['General', 'Other']
    }

    const getCountryOptions = () => {
        if (country === 'Europe') {
            return ['Germany', 'Poland', 'Slovakia', 'Czech Republic', 'Malta', 'Netherlands', 'Europe (Any)']
        } else if (country === 'Canada') {
            return ['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Manitoba', 'Saskatchewan', 'Canada (Any)']
        } else if (country === 'USA') {
            return ['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Washington', 'USA (Any)']
        } else if (country === 'UK') {
            return ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Leeds', 'Glasgow', 'UK (Any)']
        }
        return [country]
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: `Job Seeker - ${pathname}`,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            jobCategory: formData.get('jobCategory'),
            country: formData.get('country'),
            experience: formData.get('experience'),
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
                setMessage('Application submitted successfully! We will contact you soon.')
                form.reset()
            } else {
                setMessage('Failed to submit. Please try again.')
            }
        } catch {
            setMessage('Failed to submit. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                    <Send className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Apply Now</h3>
                <p className="text-sm text-muted-foreground mt-1">Start your career journey</p>
            </div>
            {message && (
                <div className={`p-3 rounded-lg mb-4 text-sm ${message.includes('success') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium mb-1.5">First Name *</label>
                        <input name="firstName" type="text" required className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Last Name *</label>
                        <input name="lastName" type="text" required className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input name="email" type="email" required className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">Phone *</label>
                    <input name="phone" type="tel" required className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+250 XXX XXX XXX" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">Job Category *</label>
                    <select name="jobCategory" required className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select category</option>
                        {getJobCategories().map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">{country === 'Canada' ? 'Preferred Province' : country === 'USA' || country === 'UK' ? 'Preferred State/City' : 'Preferred Country'}</label>
                    <select name="country" className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        {getCountryOptions().map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">Years of Experience</label>
                    <select name="experience" className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>No experience</option>
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">Upload CV/Resume (Optional)</label>
                    <input name="resume" type="file" accept=".pdf,.doc,.docx" className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1.5">Additional Information</label>
                    <textarea name="message" rows={3} className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your skills and qualifications..."></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-base font-semibold" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
            </form>
        </div>
    )
}
