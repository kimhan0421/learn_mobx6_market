import { action, makeObservable, observable } from "mobx";
import RootStore from "./index";

class CounterStore {
  number: number = 1;
  root;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };
}

export default CounterStore;
