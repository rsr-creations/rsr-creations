import Image from "next/image";
import FeatureBlock from "@/components/FeatureBlock";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="dark-section bg-[url(/photography.jpg)] bg-cover bg-no-repeat bg-fixed bg-center w-full"
      >
        <div className="min-h-200 lg:min-h-screen bg-dark/80 py-24 pt-40 lg:py-64 flex flex-col md:flex-row items-center justify-center px-12 gap-24">
          <div className="max-w-96 md:max-w-sm">
            <Image
              src={"/logos/logo-nobg.png"}
              width={500}
              height={500}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-8 md:max-w-1/2 lg:max-w-3xl">
            <h1>
              You hire and we <span className="text-blue-600"> create</span>,
              catering to your needs.
            </h1>
            <p>
              We are a production company based in Niketan, Dhaka. We create,
              film and produce content with your own personal touch as a top
              priority.
            </p>
            <div className="flex gap-8">
              <a href="#about" className="button bg-primary text-dark">
                More info
              </a>
              <a href="#contact" className="button">
                Contact us
              </a>
            </div>
            {/* <div>
            <Image width={800} height={800} src={"/test-bg-1.jpg"} alt="" />
          </div> */}
          </div>
        </div>
      </section>
      <section id="about" className="light-section bg-light2 section">
        <div className="container">
          <h5 className="text-red-600">Who Are We?</h5>
          <h2>
            RSR Creations is an up-and-coming, professional content production
            company located in Dhaka.
          </h2>
          <p className="mb-4">
            As an up and coming production based company, we create content
            based on your direction and preferences. From photography to
            videography, to web design to logo and graphic design and of course;
            a podcast and talk show production right here in Dhaka.
          </p>
        </div>
      </section>
      <section className="light-section bg-light section">
        <div className="container">
          <h5 className="text-amber-500">What we can do for you</h5>
          <h2>
            We manage and direct the content you desire with your vision as a
            top priority. Our services include:
          </h2>
          <div className="grid">
            <FeatureBlock
              number="1"
              title="Photography and videography"
              src="/camera.jpg"
              reverse={false}
            >
              From photography and photo-editing to videography and
              video-editing. With cutting-edge equipment, we film and edit your
              content directly catering to your needs.
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
              studio in Niketan.
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
            {/* <div className="flex flex-row gap-6">
              <a href="#contact" className="button">
                Get in touch
              </a>
              <a href="#portfolio" className="button">
                View our portfolio
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section id="portfolio" className="dark-section bg-dark/95 section">
        <div className="container">
          <h5 className="text-blue-500">Our portfolio:</h5>
          <h2>Still not convinced? Check out our work.</h2>
          <div className="flex flex-col items-center sm:flex-row gap-4 my-12">
            <div className="flex flex-col justify-center gap-4">
              <Image
                src={"/gallery/gallery7.jpeg"}
                width={500}
                height={500}
                alt="image"
              />

              <Image
                src={"/gallery/gallery10.jpeg"}
                width={500}
                height={500}
                alt="image"
              />
              <Image
                src={"/gallery/gallery9.jpeg"}
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
                src={"/gallery/gallery8.jpeg"}
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
        </div>
      </section>
    </main>
  );
}
