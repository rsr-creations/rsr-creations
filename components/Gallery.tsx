import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-4 my-12">
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
  );
}
