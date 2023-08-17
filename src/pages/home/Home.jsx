import { HeroBanner, Trending } from "../";
import "./style.scss";

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};
