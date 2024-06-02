import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { updateProductBid } from "../bid_tender_slice";

const ProductTable = () => {
  const tenderDetail = useSelector((state: RootState) => state.bidTender.tenderDetail);
  const products = useSelector((state: RootState) => state.bidTender.tenderDetail?.products);
  const formProducts = useSelector((state: RootState) => state.bidTender.formData.productsBid);
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (
    index: number,
    field: "price" | "quantity" | "id",
    value: string
  ) => {
    dispatch(updateProductBid({ index, field, value }));
  };

  return (
    <div className="form-container p-1 pb-4">
      <table className="product-table">
        <thead className="mb-7 bg-blue-900 text-white">
          <tr className="mb-7 bg-blue-900">
            <th className="px-4 py-2 bg-blue-900">Item</th>
            <th className="px-4 py-2 bg-blue-900">Unit</th>
            <th className="px-4 py-2 bg-blue-900">Quantity</th>
            <th className="px-4 py-2 bg-blue-900">Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-black bg-white shadow">
                  {product.short_text}
                </td>
                <td className="px-4 py-2 text-black bg-white shadow">
                  {product.unit}
                </td>
                <td className="px-4 py-2 bg-white shadow">
                  <input
                    type="text"
                    className="input-with-shadow w-full"
                    value={formProducts[index]?.quantity}
                    onChange={(e) =>
                      handleInputChange(index, "quantity", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2 bg-white shadow">
                  <input
                    type="text"
                    className="input-with-shadow w-full"
                    value={formProducts[index]?.price}
                    onChange={(e) =>
                      handleInputChange(index, "price", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
