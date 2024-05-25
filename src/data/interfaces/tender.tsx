interface TenderTableData{
    id : string , 
    title : string ,
    description : string ,   
    tenderType : string ,
    endDate : string , 
    status : string ,
    deadlineInDays : number ,
    tenderCategory : string[],
    cpoAmount: number ,
}



export default TenderTableData;