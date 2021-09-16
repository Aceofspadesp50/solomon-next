import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Roadmaps = () => {
  const steps = [
    {title: "1", detail: "Releasing Soulless Solomon"},
    {title: "2", detail: "Listing on secondary markets"},
    {title: "3", detail: "Proprietary Rarity Tool, Viewer, and Dashboard to interact with Solomon NFT"},
    {title: "4", detail: "Unique Solomon Merchandise"},
    {title: "5", detail: "Soulless Solomon NFT Community Partnerships and Drops"},
    {title: "6", detail: "Soulless Solomon \"Soul Search\" Event"},
  ]
  return ( <Background
      color="bg-gray-100"
      className="min-h-screen bg-roadmap-image bg-cover lg:bg-full"
      id="roadmap"
    >
      <Section title="Roadmaps" description="" yPadding="py-32">
        <div className="text-2xl inline-block relative">
          {steps.map(step => 
            <div className="text-center px-6 w-full lg:w-1/3 mt-4 lg:mt-8 float-left" key={step.title}>
              <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="w-1/3 bg-transparent h-16 lg:h-20 flex items-center justify-center icon-step">
                  {step.title}
                </div>
                <div className="w-2/3 bg-gray-200 h-16 lg:h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                  <p className="text-sm text-gray-600">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </Background>
  );
}

export { Roadmaps };
