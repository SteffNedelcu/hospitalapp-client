import { Room } from './Room';
export interface Floor {
    id?: number;
    code?: string;
    status?: number;
    roomList?: Room[];
}
