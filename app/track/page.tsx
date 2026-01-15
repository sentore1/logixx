import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function TrackPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16">
                    <div className="mx-auto max-w-2xl px-6">
                        <h1 className="text-4xl font-semibold mb-8 text-center">Track Your Shipment</h1>
                        <p className="text-center text-muted-foreground mb-8">
                            Enter your tracking number to get real-time updates on your shipment status.
                        </p>
                        
                        <Card>
                            <CardContent className="p-8">
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Tracking Number</label>
                                        <input 
                                            type="text" 
                                            placeholder="Enter your tracking number"
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                                        Track Shipment
                                    </Button>
                                </form>
                                
                                <div className="mt-8 pt-8 border-t">
                                    <h3 className="font-semibold mb-4">Need Help?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Contact our customer service team for assistance with tracking your shipment.
                                    </p>
                                    <p className="text-sm">
                                        <strong>Phone:</strong> +250 793 145 109<br/>
                                        <strong>Email:</strong> info@flashlogixco.com                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}