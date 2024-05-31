import { useState } from 'react';
import '../../../../../styles/product_table.css';

const ProductTable = () => {
  const [rows, setRows] = useState([{}]);

  const addRow = () => {
    setRows([...rows, {}]);
  };

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
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input type="text" name={`item-${index}`} />
              </td>
              <td>
                <input type="text" name={`unit-${index}`} />
              </td>
              <td>
                <input type="text" name={`quantity-${index}`} />
              </td>
              <td>
                <input type="text" name={`unitPrice-${index}`} />
              </td>
             
            </tr>
          ))}
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
      <div className="add-button-container">
        <button type="button" onClick={addRow}>Add Line Item</button>
      </div>
    </div>
  );
};

export default ProductTable;
