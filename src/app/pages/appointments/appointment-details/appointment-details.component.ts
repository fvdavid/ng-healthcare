import { DatePickerModule } from 'primeng/datepicker';
import { Component, computed, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Appointment } from '../../../services/appointments.service';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { PatiensService, Patient } from '../../../services/patiens.service';
import { Doctor, DoctorsService } from '../../../services/doctors.service';

@Component({
    selector: 'app-appointment-details',
    imports: [FormsModule, Fluid, DatePickerModule, ButtonModule, InputTextModule, SelectModule],
    templateUrl: './appointment-details.component.html',
    styleUrl: './appointment-details.component.scss',
    providers: [PatiensService, DoctorsService]
})
export class AppointmentDetailsComponent implements OnInit {
    public config = inject(DynamicDialogConfig);
    public ref = inject(DynamicDialogRef);

    appointment: Appointment = this.config.data.appointment;

    patiensService: PatiensService = inject(PatiensService);
    patiens: Patient[] = [];

    doctorsService: DoctorsService = inject(DoctorsService);
    doctors: Doctor[] = [];

    constructor() {}

    ngOnInit(): void {
        this.patiensService.getPatiens().then((p) => {
            this.patiens = p;
        });

        this.doctorsService.getDoctors().then((d) => {
            this.doctors = d;
        });
    }

    saveAppointment() {
        console.log('appointment ==> ', this.appointment);
    }

    hideDialog() {
        this.ref.close({
            buttonType: 'cancel',
            summary: 'No Technician Selected'
        });
    }
}
