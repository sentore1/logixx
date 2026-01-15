'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'

export default function FlightBookingForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: 'Flight Booking',
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            from: formData.get('from'),
            to: formData.get('to'),
            departureDate: formData.get('departureDate'),
            departureTime: formData.get('departureTime'),
            destinationCountry: formData.get('destinationCountry'),
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
                setMessage('Booking request submitted successfully!')
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
        <>
            <h3 className="text-2xl font-bold mb-6 text-center">Book your flights with Us!</h3>
            {message && <p className={`text-sm mb-4 text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm mb-1">First Name *</label><input name="firstName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Last Name *</label><input name="lastName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                </div>
                <div><label className="block text-sm mb-1">Phone</label><input name="phone" type="tel" placeholder="0720 123 456" className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">From:</label><input name="from" type="text" className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">To:</label><input name="to" type="text" className="w-full px-3 py-2 border rounded-md" /></div>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm mb-1">Departure Date</label><input name="departureDate" type="date" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Departure Time</label><input name="departureTime" type="time" className="w-full px-3 py-2 border rounded-md" /></div>
                </div>
                <div><label className="block text-sm mb-1">Destination Country</label><select name="destinationCountry" className="w-full px-3 py-2 border rounded-md"><option>Canada</option><option>USA</option><option>UK</option><option>Australia</option><option>Germany</option><option>France</option></select></div>
                <div><label className="block text-sm mb-1">Comment or Message</label><textarea name="message" rows={3} className="w-full px-3 py-2 border rounded-md"></textarea></div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</Button>
            </form>
        </>
    )
}
