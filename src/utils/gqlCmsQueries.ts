import { gql } from "@apollo/client";

const GET_PORTFOLIOS = gql`
  query getAllPortfolios {
    portfolioDataItems {
      id
      clientDescription
      clientName
      clientWebsite
      reviewRating
      slug
      mockupImage {
        url
      }
    }
  }
`;

const GET_PORTFOLIO_ITEM = gql`
  query GetPortfolio($slug: String!) {
    portfolioData(where: { slug: $slug }) {
      clientDescription
      clientName
      clientWebsite
      reviewRating
      reviewAuthor
      reviewBody
      slug
      mockupImage {
        url
      }
    }
  }
`;

const GET_PRIVACY_POLICY = gql`
  query getPrivacyPolicy {
    privacyPolicies {
      policy
    }
  }
`;

export { GET_PORTFOLIOS, GET_PORTFOLIO_ITEM, GET_PRIVACY_POLICY };
