export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Flash Logix Success</h2>
                    <p>Trust is built on results. Flash Logix has been Rwanda's reliable logistics partner. We handle the complexity of supply chain management; you focus on growing your business.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-4 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">15+ Years</div>
                        <p>Experience</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">25+</div>
                        <p>Countries Served</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">5k+</div>
                        <p>Shipments Delivered</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">8k+</div>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>
    )
}