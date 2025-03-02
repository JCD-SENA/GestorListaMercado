export const Product = ({ position, productData }) => {
	return (<li>
		<p>
			<span className="text-yellow-500">{productData.name} ({productData.shop})</span>: ${productData.price}<span className="text-yellow-500 float-end">{productData.measurement}</span>
		</p>
	</li>)
}