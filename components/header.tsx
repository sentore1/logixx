'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { GetStartedModal } from '@/components/get-started-modal'
import { usePathname } from 'next/navigation'

const menuItems = [
    { 
        name: 'Home', 
        href: '/',
        submenu: []
    },
    { 
        name: 'About', 
        href: '/about',
        submenu: [
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' }
        ]
    },
    { 
        name: 'Services', 
        href: '/services',
        submenu: [
            { name: 'All Services', href: '/services' },
            { name: 'Air Freight', href: '/services/air-freight' },
            { name: 'Sea Freight', href: '/services/sea-freight' },
            { name: 'Road Transport', href: '/services/road-transport' },
            { name: 'Warehousing', href: '/services/warehousing' }
        ]
    },
    { 
        name: 'Calculator', 
        href: '/calculator',
        submenu: []
    },
    { 
        name: 'Resources', 
        href: '/faq',
        submenu: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Success Stories', href: '/success-stories' }
        ]
    },
    { 
        name: 'Contact', 
        href: '/contact',
        submenu: []
    }
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [modalOpen, setModalOpen] = React.useState(false)
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-full border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo isScrolled={isScrolled || !isHomePage} />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-3 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="group relative">
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "block duration-150 whitespace-nowrap",
                                                isHomePage && !isScrolled 
                                                    ? "text-white hover:text-yellow-400" 
                                                    : "text-muted-foreground hover:text-accent-foreground"
                                            )}>
                                            <span>{item.name}</span>
                                        </Link>
                                        {item.submenu && item.submenu.length > 0 && (
                                            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                <div className="bg-background border rounded-lg shadow-lg p-3 min-w-[200px]">
                                                    {item.submenu.map((subitem, subindex) => (
                                                        <Link
                                                            key={subindex}
                                                            href={subitem.href}
                                                            className="text-muted-foreground hover:text-black active:bg-gray-200 block px-3 py-2 text-xs rounded hover:bg-yellow-400 duration-150">
                                                            {subitem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-black hover:bg-yellow-400 active:bg-gray-200 block duration-150 px-3 py-2 rounded">
                                                <span>{item.name}</span>
                                            </Link>
                                            {item.submenu && item.submenu.length > 0 && (
                                                <ul className="ml-4 mt-2 space-y-2">
                                                    {item.submenu.map((subitem, subindex) => (
                                                        <li key={subindex}>
                                                            <Link
                                                                href={subitem.href}
                                                                className="text-muted-foreground hover:text-black hover:bg-yellow-400 active:bg-gray-200 block text-xs duration-150 px-3 py-2 rounded">
                                                                {subitem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="tel:+250793145109">
                                        <span>Call</span>
                                    </Link>
                                </Button>
                                <Button
                                    onClick={() => setModalOpen(true)}
                                    size="sm"
                                    className={cn('bg-black hover:bg-gray-800 text-[#FFBF00]', isScrolled && 'lg:hidden')}>
                                    <span>Get Started</span>
                                </Button>
                                <Button
                                    onClick={() => setModalOpen(true)}
                                    size="sm"
                                    className={cn('bg-black hover:bg-gray-800 text-[#FFBF00]', isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <span>Get Started</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <GetStartedModal open={modalOpen} onOpenChange={setModalOpen} />
        </header>
    )
}
