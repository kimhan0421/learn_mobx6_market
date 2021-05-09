import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import CounterStore from './store/CounterStore';

const counter = new CounterStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider counter={counter}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
