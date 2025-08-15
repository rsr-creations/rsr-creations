import Image from "next/image";
import FeatureBlock from "@/components/FeatureBlock";

export default function Home() {
  return (
    <>
      <section className="dark-section bg-[url(/photography.jpg)] bg-cover bg-no-repeat bg-fixed bg-center w-full">
        <div className="min-h-200 bg-dark/80 py-40 sm:py-84 px-20 flex flex-col gap-12">
          <h1>You hire and we create, catering to your needs.</h1>
          <p>
            We are a small production company based in Niketon, Dhaka. We
            create, film and produce content with your own personal touch as a
            top priority.
          </p>
          <div className="flex gap-8">
            <a href="" className="button bg-primary text-dark">
              More info
            </a>
            <a href="" className="button">
              Contact us
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
          RSR Creations is an up-and-coming, professional content production
          company located in Dhaka.
        </h2>
        <p className="mb-4">
          As a newly established production based company, we create content
          based on your direction and preferences. From photography to
          videography, to web design to logo and graphic design and of course; a
          podcast and talk show production right here in Dhaka.
        </p>
      </section>
      <section className="light-section bg-light section">
        <h5 className="text-amber-400">What we can do for you</h5>
        <h2>
          With your direction and personal touch in mind; We manage and direct
          the content you desire with your vision as a top priority.
        </h2>
        <div className="grid">
          <FeatureBlock
            number="1"
            title="Photography and videography"
            src="/camera.jpg"
            reverse={false}
          >
            From photography and photo-editing to videography and video-editing.
            With cutting-edge equipment, we film and edit your content directly
            catering to your needs.
          </FeatureBlock>
          <FeatureBlock
            number="1"
            title="Logo and Graphic design"
            src="/graphicdesign.jpg"
            reverse={false}
          >
            You can order your own graphical design with colours and taste in
            mind along with alterations of your own choosing. We keep colour
            theory in mind with our graphical work.
          </FeatureBlock>
          <FeatureBlock
            number="1"
            title="Podcast and Talk show production"
            src="/microphone.jpg"
            reverse={false}
          >
            With professional grade equipment and a visually appealing studio,
            we host podcasts and talk shows with live feedback from our own
            studio in Niketon.
          </FeatureBlock>
          <FeatureBlock
            number="1"
            title="Web design and development"
            src="/webdesign.jpg"
            reverse={false}
          >
            The website you are currently navigating is a glimpse at our
            capabilities. From the formatting and layout to the styling and
            design we used to develop this page.
          </FeatureBlock>
          <div className="flex flex-row gap-6">
            <a href="" className="button">
              Get in touch
            </a>
            <a href="" className="button">
              View our portfolio
            </a>
          </div>
        </div>
      </section>
      <section className="light-section bg-less-light section">
        <h5 className="text-blue-500">Our portfolio:</h5>
        <h2>Still not convinced? Check out our work.</h2>
        <div className="flex flex-col gap-4 my-12">
          <div className="flex flex-col justify-center gap-4">
            <Image
              src={"/gallery/gallery4.jpeg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery3.jpeg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery6.jpeg"}
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={"/gallery/gallery1.jpeg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery2.jpeg"}
              width={500}
              height={500}
              alt="image"
            />
            <Image
              src={"/gallery/gallery5.jpeg"}
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
          <p>
            Email: <span>rsrcreations@gmail.com</span>{" "}
          </p>
          <p>
            Our Facebook page:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61578550110498"
              className="text-blue-500 hover:underline"
            >
              RSR Creations
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
