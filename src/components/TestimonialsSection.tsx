import SectionContainer from "./SectionContainer";
import { homePageData } from "@/data/homePageData";
import { testimonialsCardsData } from "@/data/testimonialsCardsData";
import TestimonialCard from "./TestimonialCard";

import Carousel from "./Carousel";

export default function TestimonialsSection() {
  const cards = testimonialsCardsData.map(
    ({ name, title, rating, image, content }, index) => (
      <TestimonialCard
        key={index}
        name={name}
        title={title}
        rating={rating}
        image={image}
        content={content}
      />
    )
  );
  return (
    <SectionContainer
      title={homePageData.testimonialsSection.title}
      className="items-center gap-10"
    >
      <div className="mx-auto w-full max-w-[1170px] px-4">
        <Carousel autoSlide autoSlideInterval={7500}>
          {cards}
        </Carousel>
      </div>
      {/* <div className="absolute top-0 left-0 h-full w-full backdrop-blur-3xl bg-secondary-dark/10 z-[11]" />
      <div className="absolute top-0 left-1/2 -translate-y-2/3 -translate-x-1/2 max-w-screen-md w-full rounded-full h-[300px] blur-4xl bg-accent/10 z-10" />
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-screen-lg w-full rounded-full h-[300px] blur-4xl bg-primary/20 z-5" /> */}
    </SectionContainer>
  );
}
