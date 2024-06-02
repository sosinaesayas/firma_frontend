interface TechnicalDocument {
    technicalDocuments: string[];
    cpoDocument: string[];
}

interface Company {
    address: string;
    tinNumber: string;
    logo: string;
    phone1: string;
    country: string;
    vatNumber: string;
    vatCertificate: string;
    businessRegistrationNumber: string;
    submittedDate: string;
}

interface Tender {
    title: string;
    description: string;
    id: string;
}

interface Product {
    short_text: string;
    quantity: number;
    price: number;
    amount: number;
    unit: string;
}

export interface FinancialQuotation{
    technicalDocuments: TechnicalDocument;
    company: Company;
    tender: Tender;
    products: Product[];
    additionalCost: number;
    subtotal: number;
    tax: number;
    taxedAmount: number;
    discount: number;
    discountAmount: number;
    total: number;
    attachedFiles: string[];
    technicalGrade: any;
}
