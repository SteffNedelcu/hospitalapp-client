import { BedPacient } from './BedPacient';
import { Diagnostic } from './Diagnostic';
import { Treatment } from './Treatment';
import { Investigation } from './Investigation';
import { VitalSigns } from './VitalSigns';

export interface MedicalForm {
    id?: number;
    code?: string;
    dateCheckUp?: string;
    dateCheckIn?: string;
    date_check_out?: string;
    observationsCheckUp?: string;
    observationsCheckIn?: string;
    observationsCheckOut?: string;
    status?: number;
    bedPacientList?: BedPacient[];
    treatmentList?: Treatment[];
    diagnosticList?: Diagnostic[];
    vitalSignsList?: VitalSigns[];
    investigationList?: Investigation[];
}
