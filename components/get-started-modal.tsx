'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GraduationCap, Briefcase, Plane, Car, BookOpen, Globe } from 'lucide-react'

const services = [
    { name: 'Immigration Services', icon: Globe, href: '/immigration/work-permit' },
    { name: 'Study Abroad', icon: GraduationCap, href: '/study-abroad/canada' },
    { name: 'Job Seekers', icon: Briefcase, href: '/job-seekers/canada' },
    { name: 'Language Test', icon: BookOpen, href: '/language-test/ielts' },
    { name: 'Flight Booking', icon: Plane, href: '/flight-booking' },
    { name: 'Car Rental', icon: Car, href: '/car-rental' },
]

export function GetStartedModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Which service do you need?</DialogTitle>
                </DialogHeader>
                <div className="grid gap-3 py-4">
                    {services.map((service) => (
                        <Link key={service.name} href={service.href} onClick={() => onOpenChange(false)}>
                            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-3">
                                <service.icon className="size-5" />
                                <span>{service.name}</span>
                            </Button>
                        </Link>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
