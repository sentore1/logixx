import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function CookiesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8">Cookie Policy</h1>
                        
                        <div className="space-y-6 text-muted-foreground">
                            <p>This Cookie Policy explains how Flash Logix uses cookies and similar technologies on our website.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Are Cookies</h2>
                            <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze website traffic.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of Cookies We Use</h2>
                            <p><strong>Essential Cookies:</strong> Required for the website to function properly, including security and authentication.</p>
                            <p><strong>Analytics Cookies:</strong> Help us understand how visitors use our website to improve user experience.</p>
                            <p><strong>Functional Cookies:</strong> Remember your preferences and settings for a personalized experience.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Managing Cookies</h2>
                            <p>You can control and delete cookies through your browser settings. However, disabling cookies may affect website functionality.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Cookies</h2>
                            <p>We may use third-party services like Google Analytics that set their own cookies. These are governed by their respective privacy policies.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Updates to This Policy</h2>
                            <p>We may update this Cookie Policy periodically. Changes will be posted on this page with an updated date.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                            <p>For questions about cookies, contact us at info@flashlogix.rw or +250 793 145 109.</p>

                            <p className="mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
