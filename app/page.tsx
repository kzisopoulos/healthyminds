import Image from "next/image";
import Link from "next/link";

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
      <article className="">
        <Image
          src={"/hero.jpg"}
          alt="Picture one hand trying to help another"
          width={400}
          height={300}
          className=" mx-auto rotate-90 aspect-square rounded-full shadow-xl"
        />
      </article>
    </section>
  );
}
