import { action, makeObservable, observable } from 'mobx';

class CounterStore {
	number: number = 0;

	constructor() {
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

export const CounterInstance = new CounterStore();

export default CounterStore;
