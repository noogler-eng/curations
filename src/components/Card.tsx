import { Image } from "@heroui/react";
import Link from "next/link";

export default function Card({
  data,
}: {
  data: {
    link: string;
    image: string;
    title: string;
    description: string;
    cover1: string;
    cover2: string;
    count: number;
  };
}) {
  return (
    <Link href={data.link}>
      <div className="border p-4 rounded-xl px-6">
        <div className="flex flex-col items-center gap-2">
          <Image
            isZoomed
            alt={data.title}
            src={data.image}
            width={300}
            className="rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-center">{data.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-4 justify-center">
          <Image
            isZoomed
            alt={"cover1 image"}
            src={data.cover1}
            width={100}
            height={100}
            className="rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
          <Image
            isZoomed
            alt={"cover2 image"}
            src={data.cover2}
            width={100}
            height={100}
            className="rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
          <div className="text-lg font-bold flex flex-col items-center border p-8 rounded-xl">
            <h3>{data.count}+</h3>
            <p className="text-xs text-gray-500">more</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
