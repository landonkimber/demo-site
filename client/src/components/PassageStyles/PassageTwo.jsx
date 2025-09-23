import PassageImg from "/PassageImages/PassageOne.jpg";
import PassageImgTwo from "/PassageImages/PassageOneTwo.jpg";

import ProfileTwo from "/svgImages/ProfileTwo.svg";

import dayjs from "dayjs";

const PassageTwo = () => {
  const currentDate = dayjs().format("MM/DD/YY");
  return (
    <div className="px-20 rounded-sm bg-slate-100 bg-opacity-80 bg-blur-50">
      <div id="hero" className="relative w-full h-auto">
        <img
          src={PassageImgTwo}
          alt="Image of a man running."
          className="w-full h-auto"
        />
        <h1 className="absolute w-full top-[5%] text-rose-800 font-oswald text-[180px] font-bold text-center">
          SUMMER SALE
        </h1>
        <h1 className="absolute w-full top-[4%] text-rose-300 font-oswald text-[180px] font-bold text-center">
          SUMMER SALE
        </h1>
      </div>
      <div id="content" className="relative w-full h-auto">
        <div id="content-header" className="w-full h-[25vh]">
          <h1 className="w-3/4 pt-16 ml-[5%] text-7xl font-bold font-ranchers text-orange-400">
            Our biggest sale ever!!
          </h1>
          <h2 className="w-1/2 pt-8 ml-[20%] text-xl italic text-cyan-600">
            and that's not even the best part...
          </h2>
          <div className="absolute w-[20%] h-auto aspect-square top-8 right-16">
            <img
              src={ProfileTwo}
              alt="Image of the potential author"
              className="w-full h-full bg-amber-400 rounded-full"
            />
            <p className="mt-4 font-bold whitespace-nowrap text-teal-800 text-lg text-center text-end">
              Jane Doe
              <span className="px-8 font-serif italic">{currentDate}</span>
            </p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            necessitatibus. Placeat recusandae, dignissimos expedita dolorem
            voluptatum adipisci deleniti. Ut explicabo veritatis corporis, vero
            animi sapiente nisi exercitationem quis facilis expedita quidem illo
            aspernatur ullam aliquid nesciunt soluta natus ipsam totam ex
            fugiat. Sed maxime est voluptatum iure asperiores nisi veritatis,
            sunt cumque a officia et molestias quibusdam rem officiis
            necessitatibus, hic eius quo voluptas exercitationem unde ipsum quos
            aspernatur autem perspiciatis. Aut nam mollitia accusantium,
            blanditiis maxime amet exercitationem illum eius nostrum repellat,
            ex vel impedit fugiat sunt molestiae. Temporibus eius molestias
            similique nam, debitis dignissimos tempore nihil ipsa, doloribus,
            assumenda sapiente quis itaque exercitationem possimus rerum
            voluptates vitae aspernatur blanditiis! Optio, ab iure quod impedit
            facilis aperiam ut magnam, delectus neque necessitatibus asperiores
            harum quisquam dolor dolorum! Sequi, ab voluptates provident
            voluptatum eveniet, doloribus fugit ut consectetur sint vitae, ipsum
            beatae recusandae? Explicabo non dolores voluptates perferendis
            voluptas minus quis architecto, eligendi eius nam officia rem maxime
            adipisci ad, totam atque, quia cum consequuntur placeat obcaecati
            itaque. Saepe sequi eaque accusantium quisquam nulla. Sapiente
            excepturi architecto veniam cum ipsa, suscipit magnam modi error
            amet aliquid enim nisi nihil eligendi! Laboriosam earum et
            dignissimos? Reprehenderit repudiandae fugiat tempore maiores
            quaerat quae quas quod debitis, itaque ratione quis minima, esse
            dolor quasi sapiente eligendi quidem necessitatibus rerum libero
            commodi nobis nulla ullam ducimus! Deserunt architecto voluptatum
            corporis, ipsa adipisci ut delectus. Ut optio unde consequuntur
            quidem. Cupiditate ex facilis doloremque nam totam maiores quasi
            tempora iste repellat consequatur facere libero aperiam et, quod
            quas officiis odio assumenda. Consequatur excepturi fugit aut
            sapiente cumque, beatae iste aliquam iusto, doloremque aliquid,
            vitae quaerat error quia dolorem fuga odio. Incidunt, nemo facere.
            Aspernatur dolores, blanditiis magnam sequi unde a maiores, illo
            animi praesentium libero iste nisi et adipisci recusandae. Dolores
            iusto cumque illo consequuntur quod deleniti quasi minima fugiat
            exercitationem, numquam magni commodi assumenda expedita quis esse
            aut possimus voluptatem repellendus eaque, doloremque modi. Nam
            architecto sunt similique voluptates illum eius ducimus corporis
            rerum unde culpa! Nemo architecto at beatae facere, aliquam iste
            quae doloribus possimus amet tempora aspernatur voluptates in nobis
            nam porro similique consequuntur, repudiandae illo nihil quisquam
            provident aliquid! Recusandae ipsa deleniti harum non amet incidunt,
            quam nesciunt iusto doloremque in deserunt sequi voluptatem quia
            illo ipsum? Natus quam saepe, qui nostrum unde in excepturi quas
            accusantium. Dolores sequi doloribus et rerum temporibus hic
            accusamus pariatur dignissimos quo ipsum. Qui itaque laborum nostrum
            sequi in cum aliquid quae dolor, sapiente neque animi odit
            reiciendis eveniet consequatur nemo voluptas labore blanditiis autem
            culpa ex, illo expedita, inventore doloribus accusamus. Perferendis
            voluptatibus blanditiis rem laborum. Porro consectetur voluptates
            itaque quibusdam? Optio hic soluta cupiditate iste pariatur rerum
            unde tenetur? Corrupti, dolorem exercitationem! Eveniet, quibusdam
            architecto repudiandae quod illo, sint voluptatum ipsum veritatis
            iusto ducimus iure, facilis doloremque? Aspernatur saepe ipsam iste
            possimus ut laudantium error, voluptatum officia maiores quasi,
            reiciendis dolorem porro. Cumque velit odit veritatis facilis unde
            asperiores doloremque voluptatem nisi obcaecati est, laboriosam
            molestiae tenetur exercitationem quidem. Dolores autem amet dolorum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassageTwo;
