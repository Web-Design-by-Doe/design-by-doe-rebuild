import ContactSection from "@/components/ContactSection";
import PageTitleCard from "@/components/PageTitle";

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="flex flex-col px-4 md:px-6 lg:px-8 z-30">
        <PageTitleCard
          title="Contact Us"
          subtitle="We are here to help you with any questions you may have."
        />
        <ContactSection />
      </div>
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-screen-lg w-full rounded-full h-[600px] blur-4xl bg-primary/30 -z-1" />
    </div>
  );
}
