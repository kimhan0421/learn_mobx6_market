import CounterStore from "./CounterStore";
import MarketStore from "./MarketStore";

class RootStore {
  counter;
  market;

  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;
