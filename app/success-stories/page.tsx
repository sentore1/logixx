import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'

export default function SuccessStoriesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold mb-8 text-center">Success Stories</h1>
                        <p className="text-center text-muted-foreground mb-12">
                            Discover how Flash Logix has helped businesses across Rwanda and East Africa achieve their logistics goals.
                        </p>
                        
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Rwanda Coffee Export Success</h3>
                                    <p className="text-muted-foreground mb-4">
                                        "Flash Logix helped us export our premium coffee beans to European markets with their reliable air freight services. Their expertise in customs clearance saved us weeks of delays."
                                    </p>
                                    <p className="text-sm font-medium">- Kigali Coffee Cooperative</p>
                                </CardContent>
                            </Card>
                            
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Manufacturing Supply Chain</h3>
                                    <p className="text-muted-foreground mb-4">
                                        "Our manufacturing operations depend on timely delivery of raw materials. Flash Logix's supply chain management has improved our efficiency by 40%."
                                    </p>
                                    <p className="text-sm font-medium">- East Africa Manufacturing Ltd</p>
                                </CardContent>
                            </Card>
                            
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">E-commerce Fulfillment</h3>
                                    <p className="text-muted-foreground mb-4">
                                        "Flash Logix's warehousing and distribution services enabled us to expand our e-commerce business across the region with same-day delivery options."
                                    </p>
                                    <p className="text-sm font-medium">- Rwanda Online Store</p>
                                </CardContent>
                            </Card>
                            
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Medical Equipment Import</h3>
                                    <p className="text-muted-foreground mb-4">
                                        "Time-sensitive medical equipment imports require precision. Flash Logix's express delivery and customs expertise ensured our hospital received critical supplies on time."
                                    </p>
                                    <p className="text-sm font-medium">- Kigali Medical Center</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}