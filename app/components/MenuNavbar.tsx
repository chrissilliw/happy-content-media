"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import happyContentMedia from "@/public/logo.svg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MenuNavbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navItems = [
    { name: "Foto", link: "/foto" },
    { name: "Video", link: "/video" },
    { name: "Vår story", link: "/var-story" },
  ];
  return isDesktop ? (
    <div className="flex justify-between my-5">
      <div className="w-[40px]">
        <AspectRatio ratio={1 / 1}>
          <Image src={happyContentMedia} alt="logo" width={40} height={40} />
        </AspectRatio>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link href={item.link}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <Link
          href="/kontakt"
          role="button"
          className="px-4 py-2 bg-slate-800 max-w-fit text-white rounded-md"
        >
          Kontakt
        </Link>
      </NavigationMenu>
      {/* </div> */}
    </div>
  ) : (
    <div className="flex justify-between mx-4 my-5">
      <div className="w-[40px]">
        <AspectRatio ratio={1 / 1}>
          <Image src={happyContentMedia} alt="logo" width={40} height={40} />
        </AspectRatio>
      </div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <SheetClose asChild key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link
                href="/kontakt"
                role="button"
                className="px-4 py-2 bg-slate-800 max-w-fit text-white rounded-md"
              >
                Kontakt
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuNavbar;
