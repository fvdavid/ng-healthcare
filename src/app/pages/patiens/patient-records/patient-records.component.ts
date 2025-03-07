import { PatientRecord } from './../../../model/patient';
import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Patient } from '../../../model/patient';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-patient-records',
    imports: [TableModule],
    templateUrl: './patient-records.component.html',
    styleUrl: './patient-records.component.scss'
})
export class PatientRecordsComponent {

    public config = inject(DynamicDialogConfig);
    patien: Patient = this.config.data.patientInfo;

    records: PatientRecord[] = [];

    constructor() {}

    ngOnInit() {
        this.records = this.patien.patientRecords!;
    }
}
