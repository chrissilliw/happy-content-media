"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navItems = [
    { name: "Foto", link: "foto" },
    { name: "Video", link: "video" },
    { name: "Vår story", link: "var-story" },
    { name: "kontakt", link: "kontakt" },
  ];

  return isDesktop ? (
    <div>desktop</div>
  ) : (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerTitle></DrawerTitle>
        <DrawerContent>Content i menu</DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
