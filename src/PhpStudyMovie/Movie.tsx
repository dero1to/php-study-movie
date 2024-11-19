import React from "react";
import { z } from "zod";
import { AbsoluteFill, Sequence } from "remotion";
import { BG_COLOR_1 } from "./constants";
import { PhpLogo } from "./Logo";
import { Title } from "./Title";
import { Event } from "./Event";

export const movieSchema = z.object({
  eventNumber: z.number().default(170)
});

export const Movie: React.FC<z.infer<typeof movieSchema>> = ({ eventNumber }) => {
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
           <Event eventNumber={eventNumber} />
        </Sequence>
      </AbsoluteFill>
    </>
  )
}
