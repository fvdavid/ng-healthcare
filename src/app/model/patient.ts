import { Gender } from './gender';

export interface Patient {
    id?: number;
    name?: string;
    age?: number;
    gender?: Gender;
    contactNumber?: string;
    date?: string;
    status?: string;
    address?: string;
    city?: string;
    province?: string;
    photoProfile?: string;
    patientRecords?: PatientRecord[];
}

export interface PatientRecord {
    diagnosis?: string;
    treatment?: string;
    medications?: string[];
    lastVisitDate?: string;
}
