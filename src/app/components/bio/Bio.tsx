import Image from "next/image";
import bioPhoto from "../../../../public/resources/img/bwportrait3_edit_cr.jpg";

import { EB_Garamond, Murecho } from "next/font/google";
import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

type propType = {
  language: string;
};

const garamond = EB_Garamond({ subsets: ["latin"] });
const murecho = Murecho({ subsets: ["latin"] });

export default function Bio({ language }: propType) {
  return (
    <div className="w-full relative overflow-y-scroll">
      <div className="sticky top-0 -z-10">
        <Image src={bioPhoto} alt="bio" priority />
        <div className="absolute top-6 right-2">
          <div
            className={`"absolute w-full text-end px-4 text-4xl transition duration-700 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            Biography
          </div>
          <div
            className={`absolute top-2 w-full text-end px-4 text-2xl transition duration-700  ${
              language == "english" ? "opacity-0" : "opacity-100"
            } ${hiragino.className}`}
          >
            <div>プロフィール</div>
            <div className="text-base">瀬山 智博 / 指揮者</div>
          </div>
        </div>
      </div>

      <div className={`absolute top-0 w-1/2 h-full pb-4`}>
        <div
          className={`flex flex-col gap-8 p-4 pt-8 transition duration-700 ${
            garamond.className
          } ${
            language == "english"
              ? "opacity-100 pb-32"
              : "opacity-0 pb-8 hidden"
          }`}
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
            Music Festival in Austria, as well as the Royal Opera in Turin,
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
            Osaka University of Music, as well as in the Department of
            Conducting of the Vienna State University of Music. While enroled at
            the university of Vienna, he was a member of the Wiener Singverein
            and also worked as a choir repetitor.
          </div>
          <div>
            Tomohiro Seyama has studied conducting with Leopold Hager, Urosh
            Lajovich, Seiji Ozawa and Fabio Luigi. He has diploma of orchestra
            conducting from the Accademia Musicale Chigiana in Siena. He was a
            Semi-finalist of the Chicago Georg Solti Conducting Competition and
            finalist of the Besançon International Conductor Competition.
          </div>
        </div>
        <div
          className={`flex flex-col absolute top-0 gap-8 p-4 pt-8 pb-10 transition duration-700 text-sm ${
            hiragino.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          <div>
            ３歳よりメキシコシティで音楽教育を受け始める。大阪音楽大学ピアノ科およびウィーン国立音楽大学指揮科卒業。2008年にドイツのアーヘン市立歌劇場コレペティトールとして活動を始め、ウィーンのシェーンブルン宮殿歌劇場でモーツァルト「ドン・ジョヴァンニ」を指揮してデビュー。
          </div>
          <div>
            その後オーストリアのブレゲンツ音楽祭、グラフェネッグ音楽祭やイタリアのトリノ王立歌劇場において音楽スタッフを務め、2016年からはドイツのマグデブルグ歌劇場のカペルマイスターとして活動。同劇場においてオッフェンバッハ「パリの生活」、ニコライ「ウィンザーの陽気な女房たち」、ロルツィング「密猟者」、ビゼー「カルメン」など多数の公演を指揮した。ドイツではその他にデッサウ・アンハルト州立歌劇場、バード・ラオホシュテット歌劇場、スイスではヴィンタートゥール歌劇場において指揮者を務めた。
          </div>
          <div>
            ウィーン国立音楽大学在籍中にウィーン楽友協会合唱団団員として研鑽を積み、同合唱団のコレペティトールとしても活動。その後、ウィーン少年合唱団の指揮者やウィーン国立歌劇場合唱団のコレペティトールおよび指揮者を務めるなど、現在に至るまで多岐に渡り国際的な活動を続けている。
          </div>
          <div>
            これまでにヨーロッパではBBC交響楽団、ウィーン室内管弦楽団、マグデブルグ・フィルハーモニー管弦楽団、デッサウ・アンハルト州立管弦楽団、ムジークコレギウム・ヴィンタートゥール、ソフィア祝祭管弦楽団などを指揮。国内では東京シティ・フィルハーモニック管弦楽団、京都市交響楽団、日本センチュリー交響楽団、大阪交響楽団、関西フィルハーモニー管弦楽団、オペラハウス管弦楽団、兵庫県立芸術文化センター管弦楽団、広島交響楽団、九州交響楽団など多数のオーケストラと共演している。
          </div>
          <div>
            指揮を湯浅勇治、レオポルト・ハーガー、ウロシュ・ラィオヴィチ、ファビオ・ルイジ、小澤征爾各氏に師事。シエナ・キジアーナ音楽院においてオーケストラ指揮ディプロマ所得。シカゴ・ショルティコンクールセミファイナリスト、ブザンソン国際指揮者コンクールファイナリスト。
          </div>
          <div>
            大阪音楽大学声楽科オペラ部門非常勤講師、名古屋音楽大学声楽科オペラ部門客員講師。2021年よりノマドオペラ音楽監督を務めている。
          </div>
        </div>
      </div>
    </div>
  );
}
