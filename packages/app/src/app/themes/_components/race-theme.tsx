"use client";

import React, { useState, useEffect, useRef } from "react";

// Componenets
import RaceTracker from "../../race/_components/race/race-tracker";
import Header from "../../race/_components/race/header";
import LineNumbers from "../../race/_components/race/line-numbers";
import Code from "../../race/_components/race/code";
import Footer from "../../race/_components/race/footer";

// Types
import type { Snippet } from "@prisma/client";
import type { User } from "next-auth";
import RestartButton from "@/app/race/_components/race/buttons/restart-button";

type RacePracticeProps = {
  user?: User;
  snippet: Snippet;
};

export default function RaceTheme({ user, snippet }: RacePracticeProps) {
  const input = " ";
  const textIndicatorPosition = 1;

  const inputElement = useRef<HTMLInputElement | null>(null);
  const code = snippet.code.trimEnd();

  return (
    <div
      className="relative flex flex-col w-3/4 gap-2 p-4 mx-auto rounded-md lg:p-8 bg-accent"
      role="none"
    >
      <RaceTracker
        user={user}
        position={textIndicatorPosition}
        codeLength={code.length}
      />
      <Header user={user} snippet={snippet} handleRestart={() => {}} />
      <section className="flex">
        <LineNumbers code={code} currentLineNumber={input.split("\n").length} />
        <Code
          code={code}
          input={input}
          textIndicatorPosition={textIndicatorPosition}
        />
        <input
          type="text"
          defaultValue={input}
          ref={inputElement}
          disabled={input === code}
          className="absolute inset-y-0 left-0 w-full h-full p-8 rounded-md -z-40 focus:outline outline-blue-500 cursor-none"
          onPaste={(e) => e.preventDefault()}
          data-cy="race-practice-input"
        />
      </section>
      <span className="text-red-500">
        You must fix all errors before you can finish the race!
      </span>
      <p>Elapsed Time: 10.0s</p>
      <RestartButton handleRestart={() => {}} />
    </div>
  );
}
