import { Authority } from './Authority';

export interface User {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    job?: string;
    userRoles?: string[];
    status?: number;
    authorities?: Authority[];
}
