"use client";

import Image from "next/image";

type Item = {
  title: string;
  id: string;
  image: string;
};

export default function DropdownItem({ item }: { item: Item }) {
  return (
    <div
      className="flex flex-row items-center hover:bg-blue-400"
      onClick={() => console.log(item.title)}
    >
      <Image
        src={"/" + item.image}
        alt={"Image of " + item.id}
        width={40}
        height={40}
      />
      <p>{item.title}</p>
    </div>
  );
}
