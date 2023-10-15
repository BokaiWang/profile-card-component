import Card from "./components/Card";
import victorHeadShot from "./assets/image-victor.jpg";

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  followers: number;
  likes: number;
  photos: number;
  headShot: string;
}

const profile: Profile = {
  firstName: "Victor",
  lastName: "Crest",
  age: 26,
  country: "London",
  followers: 80_000,
  likes: 803_000,
  photos: 1_400,
  headShot: victorHeadShot,
};

function App() {
  return (
    <div className="main">
      <Card profile={profile} />
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
}

export default App;
