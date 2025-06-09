import React from 'react'
import Image from 'next/image';
export default function page() {
    const paragraphs = [
        "Process bookings and payments securely.",
        "Coordinate with travel providers like airlines, hotels, and activity hosts.",
        "Ensure safety and meet medical or legal requirements.",
        "Communicate important trip updates, reminders, and recommendations.",
        "Personalise travel itineraries and activities.",
        "Improve our services and website based on feedback and usage.",
        "Share photos/videos from your trip (only with your permission).",
    ];
    const DataParagraphs = [
        "Encrypted connections (SSL) for all online transactions.",
        "Secure databases with limited access.",
        "Staff training on data protection and privacy best practices.",
        "Regular audits and system updates to maintain security.",
    ];
    const ChoicesPara = [
        "Request access to the personal data we hold about you.",
        "Ask us to correct, update, or delete your information.",
        "Withdraw your consent for photo usage or marketing emails.",
        "Disable cookies via your browser settings or opt out of tracking.",
    ];
    return (
        <div className='container py-20'>
            <div>
                <h1 className='primary-red text-4xl md:text-6xl py-5'>Introduction</h1>
                <p className='text-xl md:text-2xl'>At Roam and Learn, we’re committed to protecting your personal information and being transparent about how we collect, use, and share it. This Privacy Policy is here to explain what data we collect, why we need it, how we use it, and how we keep it safe.
                    <br />
                    <br />
                    By using our website or joining one of our student tours, you agree to the practices described in this Privacy Policy.
                </p>
            </div>
            <article>
                <div className='pt-10'>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>1. Information We Collect</h1>
                    <p className='text-xl md:text-2xl pb-4'>We collect personal data to provide better services and safer travel experiences. This includes:</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Personal Information:</strong> Full name, date of birth, gender, nationality, passport details, email address, phone number, school or institution name, and emergency contact information.</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Health and Safety Information:</strong> Allergies, dietary restrictions, medical conditions, and insurance details to ensure your well-being during the trip.</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Travel Preferences:</strong> Rooming requests, travel interests, and activity preferences to customize your experience.</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Payment and Billing Info:</strong> Credit/debit card details and billing addresses (collected through secure third-party services).</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Website Usage Data:</strong> IP address, browser type, device information, and site interactions collected via cookies and analytics tools.</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Photos and Videos:</strong> Images captured during tours may be used for promotional content, with prior consent.</p>
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>2. How We Use Your Information</h1>
                    <p className='text-xl md:text-2xl pb-5'>Your data helps us provide a seamless and personalised experience. We may use your information to:</p>
                    {paragraphs.map((text, index) => (
                        <p key={index} className="flex gap-2 items-start text-xl md:text-2xl pb-3">
                            <Image
                                width={24}
                                height={24}
                                src="/icons/objects.png"
                                alt="list-icon"
                                className="object-contain mt-1"
                            />
                            <span>{text}</span>
                        </p>
                    ))}
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>3. Sharing Your Information</h1>
                    <p className='text-xl md:text-2xl pb-4'>We only share your data when necessary and with trusted partners:</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Travel Vendors: </strong> Airlines, hotels, local guides, and transport providers, to ensure your trip is booked and managed properly.</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Medical Personnel: </strong>In case of an emergency, we may share relevant health data with healthcare providers.</p>
                    <p className='text-xl md:text-2xl pb-4'><strong className='primary-blue'>Third-Party Services:</strong> Secure payment gateways, email platforms, and analytics tools used to manage our services.</p>
                    <p className='text-xl md:text-2xl py-4'>We do not sell or rent your personal data to any third parties for marketing or advertising purposes.</p>
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>4. Data Security</h1>
                    <p className='text-xl md:text-2xl pb-5'>We take your privacy seriously and implement strong security measures to protect your data, including:</p>
                    {DataParagraphs.map((text, index) => (
                        <p key={index} className="flex gap-2 items-start text-xl md:text-2xl pb-3">
                            <Image
                                width={24}
                                height={24}
                                src="/icons/objects.png"
                                alt="list-icon"
                                className="object-contain mt-1"
                            />
                            <span>{text}</span>
                        </p>
                    ))}
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>5. Your Rights and Choices</h1>
                    <p className='text-xl md:text-2xl pb-5'>You have control over your personal information. You can:</p>
                    {ChoicesPara.map((text, index) => (
                        <p key={index} className="flex gap-2 items-start text-xl md:text-2xl pb-3">
                            <Image
                                width={24}
                                height={24}
                                src="/icons/objects.png"
                                alt="list-icon"
                                className="object-contain mt-1"
                            />
                            <span>{text}</span>
                        </p>
                    ))}
                    <p className='text-xl md:text-2xl py-5'>To make a request, email us at [insert email address]. We’ll respond within 30 days.</p>
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>6. Cookies and Tracking Technologies</h1>
                    <p className='text-xl md:text-2xl pb-4'>Our website uses cookies to enhance user experience, gather statistics, and improve performance. Cookies help us remember your preferences and understand how our site is used.</p>
                    <p className='text-xl md:text-2xl pb-4'>You can manage or disable cookies through your browser settings. However, some features may not work properly if cookies are disabled.</p>
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>7. Data Retention</h1>
                    <p className='text-xl md:text-2xl pb-4'>We only keep your data for as long as needed to fulfill the purposes listed in this policy. Once it’s no longer needed, we delete it securely.</p>
                    <p className='text-xl md:text-2xl pb-4'>In some cases, we may keep data longer if required by law (e.g., financial records).</p>
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>8. Updates to This Policy</h1>
                    <p className='text-xl md:text-2xl pb-4'>We may update this Privacy Policy from time to time. If we make significant changes, we’ll notify you by email or through a notice on our website.</p>
                    <p className='text-xl md:text-2xl pb-4'>The 'Last updated' date at the top of the policy will show you when it was last changed.</p>
                </div>
            </article>
            <article>
                <div>
                    <h1 className='primary-red text-2xl md:text-4xl py-5'>9. Contact Us</h1>
                    <p className='text-xl md:text-2xl pb-5'>Have questions or concerns about your privacy? Feel free to reach out.</p>
                    <p className='text-xl md:text-2xl pb-5'><strong className='primary-blue'>Email us at: </strong>  [insert email address]</p>
                    <p className='text-xl md:text-2xl pb-5'>We’re happy to help and will do our best to respond quickly.</p>
                </div>
            </article>
        </div>
    )
}
