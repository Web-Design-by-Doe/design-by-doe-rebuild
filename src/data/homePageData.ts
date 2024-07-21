import { pricingCardsData } from "./pricingCardsData";
import { testimonialsCardsData } from "./testimonialsCardsData";

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
};
