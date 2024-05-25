import  {TenderFormData} from '../interfaces/tenderFormData';
const initialPublicTender : TenderFormData ={
    tender_id: "",
    startDate: "",
    endDate: "",
    tenderCategory: [],
    openDate: "",
    bidType: "International",
    title: "",
    description: "",
    bidDocumentPrice: "",
    cpoAmount: "",
    sampleRequired: true,
    sampleAddress: "",
    currency: "ETB",
    region: "",
    products: [],
    tenderType: "Public",
    remark: "",
  };

  export default initialPublicTender;