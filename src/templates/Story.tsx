import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const Story = () => (
  <Background
    color="bg-gray-100"
    className="min-h-screen bg-story-image bg-cover"
    id="story"
  >
    <Section yPadding="py-3">
      <VerticalFeatureRow
        title="Solomons Story"
        description="This solomon is great."
        image="/assets/images/story_left.png"
        imageAlt="First feature alt text"
        reverse
      />
    </Section>
  </Background>
);

export { Story };
