
import { Bed } from './Bed';
export interface Room {
    id?: number;
    code?: string;
    status?: number;
    sex?: string;
    bedList?: Bed[];
}
