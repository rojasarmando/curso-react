import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";


export function App() {
  return (
    <section className="App">
      <TwitterFollowCard  username="rojasarmando" name="Armando Rojas"  />
      <TwitterFollowCard  username="rojasarmando2023" name="El Michi"  />
    </section>
  );
}
