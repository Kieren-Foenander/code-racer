"use client";

import NoSnippet from "@/app/race/_components/no-snippet";
import { Button } from "@/components/ui/button";
import ColorSelector from "./color-selector";
import { useEffect, useState } from "react";
import { HslColorPicker } from "react-colorful";
import { forEach, identity } from "cypress/types/lodash";

type themeState = {
  id: number;
  themeType: string;
  color: {
    h: number;
    s: number;
    l: number;
  };
  cssProperty: string;
}[];

export default function ColorPalette() {
  const [theme, setTheme] = useState<themeState>([
    {
      id: 1,
      themeType: "background",
      color: { h: 222, s: 84, l: 5 },
      cssProperty: "--background",
    },
    {
      id: 2,
      themeType: "foreground",
      color: { h: 210, s: 40, l: 98 },
      cssProperty: "--foreground",
    },
    {
      id: 3,
      themeType: "accent",
      color: { h: 217, s: 32, l: 17 },
      cssProperty: "--accent",
    },
    {
      id: 4,
      themeType: "accent-foreground",
      color: { h: 210, s: 40, l: 98 },
      cssProperty: "--accent-foreground",
    },
    {
      id: 5,
      themeType: "primary",
      color: { h: 45, s: 93, l: 47 },
      cssProperty: "--primary",
    },
    {
      id: 6,
      themeType: "primary-foreground",
      color: { h: 222, s: 47, l: 11 },
      cssProperty: "--primary-foreground",
    },
    {
      id: 7,
      themeType: "secondary",
      color: { h: 217, s: 32, l: 17 },
      cssProperty: "--secondary",
    },
    {
      id: 8,
      themeType: "secondary-foreground",
      color: { h: 210, s: 40, l: 98 },
      cssProperty: "--secondary-foreground",
    },
    {
      id: 9,
      themeType: "muted",
      color: { h: 217, s: 32, l: 17 },
      cssProperty: "--muted",
    },
    {
      id: 10,
      themeType: "muted-foreground",
      color: { h: 215, s: 20, l: 65 },
      cssProperty: "--muted-foreground",
    },
    {
      id: 11,
      themeType: "border",
      color: { h: 217, s: 32, l: 17 },
      cssProperty: "--border",
    },
  ]);
  //   document.documentElement.style.setProperty(
  //     "--background",
  //     `${theme?.background.h} ${theme?.background.s}% ${theme?.background.l}%`,
  //   );
  //   //Card and Popover to use Background color
  //   document.documentElement.style.setProperty(
  //     "--popover",
  //     `${theme?.background.h} ${theme?.background.s}% ${theme?.background.l}%`,
  //   );
  //   document.documentElement.style.setProperty(
  //     "--card",
  //     `${theme?.background.h} ${theme?.background.s}% ${theme?.background.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--primary",
  //     `${theme?.primary.h} ${theme?.primary.s}% ${theme?.background.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--primary-foreground",
  //     `${theme?.primaryForeground.h} ${theme?.primaryForeground.s}% ${theme?.primaryForeground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--accent",
  //     `${theme?.accent.h} ${theme?.accent.s}% ${theme?.accent.l}%`,
  //   );
  //   document.documentElement.style.setProperty(
  //     "--accent-foreground",
  //     `${theme?.accentForeground.h} ${theme?.accentForeground.s}% ${theme?.accentForeground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--foreground",
  //     `${theme?.foreground.h} ${theme?.foreground.s}% ${theme?.foreground.l}%`,
  //   );

  //   //Card-foreground and Popover-foreground to use foreground color
  //   document.documentElement.style.setProperty(
  //     "--popover-foreground",
  //     `${theme?.foreground.h} ${theme?.foreground.s}% ${theme?.foreground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--card-foreground",
  //     `${theme?.foreground.h} ${theme?.foreground.s}% ${theme?.foreground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--muted",
  //     `${theme?.muted.h} ${theme?.muted.s}% ${theme?.muted.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--muted-foreground",
  //     `${theme?.mutedForeground.h} ${theme?.mutedForeground.s}% ${theme?.mutedForeground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--border",
  //     `${theme?.border.h} ${theme?.border.s}% ${theme?.border.l}%`,
  //   );

  //   //input to use border color
  //   document.documentElement.style.setProperty(
  //     "--input",
  //     `${theme?.border.h} ${theme?.border.s}% ${theme?.border.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--secondary",
  //     `${theme?.secondary.h} ${theme?.secondary.s}% ${theme?.secondary.l}%`,
  //   );
  //   //ring to use secondary color
  //   document.documentElement.style.setProperty(
  //     "--ring",
  //     `${theme?.secondary.h} ${theme?.secondary.s}% ${theme?.secondary.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--secondary-foreground",
  //     `${theme?.secondaryForeground.h} ${theme?.secondaryForeground.s}% ${theme?.secondaryForeground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--destructive",
  //     `${theme?.destructive.h} ${theme?.destructive.s}% ${theme?.destructive.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--destructive-foreground",
  //     `${theme?.destructiveForeground.h} ${theme?.destructiveForeground.s}% ${theme?.destructiveForeground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--success",
  //     `${theme?.success.h} ${theme?.success.s}% ${theme?.success.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--success-foreground",
  //     `${theme?.successForeground.h} ${theme?.successForeground.s}% ${theme?.successForeground.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--warning-light",
  //     `${theme?.warningLight.h} ${theme?.warningLight.s}% ${theme?.warningLight.l}%`,
  //   );

  //   document.documentElement.style.setProperty(
  //     "--warning-dark",
  //     `${theme?.warningDark.h} ${theme?.warningDark.s}% ${theme?.warningDark.l}%`,
  //   );
  // }, [theme]);

  useEffect(() => {
    theme.forEach((i) => {
      document.documentElement.style.setProperty(
        i.cssProperty,
        `${i.color.h} ${i.color.s}% ${i.color.l}%`,
      );
    });
  }, [theme]);

  const handleThemeChange = (e: any, i: number) => {
    let tempTheme = [...theme];
    let updatedElement = { ...tempTheme[i], color: e };
    tempTheme[i] = updatedElement;
    setTheme(tempTheme);
    console.log(`updating ${tempTheme[i].themeType} to ${tempTheme[i].color}`);
  };

  return (
    <div
      className="relative flex flex-col w-3/4 gap-2 p-4 mx-auto rounded-md lg:p-8 bg-accent mt-1 border-border border-2"
      role="none"
    >
      <div className="flex flex-row justify-between ">
        {theme.map((element) => {
          return (
            <ColorSelector key={element.id} colorType={element.themeType} />
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center my-2">
        {theme.map((element, i) => {
          return (
            <div
              key={element.id}
              className="text-foreground flex flex-1 flex-col justify-center items-center"
            >
              <HslColorPicker
                color={element.color}
                onChange={(e) => {
                  handleThemeChange(e, i);
                }}
              />
              {element.themeType}
            </div>
          );
        })}
      </div>

      <Button className="bg-primary">Save</Button>
    </div>
  );
}
