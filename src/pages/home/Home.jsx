import { HeroBanner, Trending, Popular, TopRated } from "../";
import "./style.scss";

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
