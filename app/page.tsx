import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="dark-section bg-center w-full">
        <div className="min-h-200 bg-dark py-40 px-20 flex flex-col gap-12">
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
      <section className="dark-section bg-red-800 py-32 px-20 flex flex-col gap-8">
        <h5 className="text-light/90">Who Are We?</h5>
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
      <section className="dark-section bg-blue-700 py-32 px-20 flex flex-col gap-8">
        <h5 className="text-light/90">What we can do for you</h5>
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
      <section className="dark-section bg-green-600 py-32 px-20 flex flex-col gap-8">
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
      <section className="dark-section bg-amber-500 py-32 px-20 flex flex-col gap-8">
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
