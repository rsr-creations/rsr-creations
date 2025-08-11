import Image from "next/image";
import {ReactNode} from "react";

export default function FeatureBlock({
  number,
  title,
  src,
  reverse = false,
  children,
}: {
  number: string;
  title: string;
  src: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  let classes: string = "";
  if (reverse) {
    classes += "flex-row-reverse ";
  }
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 my-16 ${classes}`}
    >
      <div className="md:max-w-1/2 md:p-4">
        <Image
          src={src}
          alt="Feature 2"
          width={1000}
          height={1000}
          className="rounded-md"
        />
      </div>
      <div className="max-w-screen flex flex-col justify-between items-baseline gap-4 py-4">
        <span className="font-bold tracking-tighter font-montserrat text-dark/10 hidden">
          #{number}
        </span>
        <h3 className="text-dark/85">{title}</h3>
        <p className="text-less-dark">{children}</p>
      </div>
    </div>
  );
}
