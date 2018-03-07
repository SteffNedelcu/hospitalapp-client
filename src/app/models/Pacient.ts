export interface Pacient {
    id?: number;
    cnp?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    job?: string;
    birthdate?: string;
    statusAsigurat?: string;
    diagnosticList?: Array<string>;
}
