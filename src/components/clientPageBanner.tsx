'use client';

import { usePathname } from 'next/navigation';
import Pagebanner from '@/components/banners/Pagebanner';

const BannerData = [
    {
      id: "destinations",
      title: "Destinations",
      description:
        "At Roam N Learn, each destination is more than just a place on the map — it’s a living classroom. Our carefully curated educational tours are designed to immerse learners in real-world experiences that connect culture, history, science, and personal growth.",
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destinations" }
      ]
    },
    {
      id: "itinerary",
      title: "View itinerary",
      description:
        "Here’s your personalized journey combining the best of travel and learning. Review your itinerary below, make changes, or confirm your trip!",
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "View itinerary", href: "#" }
      ]
    },
    {
      id: "contact-us",
      title: "Contact Us",
      description:
        "We’re here to connect when it suits you, giving you more time to plan big adventures.",
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Contact Us", href: "/contact-us" }
      ]
    },
    {
      id: "about-us",
      title: "About Us",
      description:
        "At Roam N Learn, we believe the world is the best classroom. We're on a mission to blend the excitement of travel with the power of learning—creating journeys that inspire curiosity, growth, and global understanding.",
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" }
      ]
    },
    {
      id: "privacy-policy",
      title: "Privacy & Policy",
      description:
        ["At Roam and Learn, we’re committed to protecting your personal information and being transparent about how we collect, use, and share it. This Privacy Policy is here to explain what data we collect, why we need it, how we use it, and how we keep it safe.",
          "By using our website or joining one of our student tours, you agree to the practices described in this Privacy Policy."
        ],
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Privacy & Policy", href: "/privacy-policy" }
      ]
    },
    {
      id: "terms-conditions",
      title: "Terms & Condition",
      description:
        "Welcome to Roam N Learn. By using our website, booking a trip, or participating in any of our programs, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.",
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Terms & Condition", href: "/terms-condition" }
      ]
    },
    {
      id: "faqs",
      title: "FAQ’s",
      description:
        "Explore the most commonly asked questions about our trips, bookings, and what to expect with Roam N Learn.",
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "FAQ’s", href: "/faqs" }
      ]
    },
    {
      id: "auth/sign-up",
      title: "Sign Up",
      description:
        "Enter your Credentials to Create your account",
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: null
    },
    {
      id: "auth/sign-in",
      title: "Sign In",
      description:
        "Enter your Credentials to Sign In your account",
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: null
    },
    {
      id: "auth/register",
      title: "Register Now",
      description:
        "Enter your Credentials to Register",
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: null
    },
    {
      id: "verification",
      title: "ID Verification",
      description:
        "Enter your Credentials to Verify your I’d",
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: null
    },
    {
      id: "payment",
      title: "Payment",
      description: null,
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: null
    },
    {
      id: "success",
      title: "ID Verification DONE",
      description: null,
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: null
    },
    {
      id: "information",
      title: "MY INFORMATION",
      description: null,
      backgroundImage: "/images/home-page-red-background.png",
      breadcrumb: null
    },
    {
      id: "code-of-conduct",
      title: "Code of Conduct",
      description: null,
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: null
    },
    {
      id: "questionnaire",
      title: "Questionnaire",
      description: null,
      backgroundImage: "/images/home-banner-background.png",
      breadcrumb: null
    },
  ]

export default function ClientPageBanner() {
  const pathname = usePathname(); 
  const currentPath = pathname?.split('/')[1]; 
  
  const banner= BannerData?.find((item) => item.id === currentPath);
  console.log("Banner", banner)
  if (!banner) return null;

  return <Pagebanner {...banner} />;
}
