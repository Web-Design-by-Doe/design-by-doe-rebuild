import SectionContainer from "./SectionContainer";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactSection() {
  return (
    <SectionContainer className="items-center md:gap-20 max-w-[1170px]">
      <div className="flex flex-col items-center md-lg:flex-row gap-8 w-full max-w-full">
        <ContactDetails />
        <div className="max-w-2xl w-full px-4 md-lg:px-10 pb-4 pt-2 bg-secondary/30 border border-secondary rounded-lg duration-300 relative">
          <p className="text-accent/50 font-light text-[12px] float-end pb-4">
            Required fields *
          </p>
          <ContactForm />
          {/* <div className="absolute top-0 left-0 translate-y-1/2 translate-x-1/2 rounded-full blur-3xl w-1/2 h-1/2 z-10 bg-primary" /> */}
        </div>
      </div>
    </SectionContainer>
  );
}
