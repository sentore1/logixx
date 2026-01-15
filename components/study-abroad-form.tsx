'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function StudyAbroadForm({ destination }: { destination: string }) {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <Card className="p-8">
                    <h1 className="text-3xl font-bold mb-6">Apply Here</h1>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">First Name *</label>
                                <input type="text" required className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Last Name *</label>
                                <input type="text" required className="w-full px-3 py-2 border rounded-md" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email *</label>
                            <input type="email" required className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input type="tel" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Age</label>
                            <input type="number" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Destination</label>
                            <select className="w-full px-3 py-2 border rounded-md" defaultValue={destination}>
                                <option value="Canada">Canada</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                                <option value="Europe">Europe</option>
                                <option value="Asia">Asia</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Education Level</label>
                            <select className="w-full px-3 py-2 border rounded-md">
                                <option value="Bachelor's degree Level">Bachelor&apos;s degree Level</option>
                                <option value="Master's degree Level">Master&apos;s degree Level</option>
                                <option value="Diploma">Diploma</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Area Of Study</label>
                            <select className="w-full px-3 py-2 border rounded-md">
                                <option value="Business Administration">Business Administration</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Medicine">Medicine</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">English Test</label>
                            <select className="w-full px-3 py-2 border rounded-md">
                                <option value="IELTS">IELTS</option>
                                <option value="TOEFL">TOEFL</option>
                                <option value="PTE">PTE</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Upload Zipped Documents</label>
                            <input type="file" accept=".zip" className="w-full px-3 py-2 border rounded-md" />
                            <p className="text-xs text-muted-foreground mt-1">Click or drag a file to this area to upload.</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Comment or Message</label>
                            <textarea rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
                        </div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
