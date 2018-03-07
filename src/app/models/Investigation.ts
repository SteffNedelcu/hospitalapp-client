export interface Investigation {
    id?: number;
    name?: string;
    codeCIM?: string;
    code?: string;
    observations?: string;
    dateRequest?: string;
    dateCheckin?: string;
    dateCheckout?: string;
    dateSampling?: string;
    status?: number;
}
