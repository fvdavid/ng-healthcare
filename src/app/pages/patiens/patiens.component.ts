import { Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { PatiensService, Patient } from '../../services/patiens.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PatienDetailsComponent } from './patien-details/patien-details.component';

@Component({
    selector: 'app-patiens',
    imports: [TableModule, IconFieldModule, TagModule, FormsModule, ButtonModule, FormsModule, SelectModule, InputIconModule, InputTextModule, SliderModule, ProgressBarModule, MultiSelectModule],
    templateUrl: './patiens.component.html',
    styleUrl: './patiens.component.scss',
    providers: [PatiensService, DialogService]
})
export class PatiensComponent implements OnDestroy {
    loading: boolean = true;
    activityValues: number[] = [0, 100];

    @ViewChild('filter') filter!: ElementRef;

    patiensService: PatiensService = inject(PatiensService);
    patients: Patient[] = [];

    ref: DynamicDialogRef | undefined;
    dialogService: DialogService = inject(DialogService);

    ngOnInit() {
        this.patiensService.getPatiens().then((p) => {
            this.patients = p;
            this.loading = false;

            // @ts-ignore
            this.patients.forEach((p) => (p.date = new Date(p.date)));
        });
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement!.value = '';
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    editPatient(patient: Patient) {
        this.ref = this.dialogService.open(PatienDetailsComponent, {
            header: 'Patient Details',
            width: '450px',
            modal: true,
            contentStyle: { overflow: 'auto' },
            data: {
                patient: patient
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
