import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (  <Background
    color="bg-gray-100"
    className="bg-hero-pattern h-screen bg-cover bg-no-repeat text-shadow-link"
    id="hero"
  >
    <Section yPadding="pt-48 pb-32">
      <div className="w-full text-center">
        <img
          src="/assets/images/logo_Font.png"
          alt="hero_image"
          width="50%"
          className="m-auto"
        />
      </div>
      <HeroOneButton
        title={<></>}
        description="Sell your Soul. One NFT At A Time"
        button={
          <Link href="http://localhost:3000">
            <a className="tracking-widest text-white">
              <Button texture xl tb_padding>
                Join The Discord
              </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
