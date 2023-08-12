"use client";

import NoSnippet from "@/app/race/_components/no-snippet";
import { Button } from "@/components/ui/button";
import ColorSelector from "./color-selector";
import { useEffect, useState } from "react";
import { HslColorPicker } from "react-colorful";

export default function ColorPalette() {
  const [primary, setPrimary] = useState(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--background"),
  );
  const [color, setColor] = useState({ h: 0, s: 0, l: 100 });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      `${color.h} ${color.s}% ${color.l}%`,
    );

    console.log(`new background value ${color.h} ${color.s}% ${color.l}%`);
    console.log(
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--background"),
    );
  }, [color]);

  return (
    <div
      className="relative flex flex-col w-3/4 gap-2 p-4 mx-auto rounded-md lg:p-8 bg-accent mt-1 "
      role="none"
    >
      <div className="flex flex-row justify-between ">
        <ColorSelector colorType={"Primary"} color={color} selected={true} />
        {/*         
        {/* ring to use secondary color 
        <ColorSelector
          colorType={"Secondary"}
          color={primary}
          selected={false}
        />
        /* Card and Popover to use Background color 
        <ColorSelector
          colorType={"background"}
          color={primary}
          selected={false}
        />
        <ColorSelector colorType={"accent"} color={primary} selected={false} />
        <ColorSelector colorType={"border"} color={primary} selected={false} />
        <ColorSelector colorType={"warning"} color={primary} selected={false} />
        <ColorSelector colorType={"success"} color={primary} selected={false} />
        <ColorSelector colorType={"muted"} color={primary} selected={false} /> 
        
        */}
      </div>
      <div className="flex flex-row justify-center my-2">
        <HslColorPicker color={color} onChange={setColor} />
      </div>
      <Button className="bg-background">Save</Button>
    </div>
  );
}
