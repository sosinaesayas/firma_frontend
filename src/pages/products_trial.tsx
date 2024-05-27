import ProductsForm from "../features/create_tenders/components/products_form/products_form";

const Product: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Add New Public Tender</h1>
      <ProductsForm />
    </>
  );
};

export default Product;
