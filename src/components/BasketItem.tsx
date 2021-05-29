import { observer } from 'mobx-react';
import './BasketItem.css';

interface BasketItemProps {
	name: string;
	price: number;
	count: number;
	onTake: any;
}

function BasketItem({ name, price, count, onTake }: BasketItemProps) {
	return (
		<div className='BasketItem' onClick={() => onTake(name)}>
			<div className='name'>{name}</div>
			<div className='price'>{price}원</div>
			<div className='count'>{count}</div>
			<div className='return'>갖다놓기</div>
		</div>
	);
}

export default observer(BasketItem);
