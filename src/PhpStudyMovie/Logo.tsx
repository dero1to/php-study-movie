import React from "react";
import {
  AbsoluteFill, spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile, interpolate
} from "remotion";


export const PhpLogo: React.FC = () =>
{
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const phpLogoPath = "php-logo-360p.png";

  const scale = spring({
    frame,
    config: {
      mass: 0.5,
    },
    fps: videoConfig.fps,
  });

  const yPosition1 = interpolate(frame, [30, 40], [0, -100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="logo"
        style={{
          transform: `scale(${scale}) translateY(${yPosition1}px)`,
        }}
        width="640px"
        src={staticFile(phpLogoPath)}
      />
    </AbsoluteFill>
  );
};
