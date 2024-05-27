import { ProductsData } from "./productsData";

export interface LimitedTenderData {
    tender_id: string;
    startDate: string;
    endDate: string;
    tenderCategory: string[];
    openDate: string;
    bidType: string;
    title: string;
    invitedCompanies : [], 
    description: string;
    bidDocumentPrice: string;
    cpoAmount: string;
    sampleRequired: boolean;
    sampleAddress: string;
    currency: string;
    region: string;
    products: ProductsData[];
    tenderType : string, 
    remark : string,
    companies: string[]
  }
  