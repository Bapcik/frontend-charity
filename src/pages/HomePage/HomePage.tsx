import { AboutUs } from "../../components/MainPage/AboutUs/AboutUs";
import { MakeTheWorldBetter } from "../../components/MainPage/MakeTheWorldBetter/MakeTheWorldBetter";
import { MissionStatement } from "../../components/MainPage/MissionStatement/MissionStatement";
import { NeedOfHelp } from "../../components/MainPage/NeedOfHelp/NeedOfHelp";

const HomePage = () => {
  return (
    <div>
      <MissionStatement />
      <AboutUs />
      <NeedOfHelp />
      <MakeTheWorldBetter/>
    </div>
  );
};

export default HomePage;
