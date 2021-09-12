import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100" className="bg-hero-pattern h-screen bg-cover bg-no-repeat">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Button>Connect</Button>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Purchase the next generation NFT\n'}
            <span className="text-primary-500">Souless Solomon</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="http://localhost:3000">
            <a>
              <Button xl>Click to connect your wallet</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
