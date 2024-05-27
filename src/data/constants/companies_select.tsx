
import React from "react";
import Select, { MultiValue } from "react-select";
import { fetchCompanies } from "../../features/create_tenders/components/limited_tender/limited_tender_api";

interface Company {
    value: string;
    label: string;
}

interface CompaniesSelectProps {
    handleCompanyChange: (selectedOptions: MultiValue<Company>) => void;
}

const CompaniesSelect: React.FC<CompaniesSelectProps> = ({ handleCompanyChange }) => {
    const [companies, setCompanies] = React.useState<Company[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchCompanies().then((response) => {
            console.log("Companies response:", response.data);  
            const companies = response.data.map((company: { _id: string; companyName: string }) => {
                return { value: company._id, label: company.companyName };
            });

            console.log("Companies fetched:", companies)
            setCompanies(companies);
            setLoading(false);
        });
    }, []);

    return (
      <div>
        
        <Select
            isMulti
            options={companies}
            onChange={handleCompanyChange}
            isLoading={loading}
        />
      </div>
    );
};

export default CompaniesSelect;
