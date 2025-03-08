import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Patient, PatientInsurance } from '../../../model/patient';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-insurance-info',
    imports: [TableModule],
    templateUrl: './insurance-info.component.html',
    styleUrl: './insurance-info.component.scss'
})
export class InsuranceInfoComponent implements OnInit {
    public config = inject(DynamicDialogConfig);
    patien: Patient = this.config.data.patientInfo;

    patientInsurances: PatientInsurance[] = [];

    ngOnInit() {
        this.patientInsurances = this.patien.patientInsurance!;
    }
}
