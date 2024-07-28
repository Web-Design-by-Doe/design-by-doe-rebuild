import PortfoliosContainer from "./PortfoliosContainer";
import SectionContainer from "./SectionContainer";
import { PortfolioItem } from "@/lib/types";

// const portfolios = [
//   {
//     __typename: "PortfolioData",
//     id: "clt7ic6c9fyo407mqwe8k2gv1",
//     clientDescription:
//       "Gary is a best selling, Hampshire based author, renowned for his dark english humour.",
//     clientName: "Gary Troia - Best Selling Author",
//     clientWebsite: "www.garytroia.com",
//     reviewRating: 5,
//     slug: "gary-troia",
//     mockupImage: {
//       __typename: "Asset",
//       url: "https://media.graphassets.com/HF8yfTHjSui23DsysRTT",
//     },
//   },
// ];

export default async function PortfolioSection({
  showBackground = true,
  portfolios,
}: {
  showBackground?: boolean;
  portfolios: PortfolioItem[];
}) {
  return (
    <SectionContainer
      className={`items-center gap-10 md:gap-20 relative overflow-hidden ${
        showBackground
          ? "bg-secondary/30 border-t border-b border-secondary rounded-xl px-4"
          : ""
      }`}
    >
      <PortfoliosContainer portfolios={portfolios} />
    </SectionContainer>
  );
}
