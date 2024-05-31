import '../../../../../styles/product_table.css';

const ProductTable = () => {

  return (
    <div className="form-container p-1 pb-4">
      <table className="product-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name={`item-new`} />
            </td>
            <td>
              <input type="text" name={`unit-new`} />
            </td>
            <td>
              <input type="text" name={`quantity-new`} />
            </td>
            <td>
              <input type="text" name={`unitPrice-new`} />
            </td>
           
          </tr>
        </tbody>
      </table>
     
    </div>
  );
};

export default ProductTable;
