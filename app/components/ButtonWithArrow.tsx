import React from "react";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  buttonText: string;
  href: string;
}

const ButtonWithArrow = ({ buttonText, href }: Props) => {
  return (
    <Button className="flex  w-fit px-5 py-5 rounded-full bg-transparent border-2 text-black">
      <Link href={href} className="flex items-center justify-between gap-10">
        <p className="uppercase">{buttonText}</p> <MoveRight />
      </Link>
    </Button>
  );
};

export default ButtonWithArrow;
