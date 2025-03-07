import { Component, ElementRef, inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Doctor, DoctorsService } from '../../services/doctors.service';
import { Table, TableModule } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-doctors',
    imports: [FormsModule, TableModule, IconFieldModule, InputIconModule, SliderModule, ButtonModule, InputTextModule],
    templateUrl: './doctors.component.html',
    styleUrl: './doctors.component.scss',
    providers: [DoctorsService, DialogService]
})
export class DoctorsComponent implements OnInit, OnDestroy {
    loading: boolean = true;
    activityValues: number[] = [0, 100];

    doctors: Doctor[] = [];
    doctorsService: DoctorsService = inject(DoctorsService);

    @ViewChild('filter') filter!: ElementRef;

    ref: DynamicDialogRef | undefined;
    dialogService: DialogService = inject(DialogService);

    ngOnInit() {
        this.doctorsService.getDoctors().then((d) => {
            this.doctors = d;
            this.loading = false;

            // @ts-ignore
            this.doctors.forEach((p) => (p.date = new Date(p.date)));
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement!.value = '';
    }

    editDoctor(doctor: Doctor) {
        this.ref = this.dialogService.open(DoctorDetailsComponent, {
            header: 'Dokter Details',
            width: '450px',
            modal: true,
            contentStyle: { overflow: 'auto' },
            data: {
                doctor: doctor
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

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}
