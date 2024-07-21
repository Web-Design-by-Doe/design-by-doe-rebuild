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

export type MockupImage = {
  url: string;
  height: number;
  width: number;
};

export type PortfolioDataItem = {
  clientDescription: string;
  clientName: string;
  clientWebsite: string;
  slug: string;
  mockupImage: MockupImage;
};

export type PortfolioDataItemsResponse = {
  portfolioDataItems: PortfolioDataItem[];
};
