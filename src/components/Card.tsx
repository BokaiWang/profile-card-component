import { FC } from "react";
import { Profile } from "../App";

interface CardProps {
  profile: Profile;
}

const Card: FC<CardProps> = ({ profile }) => {
  return (
    <section className="card">
      <img src={profile.headShot}></img>
    </section>
  );
};

export default Card;
