import type { Schema, Struct } from '@strapi/strapi';

export interface ReviewPageReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_review_page_review_cards';
  info: {
    displayName: 'Review Card';
  };
  attributes: {
    Review: Schema.Attribute.String;
    Reviewer: Schema.Attribute.String;
    ReviewerFrom: Schema.Attribute.String;
    reviewerImage: Schema.Attribute.Media<'files' | 'images'>;
    starRating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface TrustSectionBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_trust_section_bullet_items';
  info: {
    displayName: 'Bullet Item';
  };
  attributes: {
    bulletOne: Schema.Attribute.String;
    bulletThree: Schema.Attribute.String;
    bulletTwo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'review-page.review-card': ReviewPageReviewCard;
      'trust-section.bullet-item': TrustSectionBulletItem;
    }
  }
}
