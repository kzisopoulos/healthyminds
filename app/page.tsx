import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <h1 className="text-center head_text green_gradient p-4">
        HealthyMinds.
      </h1>
      <p className="text-center max-w-xl mx-auto p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        exercitationem magni! Repudiandae laboriosam nihil reprehenderit amet
        modi eos est soluta nulla quis, ut libero nesciunt natus, dicta dolorum
        quibusdam optio laborum cumque officiis, aliquid molestiae quod. Impedit
        sint eius, deleniti natus in sed cupiditate dolores ullam. Eveniet
        doloribus ut earum.
      </p>
      <div className="text-center p-4">
        <Link
          href="/about"
          className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 rounded-md"
        >
          Γνωριστε μας
        </Link>
      </div>
      <Image
        src={"/hero.jpg"}
        alt="Picture one hand trying to help another"
        width={400}
        height={300}
        className=" mx-auto rotate-90 aspect-square rounded-full shadow-xl"
      />
      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-8 dark:bg-gray-700"></hr>
      <div className="flex flex-col gap-4 justify-center lg:flex-row lg:gap-10">
        <div className="glassmorphism w-full">
          <h3 className="green_gradient md:text-xl font-semibold">
            Μεθοδολογία
          </h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            tempora fugiat velit reiciendis, autem nemo minima voluptatibus,
            amet dignissimos est quidem ullam doloremque cupiditate sequi nisi
            repellat dolores similique. Explicabo!
          </p>
        </div>
        <div className="glassmorphism w-full">
          <h3 className="green_gradient md:text-xl font-semibold">
            Πλεονεκτήματα
          </h3>
          <ul className="py-2">
            <li className="flex items-center">
              <FaCaretRight />
              Lorem, ipsum.
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Lorem, ipsum.
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Lorem, ipsum.
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Lorem, ipsum.
            </li>
          </ul>
          <Link
            href="/services"
            className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 text-md rounded-md"
          >
            Υπηρεσιες
          </Link>
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-8 dark:bg-gray-700"></hr>
    </section>
  );
}
