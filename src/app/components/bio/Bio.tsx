import Image from "next/image";
import bioPhoto from "../../../../public/resources/img/forest2.jpg";

export default function Bio() {
  return (
    <div>
      <Image src={bioPhoto} alt="bio" />
    </div>
  );
}
