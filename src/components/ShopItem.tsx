import './ShopItem.css';

interface ShopItemProps {
	name: string;
	price: number;
	onPut: any;
}

const ShopItem = ({ name, price, onPut }: ShopItemProps) => {
	return (
		<div className='ShopItem' onClick={() => onPut(name, price)}>
			<h4>{name}</h4>
			<div>{price}원</div>
		</div>
	);
};

export default ShopItem;
