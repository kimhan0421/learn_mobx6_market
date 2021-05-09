import './ShopItem.css';

interface ShopItemProps {
	itemName: any;
	itemPrice: any;
}

function ShopItem({ itemName, itemPrice }: ShopItemProps) {
	return (
		<div className='ShopItem'>
			<h4>{itemName}</h4>
			<div>{itemPrice}원</div>
		</div>
	);
}

export default ShopItem;
