"use client";

import NoSnippet from "@/app/race/_components/no-snippet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HslColorPicker } from "react-colorful";

type colorSelectorProps = {
  colorType: String;
  color: { h: number; s: number; l: number };
  //   color: string;
  selected: boolean;
};

export default function ColorSelector({
  colorType,
  color,
  selected,
}: colorSelectorProps) {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <>
      <div className={`flex flex-col justify-center items-center gap-2`}>
        <div
          className={`w-10 h-10 bg-background rounded-full ${
            selected === true ? "border-green-400 border-4" : ""
          }`}
        >
          {/* {color.h} {color.s} {color.l} */}
          {}
        </div>
        <h3 className="">{colorType}</h3>
      </div>
    </>
  );
}
