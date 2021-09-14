import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const Showcase = () => (
  <Background
    color="bg-white-100"
    className="min-h-screen bg-project-image bg-cover"
    id="project"
  >
    <Section yPadding="py-3">
      <VerticalFeatureRow
        title="An NFT Collection On The Solana Blockchain"
        description="This solomon is awesome."
        image="/assets/images/project1.gif"
        imageAlt="Second feature alt text"
        color="white"
        rotate
      />
    </Section>
  </Background>
);

export { Showcase };
