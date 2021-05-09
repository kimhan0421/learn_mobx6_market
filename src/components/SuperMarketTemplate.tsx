import './SuperMarketTemplate.css';

interface SuperMarketTemplateProps {
	items: any;
	basket: any;
}

function SuperMarketTemplate({ items, basket }: SuperMarketTemplateProps) {
	return (
		<div className='SuperMarketTemplate'>
			<div className='items-wrapper'>
				<h2>상품</h2>
				{items}
			</div>
			<div className='basket-wrapper'>
				<h2>장바구니</h2>
				{basket}
			</div>
		</div>
	);
}

export default SuperMarketTemplate;
