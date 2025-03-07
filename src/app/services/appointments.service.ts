import { Injectable } from '@angular/core';
import { Doctor } from './doctors.service';
import { Patient } from '../model/patient';

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

@Injectable()
export class AppointmentsService {
    constructor() {}

    getDataAppointments() {
        return [
            {
                id: 'fv01',
                patient: {
                    id: 1,
                    name: 'Estrella Samu',
                    age: 25,
                    gender: {
                        name: 'Laki-laki',
                        id: 1
                    },
                    contactNumber: '08123456789',
                    date: '2023-10-01',
                    status: 'active',
                    address: 'Jln Panglima denai',
                    city: 'Medan',
                    province: 'Sumatera Utara',
                    photoProfile: 'bernardodominic.png'
                },
                doctor: {
                    id: 1,
                    name: 'Dr Stevens, Charles T',
                    photoProfile: 'stephenshaw.png',
                    age: 37,
                    gender: {
                        name: 'Laki-laki',
                        id: 1
                    },
                    specialty: 'Dokter Umum',
                    contactNumber: '08123456789',
                    date: '2023-10-01',
                    address: 'Jln Sisingamangaraja',
                    city: 'Medan',
                    province: 'Sumatera Utara'
                },
                appointmentDate: '2025-04-21',
                appointmentTime: '10:00',
                department: 'Endocrinology',
                createAt: '2025-02-10',
                status: 'active'
            },
            {
                id: 'fv02',
                patient: {
                    id: 2,
                    name: 'Tiffiny Steffensmeier',
                    age: 30,
                    gender: {
                        name: 'Wanita',
                        id: 2
                    },
                    contactNumber: '08123456789',
                    date: '2023-10-01',
                    status: 'active',
                    address: 'Jln Katamso 109',
                    city: 'Medan',
                    province: 'Sumatera Utara',
                    photoProfile: 'ivanmagalhaes.png'
                },
                doctor: {
                    id: 2,
                    name: 'Dr Elvera Benimadho',
                    photoProfile: 'onyamalimba.png',
                    age: 42,
                    gender: {
                        name: 'Laki-laki',
                        id: 1
                    },
                    specialty: 'Dokter Umum',
                    contactNumber: '08123456789',
                    date: '2023-10-01',
                    address: 'Jln Sisingamangaraja',
                    city: 'Medan',
                    province: 'Sumatera Utara'
                },
                appointmentDate: '2025-02-21',
                appointmentTime: '14:10',
                department: 'Cardiology',
                createAt: '2025-02-21',
                status: 'cancelled'
            }
        ];
    }

    getAppointment() {
        return Promise.resolve(this.getDataAppointments());
    }
}
