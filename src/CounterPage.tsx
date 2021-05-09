import { inject, observer } from 'mobx-react';
import CounterStore from './store/CounterStore';

interface CounterPageProps {
	counter?: CounterStore;
}

function CounterPage({ counter }: CounterPageProps) {
	if (!counter) return <div>counter error</div>;
	return (
		<div>
			<div>{counter.number}</div>
			<button onClick={counter.increase}>+1</button>
			<button onClick={counter.decrease}>-1</button>
		</div>
	);
}

export default inject('counter')(observer(CounterPage));
