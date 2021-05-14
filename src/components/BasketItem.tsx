import './BasketItem.css';

interface BasketItemProps {
	name: string;
	price: number;
	count: number;
}

function BasketItem({ name, price, count }: BasketItemProps) {
	return (
		<div className='BasketItem'>
			<div className='name'>{name}</div>
			<div className='price'>{price}원</div>
			<div className='count'>{count}</div>
			<div className='return'>갖다놓기</div>
		</div>
	);
}

export default BasketItem;
