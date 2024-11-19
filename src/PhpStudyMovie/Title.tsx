import React from "react";
import { FONT_FAMILY } from "./constants";
import {
  useCurrentFrame,
  AbsoluteFill, spring, useVideoConfig
} from "remotion";

const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: "bold",
  fontSize: 120,
  textAlign: "center",
  position: "absolute",
  width: "100%",
  height: "100%",
};

export const Title: React.FC = () => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const yPosition1 = spring({
    to: 650,
    config: {
      damping: 100,
    },
    frame,
    from: 540,
    fps: videoConfig.fps,
  });

  const xPosition1 = spring({
    from: 0,
    to: -180,
    config: {
      damping: 100,
    },
    frame,
    delay: 30,
    fps: videoConfig.fps,
  });

  const opacity1 = spring({
    to: 1,
    config: {
      damping: 200,
    },
    frame,
    from: 0,
    fps: videoConfig.fps,
  });

  const opacity2 = spring({
    from: 0,
    to: 1,
    config: {
      damping: 200,
    },
    frame,
    delay: 60,
    fps: videoConfig.fps,
  });


  return (
    <>
      <AbsoluteFill>
        <div style={{
          ...title,
          opacity: opacity1,
          transform: `translate(${xPosition1}px, ${yPosition1}px)`
        }}>
          勉強会
        </div>
      </AbsoluteFill>
      <AbsoluteFill>
        <div style={{
          ...title,
          top: 650,
          left: 180,
          // X座標の移動と透明度の変化
          opacity: opacity2
        }}>
          ＠東京
        </div>
      </AbsoluteFill>
    </>
  );
};
