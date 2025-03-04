import { Injectable } from '@angular/core';
import { Gender } from '../model/gender';

export interface Doctor {
    id?: number;
    name?: string;
    image?: string;
    specialty?: string;
    age?: number;
    gender?: Gender;
    contactNumber?: string;
    date?: string;
    address?: string;
    city?: string;
    province?: string;
}

@Injectable()
export class DoctorsService {
    constructor() {}

    getDataDoctors() {
        return [
            {
                id: 1,
                name: 'Ferdinan Alfian',
                image: 'https://randomuser.me/api/portraits',
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
            }
        ];
    }

    getDoctors() {
        return Promise.resolve(this.getDataDoctors());
    }
}
