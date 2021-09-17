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
        description={"Once a righteous and wise king, Solomon encountered that which threatens us all — the temptations of a fruit forbidden. Solomon flirted with the devil. He danced along the shores whose waves perpetually threatened the washing of his vestige. A dance not taken lightly, or perhaps not taken at all… \n\n His eyes washed with white, burning light. His mind submerged by a cacophony of ceaseless endeavor — Solomon lost his soul to the digital ether. Every shred of his humanity, engulfed in bits & bytes as pointy and rigid as pins & needles.\n\nOh, Solomon… soulless. Solomon, a vessel emptied by the ceaseless beating drum of inexorable modernity. Will you ever head homeward? Will you ever return to the flesh which you have so carelessly set aflame?"}
        image="/assets/images/story_left.png"
        imageAlt="First feature alt text"
        reverse
        color="white"
        imageMT="pt-0"
        MT="mt-24 lg:mt-20"
      />
    </Section>
  </Background>
);

export { Story };
