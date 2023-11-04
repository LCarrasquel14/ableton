import { generateUUID } from "~/utils/generateUUID";
import Image from "./image";

export const FondoTypes = {
  First: "first",
  Second: "second",
};

const SectionImages = ({ album, fondo }) => {
  return (
    <section className="section-container">
      <div className={fondo}>
        {album.map((image) => {
          return <Image key={generateUUID()} image={image} />;
        })}
      </div>
    </section>
  );
};

export default SectionImages;
