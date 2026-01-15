import { InfiniteSlider } from '@/components/ui/infinite-slider'

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Our Partners</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={48}>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">Norrsken Rwanda</span>
                            </div>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">LuNa Smelter</span>
                            </div>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">International Vaccine Institute</span>
                            </div>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">TRL Space</span>
                            </div>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">Gorilla Logistics</span>
                            </div>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">STUNET</span>
                            </div>
                            <div className="rounded-full border bg-gray-100 px-6 py-2 shadow-sm whitespace-nowrap">
                                <span className="text-sm font-medium">PRYRO</span>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>

                    </div>
                </div>
            </div>
        </section>
    )
}
