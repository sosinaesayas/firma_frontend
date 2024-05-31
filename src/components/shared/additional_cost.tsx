
import React from "react";
import Select, { MultiValue } from "react-select";
import {fetchAdditionalCosts} from "../../features/post_tenders/post_tender_api";

interface Cost{
    value: string;
    label: string;

}
interface CostsSelectProps {
    handleAdditionalCostChange: (selectedOptions: MultiValue<Cost>) => void;
}



const AdditionalCostsSelect: React.FC<CostsSelectProps> = ({ handleAdditionalCostChange }) => {
    const [AdditionalCosts, setAdditionalCosts] = React.useState<Cost[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchAdditionalCosts().then((response) => {
            console.log("AdditionalCosts response:", response.data);  
            const AdditionalCosts = response.data.map((cost: string) => {
                return { value: cost , label: cost };
            });

            setAdditionalCosts(AdditionalCosts);
            setLoading(false);
        });
    }, []);

    return (
      <div>
        
        <Select
            isMulti
            options={AdditionalCosts}
            onChange={handleAdditionalCostChange}
            isLoading={loading}
        />
      </div>
    );
};

export default AdditionalCostsSelect;
