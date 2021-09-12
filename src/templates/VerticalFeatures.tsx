import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Brief our solomons"
    description="Souless Solomon Description: We are selling Solomon"
  >
    <VerticalFeatureRow
      title="Solomon1"
      description="This solomon is great."
      image="/assets/images/cartoon1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Solomon2"
      description="This solomon is awesome."
      image="/assets/images/cartoon2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Solomon3"
      description="This solomon is fantastic."
      image="/assets/images/cartoon3.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
