import Image from "next/image";
import bioPhoto from "../../../../public/resources/img/bwportrait3_edit.jpg";

import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"] });

export default function Bio() {
  return (
    <div className="w-full relative overflow-y-scroll">
      <div className="sticky top-0 -z-10">
        <Image src={bioPhoto} alt="bio" />
        <div className="absolute w-full top-6 text-end px-4 text-4xl">
          Biography
        </div>
      </div>

      <div className="absolute top-0 w-1/2">
        <div
          className={`flex flex-col gap-8 ${garamond.className} p-4 pt-8 pb-32`}
        >
          <div>
            Tomohiro Seyama / Conductor has conducted in opera houses such as
            the Magdeburg Opera House in Germany, the Dessau Anhalt State Opera
            House, and the Winterthur Opera House in Switzerland, and continues
            to work internationaly in both the fields of opera and symphony
            orchestra.
          </div>
          <div>
            In 2008, he worked as a repetitor at the Aachen City Opera House in
            Germany. In 2009, he made his debut conducting Mozart's "Don
            Giovanni" at the Schönbrunn Palace Opera in Vienna. He has been an
            assistant conductor at the Bregenz Music Festival and the Graffenegg
            Music Festival in Austria, as wel as the Royal Opera in Turin,
            Italy, and 2016 was working as a Kapelmeister (exclusive conductor)
            at the Magdeburg Opera House in Germany.
          </div>
          <div>
            Tomohiro has conducted a number of performances such as Bizet ́s
            "Carmen", Nikolai's "Die lustigen Weiber von Windsor", and
            Lortzing's "Der Wildschütz" among others. From 2018, he has been
            involved in a wide range of activities, such as an assistant to the
            Tonkünstler Orchestra, a mentor of the Vienna Boys'Choir, and a
            conductor of the Vienna State Opera Choir.
          </div>
          <div>
            Since 2019, he has been the principal conductor of "Opera Novela" in
            Japan, and has conducted "Tosca", "La Traviata", "Cavaleria
            Rusticana", "Suor Angelica" and "La Bohème”. Since 2021, he has been
            working as music director of Nomad Opera, and has conducted "La
            Bohème", "Carmen" and "La "La Bohème” with them.
          </div>
          <div>
            In Europe he has worked with the BBC Symphony Orchestra, Vienna
            Chamber Orchestra, Sofia Festival Orchestra, German Magdeburg
            Philharmonic Orchestra, Dessau Anhalt State Orchestra, Music
            Colegium Winterthur, In Japan, he has conducted many orchestras ;
            Tokyo City Philharmonic Orchestra, Kyoto City Symphony Orchestra,
            Kansai Philharmonic Orchestra, Osaka Symphony Orchestra, Japan
            Century Symphony Orchestra, Hyogo Performing Arts Center Orchestra,
            Hiroshima Symphony Orchestra, and Kyushu Symphony Orchestra.
          </div>
          <div>
            Tomohiro started his musical education in Mexico at the age of
            three, and completed his studies in the Piano Department of the
            Osaka University of Music, as wel as in the Department of Conducting
            of the Vienna State University of Music. While enroled at the
            university of Vienna, he was a member of the Wiener Singverein and
            also worked as a choir repetitor.
          </div>
          <div>
            Tomohiro Seyama has studied conducting with Leopold Hager, Urosh
            Lajovich, Seiji Ozawa and Fabio Luigi. He has diploma of orchestra
            conducting from the Accademia Musicale Chigiana in Siena. He was a
            Semi-finalist of the Chicago Georg Solti Conducting Competition and
            finalist of the Besançon International Conductor Competition.
          </div>
        </div>
      </div>
    </div>
  );
}
