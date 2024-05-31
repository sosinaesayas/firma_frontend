
import React from "react";
import Select, { MultiValue } from "react-select";
import {fetchProducts} from "../../features/post_tenders/post_tender_api";
import ProductData from "../../data/interfaces/productsData";


interface Product {
    value: string;
    label: string;

}
interface ProductsSelectProps {
    handleProductChange: (selectedOptions: MultiValue<Product>) => void;
}

const ProductsSelect: React.FC<ProductsSelectProps> = ({ handleProductChange }) => {
    const [Products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchProducts().then((response) => {
            console.log("Products response:", response.data);  
            const Products = response.data.map((productData: ProductData) => {
                return { value: productData.pr_number , label: productData.short_text };
            });

            setProducts(Products);
            setLoading(false);
        });
    }, []);

    return (
      <div>
        
        <Select
            isMulti
            options={Products}
            onChange={handleProductChange}
            isLoading={loading}
        />
      </div>
    );
};

export default ProductsSelect;
