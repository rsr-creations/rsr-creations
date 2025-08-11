import Image from "next/image";
import FeatureBlock from "@/components/FeatureBlock";

export default function Home() {
  return (
    <>
      <section className="dark-section bg-[url(/photography.jpg)] bg-cover bg-no-repeat bg-fixed bg-center w-full">
        <div className="min-h-200 bg-dark/80 py-40 sm:py-84 px-20 flex flex-col gap-12">
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
        <div className="flex gap-4">
          <div className="flex flex-col justify-center gap-4">
            <Image
              src={"/gallery/gallery4.jpg"}
              width={5000}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery3.jpg"}
              width={5000}
              height={500}
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={"/gallery/gallery1.jpg"}
              width={5000}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery2.jpg"}
              width={5000}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery5.jpg"}
              width={5000}
              height={500}
              alt="image"
            />
          </div>
        </div>
      </section>
      <section className="light-section bg-light section">
        <h5 className="text-amber-400">What we can do for you</h5>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <div className="grid">
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
            title="Logo and Graphic design"
            src="/graphicdesign.jpg"
            reverse={false}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum
            repudiandae tempore tenetur
          </FeatureBlock>
          <FeatureBlock
            number="1"
            title="Podcast and Talk show production"
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
          <div className="flex flex-row gap-6">
            <a href="" className="button">
              Get in touch
            </a>
            <a href="" className="button">
              Lorem ipsum
            </a>
          </div>
        </div>
      </section>
      <section className="light-section bg-less-light section">
        <h5 className="text-blue-500">Our portfolio:</h5>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <div className="flex gap-4 my-12">
          <div className="flex flex-col justify-center gap-4">
            <Image
              src={"/gallery/gallery4.jpg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery3.jpg"}
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={"/gallery/gallery1.jpg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery2.jpg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery5.jpg"}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="card"></div>
        </div>
      </section>
      <section className="dark-section bg-dark min-h-100 section">
        <h5 className="text-green-500">Get in touch with us</h5>
        <div className="">
          <p className="">Number: +880 1936 609 937</p>{" "}
          <p>Email: rsrcreations@gmail.com</p>
        </div>
      </section>
    </>
  );
}
