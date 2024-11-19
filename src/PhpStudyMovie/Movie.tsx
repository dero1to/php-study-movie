import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { BG_COLOR_1 } from "./constants";
import { PhpLogo } from "./Logo";
import { Title } from "./Title";
import { Event } from "./Event";


export const Movie: React.FC = () => {
  return (
    <>
      <AbsoluteFill style={{ backgroundColor: BG_COLOR_1 }} >
        <Sequence from={40} name="イベント名">
          <Title />
        </Sequence>
        <Sequence from={10} name="イベントロゴ">
          <PhpLogo />
        </Sequence>
        <Sequence from={125} name="イベント回">
           <Event eventNumber={170} />
        </Sequence>
      </AbsoluteFill>
    </>
  )
}
