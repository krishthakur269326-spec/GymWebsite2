import React from "react";

const LegalPage = () => {
    const sections = [
        {
            id: "privacy",
            title: "Privacy Policy",
            content: `
At Platinum Fitness, we respect your privacy and are committed to protecting your personal information.

We may collect information such as your name, email address, phone number, membership details, and website usage data when you interact with our services.

Your information is used to:
• Manage memberships and bookings
• Improve our services and website experience
• Communicate important updates and promotional offers
• Ensure security and fraud prevention

We never sell your personal information to third parties. Information may only be shared with trusted service providers necessary for operating our business.
      `,
        },
        {
            id: "terms",
            title: "Terms & Conditions",
            content: `
By accessing Platinum Fitness facilities, website, or services, you agree to comply with these terms.

Members are responsible for:
• Following gym rules and safety guidelines
• Maintaining respectful conduct toward staff and members
• Providing accurate account information

Platinum Fitness reserves the right to modify memberships, pricing, schedules, and policies without prior notice.

Any misuse of facilities, harassment, damage to property, or violation of gym policies may result in suspension or termination of membership.
      `,
        },
        {
            id: "refund",
            title: "Refund Policy",
            content: `
Membership fees, personal training packages, and promotional offers are generally non-refundable unless required by applicable law.

Refund requests may be considered under exceptional circumstances, including:
• Medical conditions preventing gym participation
• Duplicate payments
• Billing errors

Approved refunds may require up to 14 business days for processing.

Unused services, missed sessions, or membership inactivity do not automatically qualify for refunds.
      `,
        },
        {
            id: "cookies",
            title: "Cookie Policy",
            content: `
Platinum Fitness may use cookies and similar technologies to enhance user experience and improve website performance.

Cookies help us:
• Remember user preferences
• Analyze website traffic and performance
• Improve functionality and personalization

By continuing to use our website, you consent to our use of cookies.

You may disable cookies through your browser settings; however, some features of the website may not function properly.
      `,
        },
    ];

    return (
        <section className="bg-black relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-16 py-16 border border-b-white/5">
            {/* Navigation */}
            <div className="sticky top-0 z-30 backdrop-blur-xl bg-black/80 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-wrap gap-4 py-5">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="px-5 py-2 rounded-full border border-white/15 text-sm uppercase tracking-widest text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sections */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-white">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/5 to-transparent" />

                            <div className="relative p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl font-black text-white/20">
                                        0{index + 1}
                                    </span>

                                    <div className="h-px flex-1 bg-white/10" />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    {section.title}
                                </h2>

                                <div className="max-w-4xl">
                                    <p className="leading-8 text-white/70 whitespace-pre-line">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default LegalPage;