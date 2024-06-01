export interface Clarification{
    _id: string;
    question: string | null;
    tender: string;
    user: {
        _id: string;
        companyName: string;
        logo: string;
        email: string;
    };
    replies: ClarificationReply[];
    edited: boolean;
    editedTime: string | null;
    date: string;
    __v: number;
    canReply: boolean | null | undefined;
}

export  interface ClarificationReply {
    _id: string;
    reply: string;
    submittedBy: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

