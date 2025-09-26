import PassageImg from "/PassageImages/PassageOne.jpg";
import PassageImgTwo from "/PassageImages/PassageOneTwo.jpg";

const PassageOne = () => {
  return (
    <div className="py-6 px-20 rounded-sm bg-gray-50 bg-opacity-50 bg-blur-50">
      <div className="w-full auto">
        <h1 className="w-full text-8xl font-bold font-oswald text-slate-700">
          Headlines!! Headlines! Get your Headlines!!
        </h1>
        <div className=" w-1/2 h-1 my-4 bg-slate-700"></div>
      </div>
      <div className="relative w-full h-auto p-8">
        <p className="text-serif lg:text-2xl  text-lg text-slate-800">
          <img
            src={PassageImgTwo}
            alt="An image of a person's legs while running."
            className="float-right h-auto w-[40vh] p-2 rounded-md"
          />
          <span className="text-md text-slate-700 font-serif my-2">
            Lorem Ipsum <br />
            <span className="text-sm">08/05/2025</span>
          </span>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          cupiditate adipisci repellendus voluptatibus quos, corrupti beatae ad
          placeat facilis culpa sint nemo fuga voluptas doloremque et sed
          laborum? Beatae obcaecati odit cupiditate quam vel rem, officia
          quibusdam aspernatur fuga numquam voluptatibus optio deleniti deserunt
          nesciunt quod? <br />
          <br />
          Amet consectetur adipisicing elit. Veniam voluptates dicta, quidem
          delectus quasi hic pariatur eveniet praesentium ipsa dolore quae
          veritatis neque animi qui doloribus eius in quo nihil nam similique
          voluptatem, soluta reprehenderit? Eius ab ipsum animi cupiditate
          dolore fugiat nesciunt similique perferendis neque soluta labore
          consectetur expedita quo nemo minima optio minus corporis officia
          molestiae, dolor molestias rerum, eaque rem cum! Porro inventore,
          culpa dolorem enim eaque eum. <br />
          <img
            src={PassageImg}
            alt="An image of a person's legs while running."
            className="float-left h-[40vh] w-auto p-2 px-4 rounded-sm"
          />
          <br />
          Harum, iste? Harum, deserunt. Delectus impedit voluptatum accusantium
          atque vel eaque, modi exercitationem vero aspernatur porro beatae
          magni similique ad nesciunt. Nostrum numquam aut esse totam doloremque
          dolores labore.
          <br />
          <br /> Quia ipsam minus perferendis asperiores possimus ipsum ab
          reprehenderit dolorem quibusdam consequatur? Adipisci architecto quasi
          rem repudiandae modi, id accusamus repellendus tenetur laudantium,
          velit, vel molestiae omnis quidem eum repellat! Necessitatibus rerum
          earum excepturi nemo, maxime atque nihil dolore quas quidem odio eaque
          ad ducimus dolorem corrupti itaque explicabo beatae quo accusamus?
          Quae, et a beatae praesentium ratione labore officia ullam eligendi,
          sapiente autem sequi culpa obcaecati dignissimos velit sunt minus
          voluptatibus quis necessitatibus accusamus nostrum deleniti fugiat
          blanditiis!
          <br />
          <br />
          Eos doloremque libero, inventore enim ipsum corrupti commodi quidem
          nostrum nihil quasi vero officia rem at veritatis suscipit culpa dolor
          laboriosam distinctio, cupiditate, delectus illum aperiam eum fugiat.
          Sed, fugiat molestias ipsa error magni a aliquid, culpa repellendus
          totam asperiores nam quidem ratione minus alias nesciunt et iusto
          quas, voluptates officia. Debitis dolore sunt sequi libero cupiditate
          quisquam dicta facilis veritatis, quo mollitia quae aut!
        </p>
      </div>
    </div>
  );
};

export default PassageOne;
