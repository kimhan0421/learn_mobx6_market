import ShopItem from './ShopItem';

const items = [
	{
		itemName: '생수',
		itemPrice: 850,
	},
	{
		itemName: '신라면',
		itemPrice: 900,
	},
	{
		itemName: '포카칩',
		itemPrice: 1500,
	},
	{
		itemName: '새우깡',
		itemPrice: 1000,
	},
];

const ShopItemList = () => {
	const itemList = items.map(item => <ShopItem {...item} key={item.itemName} />);
	return <div>{itemList}</div>;
};

export default ShopItemList;
