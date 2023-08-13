"use client";

import NoSnippet from "@/app/race/_components/no-snippet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HslColorPicker } from "react-colorful";

type colorSelectorProps = {
  colorType: String;
};

export default function ColorSelector({ colorType }: colorSelectorProps) {
  return (
    <>
      <div className={`flex flex-col justify-center items-center gap-2`}>
        <div
          className={`w-10 h-10 bg-${colorType} rounded-full  border-foreground border-2`}
        ></div>
        <h3 className="text-primary-foreground">{colorType}</h3>
      </div>
    </>
  );
}
