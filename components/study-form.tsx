'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'
import { usePathname } from 'next/navigation'

export default function StudyForm({ destination }: { destination: string }) {
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
            formType: `Study Abroad - ${pathname}`,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            age: formData.get('age'),
            destination: formData.get('destination'),
            educationLevel: formData.get('educationLevel'),
            areaOfStudy: formData.get('areaOfStudy'),
            englishTest: formData.get('englishTest'),
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
        } catch {
            setMessage('Failed to submit. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="bg-gradient-to-t relative rounded-2xl from-blue-100 to-transparent p-6 dark:from-blue-900/40">
                <h3 className="text-2xl font-bold mb-6">Apply Here</h3>
                {message && <p className={`text-sm mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm mb-1">First Name *</label><input name="firstName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Last Name *</label><input name="lastName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                    </div>
                    <div><label className="block text-sm mb-1">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Phone</label><input name="phone" type="tel" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Age</label><input name="age" type="number" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Destination</label><select name="destination" className="w-full px-3 py-2 border rounded-md" defaultValue={destination}><option>Canada</option><option>USA</option><option>UK</option><option>Australia</option><option>Europe</option><option>Asia</option></select></div>
                    <div><label className="block text-sm mb-1">Education Level</label><select name="educationLevel" className="w-full px-3 py-2 border rounded-md"><option>Bachelor&apos;s degree Level</option><option>Master&apos;s degree Level</option><option>Diploma</option></select></div>
                    <div><label className="block text-sm mb-1">Area Of Study</label><select name="areaOfStudy" className="w-full px-3 py-2 border rounded-md"><option>Business Administration</option><option>Engineering</option><option>Computer Science</option><option>Medicine</option></select></div>
                    <div><label className="block text-sm mb-1">English Test</label><select name="englishTest" className="w-full px-3 py-2 border rounded-md"><option>IELTS</option><option>TOEFL</option><option>PTE</option><option>Duolingo</option><option>Not yet taken</option></select></div>
                    
                    <div className="border-t pt-4 mt-4">
                        <h4 className="font-semibold mb-3 text-sm">Upload Documents (Optional)</h4>
                        <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-6 text-center">
                            <svg className="mx-auto h-12 w-12 text-blue-400 mb-3" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <label className="cursor-pointer">
                                <span className="text-sm font-medium text-blue-600 hover:text-blue-700">Click to upload</span>
                                <span className="text-sm text-muted-foreground"> or drag and drop</span>
                                <input type="file" name="documents" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" multiple className="hidden" onChange={(e) => { if (e.target.files && e.target.files.length > 3) { alert('Maximum 3 files allowed'); e.target.value = ''; } }} />
                            </label>
                            <p className="text-xs text-muted-foreground mt-2">Max 3 files: Passport, Transcripts, CV, Test Results</p>
                            <p className="text-xs text-muted-foreground">PDF, JPG, PNG, DOC (Max 5MB each)</p>
                        </div>
                    </div>
                    
                    <div><label className="block text-sm mb-1">Additional Information</label><textarea name="message" rows={3} className="w-full px-3 py-2 border rounded-md" placeholder="Tell us about your study goals..."></textarea></div>
                    <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</Button>
                </form>
            </div>
        </div>
    )
}
