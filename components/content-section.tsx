import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Why Flash Logix?</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <Image src="/New folder/6.jpg" className="rounded-2xl" alt="Why Flash Logix" width={1207} height={929} />
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            With expert logistics solutions for <span className="text-accent-foreground font-bold">Rwanda, East Africa, Europe, Asia, and beyond</span>, we handle every detail from cargo pickup to final delivery.
                        </p>
                        <p className="text-muted-foreground">It's time to think bigger—it's time to go Flash Logix. We provide a clear and direct path to your logistics success, ensuring you can focus on growing your business.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Flash Logix made shipping my products to Europe seamless. Their team handled everything professionally and my cargo arrived on time!</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Jean-Claude M., Export Business</cite>
                                    <span className="text-sm text-muted-foreground">Kigali, Rwanda</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}