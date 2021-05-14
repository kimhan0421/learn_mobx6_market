import BasketItem from './BasketItem';

function BasketItemList() {
	return (
		<div>
			<BasketItem name='생수' price={1500} count={1} />
			<BasketItem name='생수' price={850} count={1} />
			<hr />
			<p>
				<b>총합: </b> 3850원
			</p>
		</div>
	);
}

export default BasketItemList;
