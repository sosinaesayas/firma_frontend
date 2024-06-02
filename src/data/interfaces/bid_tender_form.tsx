export interface FormDataInterface {
    tenderId: string;
    deliveryTimeline: string;
    productsBid: { price: string; quantity: string; id: string }[];
    additionalCost: number[];
    passcode: string;
    technicalDocument: File[];
    cpoDocument: File[];
    discount: number;
  }
  