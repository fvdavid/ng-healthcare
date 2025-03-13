import { Doctor } from "../services/doctors.service";
import { Patient } from "./patient";

export interface Appointment {
    id?: string;
    patient?: Patient;
    doctor?: Doctor;
    appointmentDate?: string;
    appointmentTime?: string;
    department?: string;
    createAt?: string;
    status?: string;
}
