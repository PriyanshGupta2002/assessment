import CategorySlider from "../components/CategorySlider";
import TradingInstrumentList from "../components/TradingInstrumentList";

const Home = () => {
  return (
    <div className="w-full">
      <CategorySlider />
      <TradingInstrumentList />
    </div>
  );
};

export default Home;
