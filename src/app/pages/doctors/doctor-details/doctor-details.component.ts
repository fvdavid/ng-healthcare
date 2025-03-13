import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Doctor } from '../../../services/doctors.service';
import { Gender } from '../../../model/gender';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Fluid } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
    selector: 'app-doctor-details',
    imports: [FormsModule, InputTextModule, Fluid, InputNumberModule, SelectModule, ButtonModule, TextareaModule, InputMaskModule],
    templateUrl: './doctor-details.component.html',
    styleUrl: './doctor-details.component.scss'
})
export class DoctorDetailsComponent {
    public config = inject(DynamicDialogConfig);
    public ref = inject(DynamicDialogRef);

    doctor: Doctor = this.config.data.doctor;

    gender: Gender[] | undefined;

    constructor() {
        this.gender = [
            {
                name: 'Laki-laki',
                id: 1
            },
            {
                name: 'Wanita',
                id: 2
            }
        ];
    }

    hideDialog() {
        this.ref.close({
            buttonType: 'cancel',
            summary: 'Nothing has changed'
        });
    }

    saveProduct() {}
}
