const HeadShot = ({ src }: { src: string }) => {
  return (
    <div className="card__img__container">
      <img className="card__img" src={src} />
    </div>
  );
};

export default HeadShot;
