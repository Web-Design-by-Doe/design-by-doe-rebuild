export type ServiceCardProps = {
  icon: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  title: string;
  description: string;
  cta: string;
};

export type PricingCardProps = {
  title: string;
  description: string;
  cta: CtaProps;
  features: string[];
  icon: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
};

export type CtaProps = {
  text: string;
  href: string;
  value: string;
};

export type PortfolioImage = {
  url: string;
  height: number;
  width: number;
};

export type PortfolioItemsResponse = {
  data: {
    portfolioItems: PortfolioItem[];
  };
};

export type PortfolioItem = {
  clientName: string;
  slug: string;
  servicesProvided: string[];
  clientThumbnail: PortfolioImage;
};

export type TestimonialCardProps = {
  name: string;
  title: string;
  rating: number;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  content: string;
};
