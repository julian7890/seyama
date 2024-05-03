import Image from "next/image";
import facebookIcon from "../../../../public/resources/img/Facebook_Logo_Primary.png";
import instagramIcon from "../../../../public/resources/img/Instagram_Glyph_Gradient.png";
// import linkedinIcon from "../../../../public/resources/img/linkedinlogo_icon.png";
// import youtubeIcon from "../../../../public/resources/img/youtubelogo_icon.svg";

export default function Social() {
  return (
    <div className="flex justify-end gap-8 pt-8 pr-8">
      <a
        href={"https://www.facebook.com/profile.php?id=100018508096709"}
        target="_blank"
      >
        <Image
          src={facebookIcon}
          width={30}
          height={30}
          alt="Follow me on Facebook"
          className="grayscale hover:grayscale-0 translate-x-0 duration-200"
        />
      </a>
      <a href={"https://www.instagram.com/tomohiroseyama/"} target="_blank">
        <Image
          src={instagramIcon}
          width={30}
          height={30}
          alt="Follow me on Instagram"
          className="grayscale hover:grayscale-0 translate-x-0 duration-200"
        />
      </a>
      {/* <Image
        src={linkedinIcon}
        width={30}
        height={30}
        alt="Follow me on LinkedIn"
        className="invert"
      /> */}
      {/* <Image
        src={youtubeIcon}
        width={30}
        height={30}
        alt="Follow me on Youtube"
        className="invert"
      /> */}
    </div>
  );
}
