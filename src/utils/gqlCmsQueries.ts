import { gql } from "@apollo/client";

const GET_PORTFOLIOS = gql`
  query getAllPortfolioEntries {
    portfolioItems {
      id
      clientName
      slug
      servicesProvided
      clientThumbnail {
        url
        width
        height
      }
    }
  }
`;

const GET_PORTFOLIO_ITEM = gql`
  query getPortfolioEntry($slug: String!) {
    portfolioItem(where: { slug: $slug }) {
      clientName
      clientReviewAuthor
      clientReviewBody
      clientReviewRating
      clientWebsite
      serviceDescription
      servicesProvided
      clientImages {
        height
        width
        url
      }
      slug
    }
  }
`;

const GET_RECENT_PORTFOLIOS = gql`
  query getRecentPortfolioEntries {
    portfolioItems(orderBy: createdAt_DESC) {
      id
      clientName
      slug
      clientThumbnail {
        url
        width
        height
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
