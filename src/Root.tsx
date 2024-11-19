import './tailwind.css';
import { Composition } from "remotion";
import { PhpLogo } from "./PhpStudyMovie/Logo";
import { Title } from "./PhpStudyMovie/Title";
import { Movie, movieSchema } from "./PhpStudyMovie/Movie";

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
        schema={movieSchema}
        defaultProps={{ eventNumber: 170 }}
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
