'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'

export default function CarRentalForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: 'Car Rental',
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            pickupLocation: formData.get('pickupLocation'),
            dropoffLocation: formData.get('dropoffLocation'),
            pickupDate: formData.get('pickupDate'),
            pickupTime: formData.get('pickupTime'),
            returnDate: formData.get('returnDate'),
            returnTime: formData.get('returnTime'),
            carType: formData.get('carType'),
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
                setMessage('Rental request submitted successfully!')
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
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Book Your Car Rental</h3>
            {message && <p className={`text-sm mb-4 text-center ${message.includes('success') ? 'text-green-200' : 'text-red-200'}`}>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm mb-1 text-white">First Name *</label><input name="firstName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1 text-white">Last Name *</label><input name="lastName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                </div>
                <div><label className="block text-sm mb-1 text-white">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1 text-white">Phone</label><input name="phone" type="tel" placeholder="0720 123 456" className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1 text-white">Pickup Location</label><input name="pickupLocation" type="text" className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1 text-white">Drop-off Location</label><input name="dropoffLocation" type="text" className="w-full px-3 py-2 border rounded-md" /></div>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm mb-1 text-white">Pickup Date</label><input name="pickupDate" type="date" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1 text-white">Pickup Time</label><input name="pickupTime" type="time" className="w-full px-3 py-2 border rounded-md" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm mb-1 text-white">Return Date</label><input name="returnDate" type="date" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1 text-white">Return Time</label><input name="returnTime" type="time" className="w-full px-3 py-2 border rounded-md" /></div>
                </div>
                <div><label className="block text-sm mb-1 text-white">Car Type</label><select name="carType" className="w-full px-3 py-2 border rounded-md"><option>Economy</option><option>Compact</option><option>Mid-size</option><option>Full-size</option><option>SUV</option><option>Luxury</option><option>Van</option></select></div>
                <div><label className="block text-sm mb-1 text-white">Comment or Message</label><textarea name="message" rows={3} className="w-full px-3 py-2 border rounded-md"></textarea></div>
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</Button>
            </form>
        </>
    )
}
