import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { PatientRecordsComponent } from "../patient-records/patient-records.component";
import { InsuranceInfoComponent } from "../insurance-info/insurance-info.component";

@Component({
  selector: 'app-patient-info',
  imports: [TabsModule, PatientRecordsComponent, InsuranceInfoComponent],
  templateUrl: './patient-info.component.html',
  styleUrl: './patient-info.component.scss'
})
export class PatientInfoComponent {

}
