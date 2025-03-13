import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AppointmentsService } from '../../services/appointments.service';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { PatiensService } from '../../services/patiens.service';
import { Doctor, DoctorsService } from '../../services/doctors.service';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { Patient } from '../../model/patient';
import { Appointment } from '../../model/appointment';

@Component({
    selector: 'app-appointments',
    imports: [TableModule, IconFieldModule, InputIconModule, InputTextModule, ButtonModule, MultiSelectModule, FormsModule, DatePipe, TagModule, SelectModule],
    templateUrl: './appointments.component.html',
    styleUrl: './appointments.component.scss',
    providers: [AppointmentsService, DialogService, PatiensService, DoctorsService]
})
export class AppointmentsComponent {
    loading: boolean = true;

    appointmentsService = inject(AppointmentsService);
    appointments: Appointment[] = [];

    @ViewChild('filter') filter!: ElementRef;

    ref: DynamicDialogRef | undefined;
    dialogService: DialogService = inject(DialogService);

    patiensService: PatiensService = inject(PatiensService);
    patients: Patient[] = [];

    doctors: Doctor[] = [];
    doctorsService: DoctorsService = inject(DoctorsService);

    statuses: any[] = [];

    constructor() {
        this.appointmentsService.getAppointment().then((a) => {
            this.appointments = a;
            this.loading = false;

            // @ts-ignore
            this.appointments.forEach((p) => (p.appointmentDate = new Date(p.appointmentDate)));
        });

        this.patiensService.getPatiens().then((p) => {
            this.patients = p;
        });

        this.doctorsService.getDoctors().then((d) => {
            this.doctors = d;
        });
    }

    ngOnInit() {
        this.statuses = [
            { label: 'Active', value: 'active' },
            { label: 'Pending', value: 'pending' },
            { label: 'Cancelled', value: 'cancelled' },
            { label: 'Info', value: 'info' }
        ];
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement!.value = '';
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    editAppointment(appointment: Appointment) {
        this.ref = this.dialogService.open(AppointmentDetailsComponent, {
            header: 'Appointment Details',
            width: '450px',
            modal: true,
            contentStyle: { overflow: 'auto' },
            data: {
                appointment: appointment
            },
            closable: true,
            position: 'center'
        });

        this.ref.onClose.subscribe((data: any) => {
            let summary_and_detail;
            if (data) {
                const buttonType = data?.buttonType;
                summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
            } else {
                summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            }
            // this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
        });

        this.ref.onMaximize.subscribe((value) => {
            // this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }

    getSeverity(status: string) {
        switch (status) {
            case 'active':
                return 'success';

            case 'pending':
                return 'warn';

            case 'cancelled':
                return 'danger';

            default:
                return 'info';
        }
    }
}
