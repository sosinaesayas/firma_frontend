
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import {  updateDiscount ,  updateDeliveryTimeline} from "../bid_tender_slice";
const DiscountAndTimeComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const discount = useSelector((state: RootState) => state.bidTender.formData.discount);
    const deliveryTimeline= useSelector((state: RootState) => state.bidTender.formData.deliveryTimeline);
   
    
    const handleDiscountChange = (value: string) => {
      const discount = parseFloat(value) || 0;
      dispatch(updateDiscount(discount));
    }

    const handleTimelineChange = (value: string) => {
        dispatch(updateDeliveryTimeline(value));
        }
        
  
    return(

        <div className=" flex justify-between  mb-4">
        <div  className="additional-cost-label w-1/2 px-2">
          <label className="block text-gray-700 font-bold mb-2">
               Discount
             </label>
 
         <input
               type="text"
               className="input-with-shadow w-full border border-4 "
               value={discount.toString() || ''}
               onChange={(e) => handleDiscountChange(e.target.value)}
             />
          </div>

          <div className="flex flex-col">
        <label className="mb-2">Timeline</label>
        <div className="relative">
          <input
            type="date"
            value={deliveryTimeline}
            onChange={(e) => handleTimelineChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
          <span className="absolute right-3 top-3">
            <i className="fa fa-calendar" />
          </span>
        </div>
      </div>
        </div>
       
    );
}

export default DiscountAndTimeComponent;