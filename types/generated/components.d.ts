import type { Schema, Attribute } from '@strapi/strapi';

export interface CoreDynamicValueCalc extends Schema.Component {
  collectionName: 'components_core_dynamic_value_calcs';
  info: {
    displayName: 'DynamicValueCalc';
    icon: 'apps';
  };
  attributes: {
    operator: Attribute.Enumeration<
      ['None', 'Plus', 'Minus', 'Multiply', 'Divide']
    > &
      Attribute.DefaultTo<'Plus'>;
    profile: Attribute.Relation<
      'core.dynamic-value-calc',
      'oneToOne',
      'api::profile.profile'
    >;
    operatorCustomValue: Attribute.Enumeration<
      ['None', 'Plus', 'Minus', 'Multiply', 'Divide']
    > &
      Attribute.DefaultTo<'Plus'>;
    customValue: Attribute.Decimal;
  };
}

export interface ProfilesGenerateProfile extends Schema.Component {
  collectionName: 'components_profiles_generate_profiles';
  info: {
    displayName: 'GenerateProfile';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    category: Attribute.Enumeration<
      [
        'Behavioural Patterns',
        'Risk Assessment',
        'Engagement Metrics',
        'Communication Preferences',
        'Social and Community Interaction',
        'Transactional Data',
        'Geographical and Demographic Data',
        'Tech and Device Preferences',
        'Feedback and Surveys',
        'Regulatory and Compliance Data'
      ]
    >;
    location: Attribute.Enumeration<['profile', 'dialogue']>;
    ownership: Attribute.Enumeration<['system', 'manager']>;
    formula: Attribute.Component<'core.dynamic-value-calc', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'core.dynamic-value-calc': CoreDynamicValueCalc;
      'profiles.generate-profile': ProfilesGenerateProfile;
    }
  }
}
