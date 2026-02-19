'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plane, Ship, Truck, Warehouse, Package, Calculator } from 'lucide-react'

const services = [
    { name: 'Air Freight', icon: Plane, href: '/services/air-freight' },
    { name: 'Sea Freight', icon: Ship, href: '/services/sea-freight' },
    { name: 'Road Transport', icon: Truck, href: '/services/road-transport' },
    { name: 'Warehousing', icon: Warehouse, href: '/services/warehousing' },
    { name: 'Track Shipment', icon: Package, href: '/track' },
    { name: 'Freight Calculator', icon: Calculator, href: '/calculator' },
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
