import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';

@Injectable()
export class PatiensService {
    getData(): Patient[] {
        return [
            {
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
                ]
            },
            {
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
                ]
            }
        ];
    }

    getPatiens() {
        return Promise.resolve(this.getData()); // .slice(0, 200));
    }
}
