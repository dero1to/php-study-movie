import './tailwind.css';
import { Composition } from "remotion";
import { PhpLogo } from "./PhpStudyMovie/Logo";
import { Title } from "./PhpStudyMovie/Title";
import { Movie } from "./PhpStudyMovie/Movie";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Movie"
        component={Movie}
        durationInFrames={250}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PhpLogo"
        component={PhpLogo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Title"
        component={Title}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
