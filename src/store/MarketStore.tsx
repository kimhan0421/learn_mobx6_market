import { computed, action, makeObservable, observable } from 'mobx';

interface Market {
	name: string;
	price: number;
	count: number;
}

class MarketStore {
	selectedItems: Market[] = [];

	constructor() {
		makeObservable(this, {
			selectedItems: observable,
			put: action,
			take: action,
			total: computed,
		});
	}

	put = (name: string, price: number) => {
		const exists = this.selectedItems.find(item => item.name === name);
		if (!exists) {
			this.selectedItems.push({
				name,
				price,
				count: 1,
			});
			return;
		}
		exists.count++;
	};

	take = (name: string) => {
		const itemToTake = this.selectedItems.find(item => item.name === name);
		if (itemToTake) {
			itemToTake.count--;
			if (itemToTake.count === 0) {
				this.selectedItems.filter(item => item.name === itemToTake.name);
			}
		}
	};

	get total() {
		console.log('총합 계산...');
		return this.selectedItems.reduce((previous, current) => {
			return previous + current.price * current.count;
		}, 0);
	}
}

export default MarketStore;
