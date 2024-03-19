import { AboutUs } from "../../components/MainPage/AboutUs/AboutUs";
import { MakeTheWorldBetter } from "../../components/MainPage/MakeTheWorldBetter/MakeTheWorldBetter";
import { MissionStatement } from "../../components/MainPage/MissionStatement/MissionStatement";
import { NeedOfHelp } from "../../components/MainPage/NeedOfHelp/NeedOfHelp";

export const HomePage = () => {
  return (
    <div>
      <MissionStatement />
      <AboutUs />
      <NeedOfHelp />
      <MakeTheWorldBetter/>
    </div>
  );
};
