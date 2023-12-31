import { FC } from "react";
import { Profile } from "../App";

import Information from "./Information";
import Statistics from "./Statistics";

export interface CardProps {
  profile: Profile;
}

const Card: FC<CardProps> = ({ profile }) => {
  return (
    <section className="card__container">
      <div className="card">
        <Information profile={profile}></Information>
        <Statistics
          followers={profile.followers}
          likes={profile.likes}
          photos={profile.photos}
        />
      </div>
    </section>
  );
};

export default Card;
