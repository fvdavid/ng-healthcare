import { RadioButtonModule } from 'primeng/radiobutton';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Select, SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { Patient } from '../../../services/patiens.service';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';
import { Fluid } from 'primeng/fluid';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { Gender } from '../../../model/gender';

@Component({
    selector: 'app-patien-details',
    imports: [FormsModule, SelectModule, RadioButtonModule, InputNumberModule, InputTextModule, TextareaModule, InputMaskModule, Fluid, TextareaModule, IconFieldModule, InputIconModule, ButtonModule, Select],
    templateUrl: './patien-details.component.html',
    styleUrl: './patien-details.component.scss'
})
export class PatienDetailsComponent {
    public config = inject(DynamicDialogConfig);
    public ref = inject(DynamicDialogRef);

    patien: Patient = this.config.data.patient;

    gender: Gender[] | undefined;

    constructor() {
        // console.log('config ==> ', this.patien);

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

    saveProduct() {}

    hideDialog() {
        this.ref.close({
            buttonType: 'cancel',
            summary: 'No Technician Selected'
        });
    }
}
