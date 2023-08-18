import { HeroBanner, Trending, Popular } from "../";
import "./style.scss";

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
    </div>
  );
};
