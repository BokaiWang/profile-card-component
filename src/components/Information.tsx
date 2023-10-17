import { FC } from "react";
import { CardProps } from "./Card";
import HeadShot from "./HeadShot";

const Information: FC<CardProps> = ({ profile }) => {
  return (
    <div className="card__info">
      <HeadShot src={profile.headShot} />
      <div className="card__details">
        <p className="details__name">{profile.firstName}</p>
        <p className="details__name">{profile.lastName}</p>
        <p className="details__age color--dark-grayish-blue">{profile.age}</p>
      </div>
      <p className="card__country">{profile.country}</p>
    </div>
  );
};

export default Information;
