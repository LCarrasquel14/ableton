import { LinksFunction } from "@remix-run/node";
import Home from "~/components/home/home";
import styles from "~/styles/index.css";
import ImageFirtSectionLeft from "~/asset/images/firt-section-image-left.jpg";
import ImageFirtSectionRigth from "~/asset/images/firt-section-image-rigth.jpg";
import ImageSecondSectionRigth from "~/asset/images/second-section-image-rigth.jpg";
import ImageSecondSectionTop from "~/asset/images/second-section-image-top.jpg";
import ImageSecondSectionbotton from "~/asset/images/second-section-image-bottom.jpg";
export const meta = () => {
  return [{ title: "What’s new in Live 11 | Ableton" }];
};

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <Home
      ImageFirtSectionLeft={ImageFirtSectionLeft}
      ImageFirtSectionRigth={ImageFirtSectionRigth}
      ImageSecondSectionRigth={ImageSecondSectionRigth}
      ImageSecondSectionTop={ImageSecondSectionTop}
      ImageSecondSectionbotton={ImageSecondSectionbotton}
    />
  );
}
