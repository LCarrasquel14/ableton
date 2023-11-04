import NavBar from "~/components/navBar";
import SectionHero from "~/components/sectionHero";
import TextSection from "~/components/textSection";
import SectionImages, { FondoTypes } from "~/components/sectionImages";
import SectionVideo from "~/components/sectionVideo";
import {
  firtSectionTextContent,
  MainVideoUrl,
  secondSectionTextContent,
  NavbarLinks,
  thirdSectionTextContent,
  fourthSectionTextContent,
} from "./constants";

const Home = ({
  ImageFirtSectionLeft,
  ImageFirtSectionRigth,
  ImageSecondSectionRigth,
  ImageSecondSectionTop,
  ImageSecondSectionbotton,
}) => {
  console.log(ImageFirtSectionLeft);
  const { title, paragraph } = firtSectionTextContent;
  const { title2, paragraph2 } = secondSectionTextContent;
  const { title3, paragraph3 } = thirdSectionTextContent;
  const { title4, paragraph4 } = fourthSectionTextContent;
  return (
    <>
      <NavBar addresses={NavbarLinks} />
      <SectionHero title={"ableton"} position={"-hero"} />
      <TextSection title={title} paragraph={paragraph} />
      <SectionImages
        album={[ImageFirtSectionLeft, ImageFirtSectionRigth]}
        fondo={FondoTypes.First}
      />
      <TextSection title={title2} paragraph={paragraph2} />
      <SectionVideo url={MainVideoUrl}>
        Why Ableton - Juanpe Bolivar
      </SectionVideo>
      <TextSection title={title3} paragraph={paragraph3} />
      <SectionImages
        album={[
          ImageSecondSectionTop,
          ImageSecondSectionbotton,
          ImageSecondSectionRigth,
        ]}
        fondo={FondoTypes.Second}
      />
      <TextSection title={title4} paragraph={paragraph4} />
      <SectionHero title={""} position={"-img"} />
      <TextSection title={title4} paragraph={paragraph4} />
    </>
  );
};

export default Home;
