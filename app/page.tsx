import Image from "next/image";
import FeatureBlock from "@/components/FeatureBlock";

export default function Home() {
  return (
    <>
      <section className="dark-section bg-[url(/photography.jpg)] bg-cover bg-no-repeat bg-fixed bg-center w-full">
        <div className="min-h-200 bg-dark/80 py-40 px-20 flex flex-col gap-12">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            saepe quia, beatae voluptate culpa fuga.
          </p>
          <div className="flex gap-8">
            <a href="" className="button bg-primary text-dark">
              More info
            </a>
            <a href="" className="button">
              More info
            </a>
          </div>
          {/* <div>
            <Image width={800} height={800} src={"/test-bg-1.jpg"} alt="" />
          </div> */}
        </div>
      </section>
      <section className="light-section bg-light2 section">
        <h5 className="text-red-600">Who Are We?</h5>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.,
          rem.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          explicabo sapiente exercitationem in vero repudiandae corporis eius
          dolorum quas eaque maiores aliquid, ab ea esse. Voluptatibus magnam
          consequuntur sapiente minima!
        </p>
      </section>
      <section className="light-section bg-light section">
        <h5 className="text-blue-700">What we can do for you</h5>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <div className="mt-24 grid gap-32">
          <FeatureBlock
            number="1"
            title="Photography and videography"
            src="/camera.jpg"
            reverse={false}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            repudiandae tempore tenetur
          </FeatureBlock>
          <FeatureBlock
            number="1"
            title="Podcast and Talk show assistance"
            src="/microphone.jpg"
            reverse={false}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            repudiandae tempore tenetur
          </FeatureBlock>
          <FeatureBlock
            number="1"
            title="Web design and development"
            src="/webdesign.jpg"
            reverse={false}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            repudiandae tempore tenetur
          </FeatureBlock>
        </div>
      </section>
      <section className="dark-section bg-green-600 section">
        <h5 className="text-light/90">Heres what others think of us</h5>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.,
          rem.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloribus illum sed
          possimus, temporibus beatae esse nemo ullam dicta deleniti
          exercitationem ipsam? Exercitationem ipsam eius magni corporis, iusto
          ex quisquam maiores adipisci qui accusantium est quod, cupiditate
          nobis nam debitis beatae.
        </p>
        <div className="flex flex-col gap-12">
          <div className="card"></div>
        </div>
      </section>
      <section className="dark-section bg-amber-500 section">
        <h5 className="text-light/90">Get in touch with us</h5>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.,
          rem.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          explicabo sapiente exercitationem in vero repudiandae corporis eius
          dolorum quas eaque maiores aliquid, ab ea esse. Voluptatibus magnam
          consequuntur sapiente minima!
        </p>
      </section>
    </>
  );
}
