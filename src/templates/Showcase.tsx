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
        description={"Welcome to Soulless Solomon. A unique NFT experience from a collective of writers, game designers, filmmakers, and illustrators from a variety of disciplines who share a passion for unique, meaningful art and blockchain technology. \n\nSoulless Solomon is our foray into self-reflexive storytelling through digital art. A project that reflects our collective relationship with technology and the digital world through the character of Solomon - a once wise king, who lost his identity to the digital ether.\n\n7,777 unique collectible characters, one mission. To help Solomon find his soul. Hopefully you can avoid losing yours in the process…"}
        image="/assets/images/project1.gif"
        imageAlt="Second feature alt text"
        color="white"
        rotate
        shadow="shadow-image"
      />
    </Section>
  </Background>
);

export { Showcase };
