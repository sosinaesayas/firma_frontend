import ProductData from './productsData';
export interface TenderDetail {
    id: string,
    _id : string,
    deadlineInDays: number,
    title:string,
    description: string,
    tenderType: string,
    closingDate:string,
    status: string, 
    applied : string | null,
    purchased : boolean | null,
    tenderCategory : string,
    cpoAmount : number | null,
    products : ProductData[], 
    additionalCost : string[], 
    sampleRequired : boolean,
    sampleAddress : string | null,
}