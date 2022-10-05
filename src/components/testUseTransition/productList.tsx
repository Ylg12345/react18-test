const ProductList = ({ products }) => {
  return (
    <ul>  
      {
        products.map((product, index) => {
          return (
            <li key={`product-${index}`}>
              {product}
            </li>
          )
        })
      }
    </ul>
  );
};

export default ProductList;