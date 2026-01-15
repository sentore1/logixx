import { Card, CardContent } from '@/components/ui/card'
import { Star, Award } from 'lucide-react'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Uwase',
        role: 'Import Business Owner',
        image: '',
        quote: 'Flash Logix made importing goods from China seamless. Their customs clearance team handled everything professionally and my cargo arrived on time!',
    },
    {
        name: 'Mugisha',
        role: 'Export Company CEO',
        image: '',
        quote: 'I was struggling with shipping my coffee exports until I found Flash Logix. They simplified the entire process and now my products reach Europe efficiently.',
    },
    {
        name: 'Ishimwe',
        role: 'Manufacturing Company',
        image: '',
        quote: 'The supply chain management seemed impossible until Flash Logix stepped in. Now our raw materials arrive consistently and our production runs smoothly!',
    },
    {
        name: 'Niyonzima',
        role: 'E-commerce Business',
        image: '',
        quote: 'From warehousing to last-mile delivery, Flash Logix guided me every step of the way. My online business is now thriving across East Africa.',
    },
    {
        name: 'Umutoni',
        role: 'Pharmaceutical Distributor',
        image: '',
        quote: 'Flash Logix\'s expertise in temperature-controlled logistics is unmatched. They handle our medical supplies with the utmost care and precision.',
    },
    {
        name: 'Habimana',
        role: 'Construction Company',
        image: '',
        quote: 'Moving heavy machinery was a complex process, but Flash Logix made it seamless. Our equipment arrived safely and our project stayed on schedule.',
    },
    {
        name: 'Mukamana',
        role: 'Fashion Retailer',
        image: '',
        quote: 'The team at Flash Logix is incredibly knowledgeable and supportive. They helped me establish a reliable supply chain from Asia to Rwanda.',
    },
    {
        name: 'Nkurunziza',
        role: 'Agricultural Exporter',
        image: '',
        quote: 'Flash Logix turned my export dreams into reality. Their attention to detail and expertise made all the difference in reaching international markets.',
    },
    {
        name: 'Uwera',
        role: 'Electronics Importer',
        image: '',
        quote: 'I highly recommend Flash Logix for anyone looking to import electronics. They handled customs clearance and delivery flawlessly.',
    },
    {
        name: 'Bizimana',
        role: 'Automotive Parts Dealer',
        image: '',
        quote: 'Flash Logix\'s comprehensive logistics support from port to warehouse made my automotive parts business stress-free and successful.',
    },
    {
        name: 'Ingabire',
        role: 'Food & Beverage Company',
        image: '',
        quote: 'The professionalism and dedication of Flash Logix is outstanding. They delivered our perishable goods in perfect condition within 48 hours!',
    },
    {
        name: 'Nsengimana',
        role: 'Technology Startup',
        image: '',
        quote: 'Flash Logix guided me through the complex import regulations with ease. I now have a reliable logistics partner for my tech business growth.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Success Stories from Our Clients</h2>
                        <p className="mt-6">Real businesses, real results. See how Flash Logix has helped hundreds of companies streamline their logistics operations.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote }, index) => (
                                    <Card key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                                        <CardContent className="p-4">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <div className="flex items-center gap-0.5">
                                                    <Star className="w-1.5 h-1.5 fill-black text-black" />
                                                    <span className="text-xs font-semibold text-black">5.0</span>
                                                </div>
                                                <Award className="w-2 h-2 text-black" />
                                            </div>
                                            <h3 className="font-semibold text-black text-xs">{name}</h3>
                                            <span className="text-black/70 block text-xs">{role}</span>
                                            <blockquote className="mt-0.5">
                                                <p className="text-black text-xs leading-tight">{quote}</p>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
