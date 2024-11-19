import React from "react";
import { FONT_FAMILY } from "./constants";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig
} from "remotion";

const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: "bold",
  fontSize: 90,
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: 120,
};

export const Event: React.FC<{
  readonly eventNumber: number;
}> = ({ eventNumber }) => {

  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const opacity = spring({
    to: 1,
    config: {
      damping: 100,
    },
    frame,
    from: 0,
    durationInFrames: 50,
    fps: videoConfig.fps,
  });

  // const eventNumber = 170;

  return (
    <AbsoluteFill>
      <div
        style={{
          ...title,
          opacity
        }}
      >
        #{ eventNumber }
      </div>
    </AbsoluteFill>
  )
}
