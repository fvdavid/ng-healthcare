import { Component, inject } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Patient, PatientFlow } from '../../../model/patient';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-patient-flow',
    imports: [TableModule],
    templateUrl: './patient-flow.component.html',
    styleUrl: './patient-flow.component.scss'
})
export class PatientFlowComponent {
    public config = inject(DynamicDialogConfig);
    patien: Patient = this.config.data.patientInfo;

    patientFlows: PatientFlow[] = [];

    ngOnInit() {
        this.patientFlows = this.patien.patientFlow!;
    }
}
