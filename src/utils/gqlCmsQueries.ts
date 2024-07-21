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
  query getPortfolio($slug: String!) {
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

const GET_RECENT_PORTFOLIOS = gql`
  query getRecentPortfolios {
    portfolioDataItems(orderBy: createdAt_DESC, first: 3) {
      clientDescription
      clientName
      clientWebsite
      slug
      mockupImage {
        url
        height
        width
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

export {
  GET_PORTFOLIOS,
  GET_PORTFOLIO_ITEM,
  GET_RECENT_PORTFOLIOS,
  GET_PRIVACY_POLICY,
};
