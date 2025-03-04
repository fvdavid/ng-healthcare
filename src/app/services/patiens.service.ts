import { Injectable } from '@angular/core';
import { Gender } from '../model/gender';

export interface Doctor {
    id?: number;
    name?: string;
    image?: string;
    specialty?: string;
}

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
}

@Injectable()
export class PatiensService {
    getData() {
        return [
            {
                id: 1,
                name: 'John Doe',
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
                province: 'Sumatera Utara'
            },
            {
                id: 2,
                name: 'Alex Smith',
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
                province: 'Sumatera Utara'
            },

            {
                id: 3,
                name: 'John Doe',
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
                province: 'Sumatera Utara'
            },
            {
                id: 4,
                name: 'Alex Smith',
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
                province: 'Sumatera Utara'
            },
            {
                id: 5,
                name: 'John Doe',
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
                province: 'Sumatera Utara'
            },
            {
                id: 6,
                name: 'Alex Smith',
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
                province: 'Sumatera Utara'
            },

            {
                id: 7,
                name: 'John Doe',
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
                province: 'Sumatera Utara'
            },
            {
                id: 8,
                name: 'Alex Smith',
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
                province: 'Sumatera Utara'
            },
            {
                id: 9,
                name: 'John Doe',
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
                province: 'Sumatera Utara'
            },
            {
                id: 10,
                name: 'Alex Smith',
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
                province: 'Sumatera Utara'
            }
        ];
    }

    getPatiens() {
        return Promise.resolve(this.getData()); // .slice(0, 200));
    }
}
