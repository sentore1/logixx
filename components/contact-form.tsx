'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'

const serviceOptions: Record<string, string[]> = {
    'Freight Forwarding': ['Air Freight', 'Sea Freight', 'Road Transport', 'Express Delivery'],
    'Warehousing': ['Storage Solutions', 'Inventory Management', 'Distribution Services', 'Cross-docking'],
    'Customs Clearance': ['Import Documentation', 'Export Documentation', 'Duty Calculation', 'Compliance Services'],
    'Supply Chain': ['End-to-end Solutions', 'Route Optimization', 'Vendor Management', 'Cost Analysis'],
    'Other Services': ['Packaging', 'Insurance', 'Tracking Services', 'Consultation']
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedService, setSelectedService] = useState('')
    const [serviceSubOptions, setServiceSubOptions] = useState<string[]>([])

    const handleServiceChange = (service: string) => {
        setSelectedService(service)
        setServiceSubOptions(serviceOptions[service] || [])
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: 'Contact Form',
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            serviceType: formData.get('serviceType'),
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
                setMessage('Message sent successfully!')
                form.reset()
            } else {
                setMessage('Failed to send. Please try again.')
            }
        } catch {
            setMessage('Failed to send. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h3 className="text-2xl font-semibold mb-6 text-black">Logistics Inquiry Form</h3>
            {message && <p className={`text-sm mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1 text-black">Service Needed *</label>
                    <select 
                        name="service" 
                        required 
                        className="w-full px-3 py-2 border rounded-md"
                        value={selectedService}
                        onChange={(e) => handleServiceChange(e.target.value)}
                    >
                        <option value="">Select service</option>
                        <option value="Freight Forwarding">Freight Forwarding</option>
                        <option value="Warehousing">Warehousing</option>
                        <option value="Customs Clearance">Customs Clearance</option>
                        <option value="Supply Chain">Supply Chain Management</option>
                        <option value="Other Services">Other Services</option>
                    </select>
                </div>
                
                {selectedService && (
                    <div>
                        <label className="block text-sm mb-1 text-black">Specific Service *</label>
                        <select name="serviceType" required className="w-full px-3 py-2 border rounded-md">
                            <option value="">Select specific service</option>
                            {serviceSubOptions.map((service) => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>
                )}
                
                <div><label className="block text-sm mb-1 text-black">Name *</label><input name="name" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1 text-black">Phone *</label><input name="phone" type="tel" required className="w-full px-3 py-2 border rounded-md" placeholder="+250 793 145 109" /></div>
                <div><label className="block text-sm mb-1 text-black">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1 text-black">Message</label><textarea name="message" rows={4} className="w-full px-3 py-2 border rounded-md" placeholder="Tell us about your logistics needs..."></textarea></div>
                <Button type="submit" className="w-full bg-black hover:bg-gray-800" style={{color: '#ffbf00'}} disabled={loading}>{loading ? 'Sending...' : 'Get Quote'}</Button>
            </form>
        </>
    )
}
