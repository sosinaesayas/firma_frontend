import  {LimitedTenderData} from '../interfaces/limitedData';
const initialDirectPurchaseTender : LimitedTenderData ={
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
    tenderType: "Direct purchase",
    remark: "-",
    companies:[],
  };

  export default initialDirectPurchaseTender;