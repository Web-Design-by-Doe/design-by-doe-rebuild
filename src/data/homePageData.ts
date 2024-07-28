import { pricingCardsData } from "./pricingCardsData";
import { testimonialsCardsData } from "./testimonialsCardsData";

const email = process.env.NEXT_PUBLIC_RESEND_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export const homePageData = {
  heroSection: {
    title: "We Create Websites",
    subtitle:
      "WeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cta: "Get Started",
    image: {
      src: "/images/lion.webp",
      alt: "Image of website on an apple ipad",
      height: 720,
      width: 1400,
    },
  },
  serviceSection: {
    title: "Our Services",
    description:
      "From one-page showcase sites to complex monsters, startup websites and redesigns, our talented team provide a personal and tailored approach to your company and website.",
  },
  pricingSection: {
    title: "We're Transparent With Our Pricing",
    description:
      "From one-page showcase sites to complex monsters, startup websites and redesigns, our talented team provide a personal and tailored approach to your company and website.",
    pricingCards: pricingCardsData,
  },
  recentProjectsSection: {
    title: "Our Recent Projects",
    description:
      "From one-page showcase sites to complex monsters, startup websites and redesigns, our talented team provide a personal and tailored approach to your company and website.",
  },
  testimonialsSection: {
    title: "Our reviews speak for themselves",
    description: "We have dozens of happy customers, you could be next!",
    testimonials: testimonialsCardsData,
  },
  contactSection: {
    title: "Ready to get started?",
    description:
      "We are here to help you with any questions you may have. Fill out the form below and we'll get back to you as soon as possible.",
    waysToContact: {
      title: "Other ways to contact",
      items: [
        {
          href: `mailto:${email}`,
          title: email,
          icon: {
            src: "/icons/email.svg",
            alt: "Email icon",
            width: 24,
            height: 24,
          },
        },
        {
          href: `tel:${phone}`,
          title: phone,
          icon: {
            src: "/icons/phone.svg",
            alt: "Phone icon",
            width: 24,
            height: 24,
          },
        },
      ],
    },
    socialMedia: {
      title: "Follow us on social media",
      items: [
        {
          icon: {
            src: "/icons/facebook.svg",
            alt: "Facebook icon",
            width: 24,
            height: 24,
          },
        },
        {
          icon: {
            src: "/icons/instagram.svg",
            alt: "Instagram icon",
            width: 24,
            height: 24,
          },
        },
        {
          icon: {
            src: "/icons/linkedIn.svg",
            alt: "Twitter icon",
            width: 24,
            height: 24,
          },
        },
      ],
    },
  },
  processSection: {
    title: "Our Process",
    description:
      "From one-page showcase sites to complex monsters, startup websites and redesigns, our talented team provide a personal and tailored approach to your company and website.",
    steps: [
      {
        title: "Initial Consultation",
        description:
          "Free consultation to discuss your project and provide a quote.",
        icon: {
          src: "/icons/meeting.svg",
          alt: "Initial Consultation icon",
          width: 48,
          height: 48,
        },
      },
      {
        title: "Design & Development",
        description:
          "Design and development, keeping you updated throughout the process.",
        icon: {
          src: "/icons/code.svg",
          alt: "Design & Development icon",
          width: 48,
          height: 48,
        },
      },
      {
        title: "Testing & Refinement",
        description:
          "Refinement of your website, ensuring it works perfectly on all devices.",
        icon: {
          src: "/icons/testing.svg",
          alt: "Testing & Refinement icon",
          width: 48,
          height: 48,
        },
      },
      {
        title: "Launch",
        description:
          "Launch of your website only when you are 100% happy with the final product.",
        icon: {
          src: "/icons/launch.svg",
          alt: "Launch & Maintenance icon",
          width: 48,
          height: 48,
        },
      },
    ],
  },
};
