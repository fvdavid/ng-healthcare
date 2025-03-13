import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';

@Injectable()
export class AppointmentsService {
    constructor() {}

    getDataAppointments(): Appointment[] {
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
                    photoProfile: 'bernardodominic.png',
                    patientRecords: [
                        {
                            diagnosis: 'Hypertension',
                            treatment: 'Prescribed meds',
                            medications: ['Lisinopril', 'X1', 'X2'],
                            lastVisitDate: '2025-10-12'
                        }
                    ],
                    patientFlow: [
                        {
                            checkInTime: '2025-10-12 09:00',
                            consultationTime: '2025-10-12 09:30',
                            dischargeTime: '2025-10-12 11:00',
                            currentStatus: 'Discharged'
                        }
                    ],
                    patientInsurance: [
                        {
                            provider: 'BPJS',
                            policyNumber: 'HC123456',
                            coverageType: 'Kelas III'
                        }
                    ],
                    emergencyContacts: [
                        {
                            name: 'Marina Br Tinambunan',
                            relationship: 'Ibu',
                            contactNumber: '0123-456-7891'
                        }
                    ]
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
                    photoProfile: 'ivanmagalhaes.png',
                    patientRecords: [
                        {
                            diagnosis: 'Diabetes Type 2',
                            treatment: 'Insulin therapy',
                            medications: ['Metformin'],
                            lastVisitDate: '2025-10-01'
                        }
                    ],
                    patientFlow: [
                        {
                            checkInTime: '2025-10-12 09:00',
                            consultationTime: '2025-10-12 09:30',
                            dischargeTime: '-',
                            currentStatus: 'In Consultation'
                        }
                    ],
                    patientInsurance: [
                        {
                            provider: 'MediShield',
                            policyNumber: 'MS789012',
                            coverageType: 'Basic'
                        }
                    ],
                    emergencyContacts: [
                        {
                            name: 'Aldo Siagian',
                            relationship: 'Ayah',
                            contactNumber: '0123-456-7891'
                        }
                    ]
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
