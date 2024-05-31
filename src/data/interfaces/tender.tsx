interface TenderTableData{
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
    
}



export default TenderTableData;