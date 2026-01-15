import { Truck, Warehouse, FileCheck } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Our Services</h2>
                    <p className="mt-6 text-lg">Freight Forwarding | Warehousing | Customs Clearance | Supply Chain Management</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="border rounded-3xl p-8 space-y-4">
                        <Truck className="size-5" />
                        <h3 className="text-2xl font-semibold">Freight Forwarding</h3>
                        <p className="text-sm">Air, Sea & Road Transport</p>
                        <p>Comprehensive freight solutions including air cargo, sea freight, and road transport across Rwanda, East Africa, and international destinations.</p>
                    </div>
                    <div className="border rounded-3xl p-8 space-y-4">
                        <Warehouse className="size-5" />
                        <h3 className="text-2xl font-semibold">Warehousing</h3>
                        <p className="text-sm">Secure Storage Solutions</p>
                        <p>Modern warehouse facilities with inventory management, order fulfillment, distribution services, and temperature-controlled storage options.</p>
                    </div>
                    <div className="border rounded-3xl p-8 space-y-4">
                        <FileCheck className="size-5" />
                        <h3 className="text-2xl font-semibold">Customs Clearance</h3>
                        <p className="text-sm">Import & Export Documentation</p>
                        <p>Expert customs brokerage, import/export permits, duty calculation, compliance management, and complete documentation support.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
