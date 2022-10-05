import { useState, useTransition } from "react";
import ProductList from "./productList";

const generateProducts = () => {
  const products: Array<string> = [];
  for (let i = 0; i < 100000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
}

const products = generateProducts();


const TestTransition = () => {

  const [isPending, setTranistion] = useTransition();
  const [filterTrem, setFilterTrem] = useState<string>('');

  const filterProducts = () => {
    if(!filterTrem) {
      return products;
    }
    return products.filter((product) => product.includes(filterTrem));
  };


  const updateProductList = (e) => {
    setTranistion(() => {
      setFilterTrem(e.target.value);
    })
  };

  return (
    <div id="app">
      <input 
        type="text" 
        onChange={updateProductList}
      />
      {isPending && <p style={{ color: "white" }}>更新列表。. </p>}
      <ProductList 
        products={filterProducts()}
      />
    </div>
  );
};

export default TestTransition;