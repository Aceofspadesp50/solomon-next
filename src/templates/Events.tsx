import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const Events = () => (
  <Background
    color="bg-white-100"
    className="min-h-screen bg-event-image bg-cover"
    id="event"
  >
    <Section yPadding="py-3">
      <VerticalFeatureRow
        title={"Solomon's \"Soul Search\" Event"}
        description={"As a collective of seasoned artists watching the NFT space burgeon from the sidelines - we knew we wanted to get involved, but we wanted to ensure we were doing something new, different, and unique. We needed to do something that would capture the attention of both traditional, and new age art markets. That's why we decided it’s time to innovate, by merging the physical and digital art worlds with \"Solomon's Soul Search\" event. \n\nSolomon's Soul won’t be found online. It will be found in your neighbourhoods - through in-person, simultaneous, street art drops in major cities around the globe. With each street art event, a unique QR code - and a chance to help Solomon find his soul in your NFT. \n\nJoin our Discord and reach out directly for further updates. Don't miss this first-of-its-kind NFT experience."}
        image="/assets/images/event_right.png"
        imageAlt="Second feature alt text"
        color="gray-300"
        rotate
      />
    </Section>
  </Background>
);

export { Events };
