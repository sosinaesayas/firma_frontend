import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../products_form/products_form_slice";
import { RootState } from "../../../../store/store";
import { AppDispatch } from "../../../../store/store";
import Select from 'react-select';

export const ProductsForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const productsStatus = useSelector(
    (state: RootState) => state.products.status
  );
 
  const error = useSelector((state: RootState) => state.products.error);

  const [selectedProduct, setSelectedProduct] = useState<string>("");

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  const handleProductChange = (selectedOption: any) => {
    setSelectedProduct(selectedOption ? selectedOption.value : ""); 
  };

  if (productsStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productsStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <form>
      <div className="flex flex-col">
        <label htmlFor="productSelect" className="text-gray-700 mb-2">
          Select a Product
        </label>
       <Select
  placeholder="Select an option"
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'option' implicitly has an 'any' type.
  options={productOptions}
  isMulti
  value={selectedProduct}
  onChange={handleProductChange}
  id="productSelect"
  name="productSelect"
/>
      </div>
    </form>
  );
};

export default ProductsForm;



