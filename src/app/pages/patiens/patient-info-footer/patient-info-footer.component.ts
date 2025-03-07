import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-patient-info-footer',
    imports: [ButtonModule],
    template: `
        <div class="flex w-full justify-end mt-4">
            <p-button type="button" label="Keluar" icon="pi pi-times" (click)="closeDialog({ buttonType: 'Cancel', summary: 'No Patient Selected' })" />
        </div>
    `,
    styles: ``
})
export class PatientInfoFooterComponent {
    ref: DynamicDialogRef = inject(DynamicDialogRef);

    closeDialog(data: { buttonType: string; summary: string }) {
        this.ref.close(data);
    }
}
