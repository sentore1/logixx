import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Plane, Ship, Truck, Warehouse, FileCheck, DollarSign } from 'lucide-react'

export default function FAQPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24 pb-16">
                <section className="py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
                    <div className="mx-auto max-w-6xl px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked <span className="text-[#FFBF00]">Questions</span></h1>
                        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                            Find answers to common questions about our logistics and freight forwarding services
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#FFBF00] rounded-full flex items-center justify-center">
                                        <Plane className="size-4 text-black" />
                                    </div>
                                    Air Freight Services
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>What is air freight and when should I use it?</AccordionTrigger>
                                        <AccordionContent>
                                            Air freight is the fastest shipping method for international cargo. Use it for time-sensitive shipments, high-value goods, perishable items, or when you need delivery within 24-48 hours. It's ideal for urgent business needs and temperature-controlled cargo.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>What are the weight and size limits for air freight?</AccordionTrigger>
                                        <AccordionContent>
                                            Air freight can handle packages from small parcels to large cargo. Weight limits vary by aircraft, typically up to 150kg per piece for standard cargo. We handle oversized items with special arrangements. Contact us for specific requirements.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>How long does air freight take from Rwanda?</AccordionTrigger>
                                        <AccordionContent>
                                            Air freight from Rwanda typically takes 1-3 days to major destinations like Europe, USA, and Asia. This includes customs clearance time. Express services can deliver within 24 hours to select destinations.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Can you handle dangerous goods by air?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, we are certified to handle dangerous goods (DG) shipments by air. This includes chemicals, batteries, medical supplies, and other regulated items. Special packaging, documentation, and handling procedures apply.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#FFBF00] rounded-full flex items-center justify-center">
                                        <Ship className="size-4 text-black" />
                                    </div>
                                    Sea Freight Services
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="sea-1">
                                        <AccordionTrigger>What's the difference between FCL and LCL?</AccordionTrigger>
                                        <AccordionContent>
                                            FCL (Full Container Load) means you rent an entire container for your cargo. LCL (Less Container Load) means your cargo shares container space with other shipments. FCL is cost-effective for large volumes, while LCL works for smaller shipments.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="sea-2">
                                        <AccordionTrigger>How long does sea freight take?</AccordionTrigger>
                                        <AccordionContent>
                                            Sea freight transit times vary by destination: Europe (25-35 days), Asia (20-30 days), USA (35-45 days). This includes port handling and customs clearance. We provide tracking updates throughout the journey.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="sea-3">
                                        <AccordionTrigger>What container sizes are available?</AccordionTrigger>
                                        <AccordionContent>
                                            Standard containers include 20ft (33 CBM) and 40ft (67 CBM). We also offer 40ft High Cube (76 CBM), refrigerated containers, and open-top containers for special cargo requirements.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#FFBF00] rounded-full flex items-center justify-center">
                                        <Truck className="size-4 text-black" />
                                    </div>
                                    Road Transport & Regional Delivery
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="road-1">
                                        <AccordionTrigger>Which countries do you deliver to by road?</AccordionTrigger>
                                        <AccordionContent>
                                            We provide road transport across East Africa including Kenya, Uganda, Tanzania, Burundi, and DRC. Our network extends to major cities and remote locations with reliable trucking services.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="road-2">
                                        <AccordionTrigger>How do you handle cross-border documentation?</AccordionTrigger>
                                        <AccordionContent>
                                            We manage all cross-border documentation including customs declarations, transit permits, and border clearances. Our experienced team ensures smooth passage through all East African borders.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="road-3">
                                        <AccordionTrigger>What's the maximum weight for road transport?</AccordionTrigger>
                                        <AccordionContent>
                                            Our trucks can handle up to 30 tons per vehicle. For heavier cargo, we arrange multiple vehicles or specialized heavy-duty transport. We also handle oversized cargo with proper permits.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#FFBF00] rounded-full flex items-center justify-center">
                                        <Warehouse className="size-4 text-black" />
                                    </div>
                                    Warehousing & Storage
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="warehouse-1">
                                        <AccordionTrigger>What types of storage do you offer?</AccordionTrigger>
                                        <AccordionContent>
                                            We offer general warehousing, temperature-controlled storage, bonded warehouse facilities, and specialized storage for hazardous materials. All facilities have 24/7 security and modern inventory management systems.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="warehouse-2">
                                        <AccordionTrigger>Can you handle inventory management?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, we provide complete inventory management including stock tracking, order fulfillment, pick and pack services, and real-time reporting. Our WMS (Warehouse Management System) gives you full visibility of your inventory.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="warehouse-3">
                                        <AccordionTrigger>Do you offer distribution services?</AccordionTrigger>
                                        <AccordionContent>
                                            Absolutely! We provide last-mile delivery, cross-docking, order fulfillment, and distribution to retail locations across Rwanda and East Africa. This includes same-day and next-day delivery options.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#FFBF00] rounded-full flex items-center justify-center">
                                        <FileCheck className="size-4 text-black" />
                                    </div>
                                    Customs & Documentation
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="customs-1">
                                        <AccordionTrigger>What documents do I need for import/export?</AccordionTrigger>
                                        <AccordionContent>
                                            Required documents include commercial invoice, packing list, bill of lading/airway bill, certificate of origin, and import/export permits. Specific requirements vary by product type and destination country.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="customs-2">
                                        <AccordionTrigger>How do you calculate customs duties?</AccordionTrigger>
                                        <AccordionContent>
                                            Customs duties are calculated based on product classification (HS codes), country of origin, and applicable trade agreements. We provide accurate duty calculations and help minimize costs through proper classification.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="customs-3">
                                        <AccordionTrigger>Can you handle customs clearance for me?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, we are licensed customs brokers and handle all clearance procedures including document preparation, duty payment, inspections, and release of goods. This saves you time and ensures compliance.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#FFBF00] rounded-full flex items-center justify-center">
                                        <DollarSign className="size-4 text-black" />
                                    </div>
                                    Pricing & General Questions
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="gen-1">
                                        <AccordionTrigger>How do you calculate shipping costs?</AccordionTrigger>
                                        <AccordionContent>
                                            Shipping costs depend on weight, dimensions, destination, service type, and urgency. We provide transparent pricing with no hidden fees. Contact us for instant quotes based on your specific requirements.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="gen-2">
                                        <AccordionTrigger>Do you provide cargo insurance?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, we offer comprehensive cargo insurance covering loss, damage, and theft during transit. Insurance rates typically range from 0.1% to 0.5% of cargo value depending on the type of goods and route.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="gen-3">
                                        <AccordionTrigger>Can I track my shipment in real-time?</AccordionTrigger>
                                        <AccordionContent>
                                            Absolutely! We provide 24/7 online tracking for all shipments. You'll receive regular updates via SMS and email, and can check status anytime through our tracking portal or mobile app.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="gen-4">
                                        <AccordionTrigger>What are your operating hours?</AccordionTrigger>
                                        <AccordionContent>
                                            Our offices are open Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 2:00 PM. However, our operations run 24/7 for urgent shipments. Emergency support is available via WhatsApp at +250 793 145 109.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}