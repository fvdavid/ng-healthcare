import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { EmergencyContacts, Patient } from '../../../model/patient';

@Component({
    selector: 'app-emergency-contacts',
    imports: [TableModule],
    templateUrl: './emergency-contacts.component.html',
    styleUrl: './emergency-contacts.component.scss'
})
export class EmergencyContactsComponent implements OnInit {
    public config = inject(DynamicDialogConfig);
    patien: Patient = this.config.data.patientInfo;

    emergencyContacts: EmergencyContacts[] = [];

    ngOnInit() {
        this.emergencyContacts = this.patien.emergencyContacts!;
    }
}
