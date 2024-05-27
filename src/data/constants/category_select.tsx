// import React from "react";
// import Select, { MultiValue } from "react-select";
// import { fetchProductsApi } from "../../features/create_tenders/components/products_form/products_form_api";

// export interface ProductsData{
//     success: boolean,
//     msg: string,
//     document_category:string,
//     pr_number: string,
//     item: string,
//     account_assignment: string,
//     item_category: string,
//     matnr: string,
//     short_text: string,
//     quantity: string,
//     unit:string,
//     delivery_date:string,
//     material_grp: string,
//     plant: string,
//     storage_loc: string,
//     purchasing_grp: string,
//     subline_item: string,
//     activity_num: string,
//     sub_qty: string,
//     unit_serv: string
// }
// interface CompaniesSelectProps {
//     handleProductsChange: (selectedOptions: MultiValue<ProductsData>) => void;
// }

// const ProductsSelect: React.FC<CompaniesSelectProps> = ({ handleProductsChange }) => {
//     const [products, setProducts] = React.useState<ProductsData[]>([]);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
//         fetchProductsApi().then((response) => {
//             console.log("products response:", response.data);  
//             const products = response.data.map((product: { _id: string; short_text: string }) => {
//                 return { value: product.short_text, label: product.short_text };
//             });

//             console.log("Products fetched:", products)
//             setProducts(products);
//             setLoading(false);
//         });
//     }, []);

//     return (
//       <div>
        
//         <Select
//             isMulti
//             options={products}
//             onChange={handleProductsChange}
//             isLoading={loading}
//         />
//       </div>
//     );
// };

// export default ProductsSelect;



import React from "react";
import Select, { MultiValue } from "react-select";
import OptionsType from "react-select";
import { fetchProductsApi } from "../../features/create_tenders/components/products_form/products_form_api";

export interface ProductsData {
    success: boolean;
    msg: string;
    document_category: string;
    pr_number: string;
    item: string;
    account_assignment: string;
    item_category: string;
    matnr: string;
    short_text: string;
    quantity: string;
    unit: string;
    delivery_date: string;
    material_grp: string;
    plant: string;
    storage_loc: string;
    purchasing_grp: string;
    subline_item: string;
    activity_num: string;
    sub_qty: string;
    unit_serv: string;
}


interface CompaniesSelectProps {
    handleProductsChange: (selectedOptions: MultiValue<ProductsData>) => void;
}

const ProductsSelect: React.FC<CompaniesSelectProps> = ({ handleProductsChange }) => {
    const [products, setProducts] = React.useState<OptionsType<ProductsData[]>>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchProductsApi().then((response) => {
            console.log("products response:", response);
            const products = response.map((product: ProductsData) => {
                return { value: product.short_text, label: product.short_text };
            });

            console.log("Products fetched:", products);
            setProducts(products);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching products:", error);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <Select
                isMulti
                options={products}
                onChange={handleProductsChange}
                isLoading={loading}
            />
        </div>
    );
};

export default ProductsSelect;
