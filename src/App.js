import Header from "./Header";
import Ingredient from "./Ingredient";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

export default function App() {
  return (
      <div className="container">
        <Header />
        <Ingredient />
        <Instructions />
        <Nutrition />
      </div>
  );
}

