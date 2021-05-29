import { computed, action, makeObservable, observable } from "mobx";
import RootStore from "./index";

export interface Market {
  name: string;
  price: number;
  count: number;
}

class MarketStore {
  selectedItems: Market[] = [];
  root;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      selectedItems: observable,
      put: action,
      take: action,
      total: computed,
    });
  }

  put = (name: string, price: number) => {
    const { number } = this.root.counter;
    // 존재하는지 찾고
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,
        price,
        count: number,
      });
      return;
    }
    exists.count += number;
  };

  take = (name: string) => {
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    if (itemToTake) {
      itemToTake.count--;
      if (itemToTake.count === 0) {
        this.selectedItems.filter((item) => item.name === itemToTake.name);
      }
    }
  };

  get total() {
    console.log("총합 계산...");
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}

export default MarketStore;
