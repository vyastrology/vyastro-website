import type { Metadata } from "next";
import { AuroraOrb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy — VyAstro",
  description: "VyAstro Privacy Policy. How we collect, use, and protect your personal data.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, including:

**Personal Information:** Name, email address, country of residence, and any other information you provide when joining our waitlist, creating an account, or contacting us.

**Birth & Astrological Data:** Date of birth, time of birth, and place of birth — provided voluntarily for astrology and Vastu analysis. This data is used solely to generate personalized astrological and Vastu insights.

**Usage Data:** Information about how you interact with our platform, including pages visited, features used, and time spent. This is collected automatically through cookies and similar technologies.

**Communication Data:** Messages you send us through our contact form or email.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

- Provide, maintain, and improve our services
- Generate personalized astrology, Vastu, and Yantra recommendations
- Send you updates about the platform (you may opt out at any time)
- Respond to your inquiries and provide customer support
- Understand how users interact with our platform to improve the experience
- Comply with legal obligations

We do **not** sell your personal information to third parties. We do not share your birth data with any external parties except as required to provide our core services.`,
  },
  {
    title: "3. Data Security",
    content: `We implement industry-standard security measures to protect your information:

- All data is encrypted in transit using TLS/SSL
- Birth data and personal details are stored with AES-256 encryption at rest
- Access to user data is restricted to authorized personnel only
- We conduct regular security audits and vulnerability assessments
- We maintain incident response procedures in case of a data breach

Despite our best efforts, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: "4. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to:

- Maintain your session and preferences (necessary cookies)
- Understand how users navigate our platform (analytics cookies)
- Remember your language preference

You can control cookie settings through your browser. Note that disabling certain cookies may affect the functionality of our platform. We do not use cookies for advertising purposes.`,
  },
  {
    title: "5. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the personal data we hold about you
- **Correction:** Request correction of inaccurate or incomplete data
- **Deletion:** Request deletion of your personal data ("right to be forgotten")
- **Portability:** Request your data in a structured, machine-readable format
- **Objection:** Object to processing of your data for certain purposes
- **Withdrawal of Consent:** Withdraw consent at any time where processing is based on consent

To exercise any of these rights, contact us at privacy@vyastro.com. We will respond within 30 days.`,
  },
  {
    title: "6. Children's Privacy",
    content: `VyAstro is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information. If you believe we have inadvertently collected information from a minor, please contact us immediately.`,
  },
  {
    title: "7. Third-Party Services",
    content: `Our platform may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We use limited third-party services for platform operations (such as hosting and analytics) which are bound by data processing agreements and prohibited from using your data for their own purposes.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. When you request deletion, we will remove your data within 30 days, except where we are required to retain it for legal, tax, or regulatory purposes.

Waitlist data is retained until the product launches or for a maximum of 24 months, whichever is shorter. Birth and astrological data is retained only for as long as your account is active.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and, where appropriate, sending you an email notification. We encourage you to review this policy periodically. Your continued use of VyAstro after any changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** privacy@vyastro.com
**Website:** vyastro.com/contact

We are committed to resolving any concerns about your privacy promptly and transparently.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-cosmic-950 min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <AuroraOrb size={400} top="0" left="60%" opacity={0.07} color="purple" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-semibold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24 space-y-6">
        <div className="glass rounded-2xl p-6 border border-aurora-500/20">
          <p className="text-white/60 text-sm leading-relaxed">
            At VyAstro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Your birth data, personal details, and spiritual journey are sacred to us — we treat them accordingly.
          </p>
        </div>

        {SECTIONS.map(({ title, content }) => (
          <div key={title} className="glass rounded-2xl p-7 border border-white/5 space-y-4">
            <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
            <div className="text-white/55 text-sm leading-relaxed space-y-3">
              {content.split("\n\n").map((para, i) => (
                <p key={i}>
                  {para.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-white/80 font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
