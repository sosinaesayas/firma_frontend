import  {LimitedTenderData} from '../interfaces/limitedData';
const initialLimitedTender : LimitedTenderData ={
    tender_id: "",
    startDate: "",
    endDate: "",
    tenderCategory: [],
    openDate: "",
    bidType: "International",
    title: "",
    description: "",
    invitedCompanies : [], 
    bidDocumentPrice: "",
    cpoAmount: "",
    sampleRequired: true,
    sampleAddress: "",
    currency: "ETB",
    region: "Addis Ababa",
    products: [],
    tenderType: "Limited",
    remark: "-",
    companies:[],
  };

  export default initialLimitedTender;