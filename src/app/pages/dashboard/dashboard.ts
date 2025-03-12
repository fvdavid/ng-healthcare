import { Component } from '@angular/core';
import { StatsWidget } from './components/statswidget';
import { PasientChartComponent } from './components/pasient-chart/pasient-chart.component';
import { PasientAgeChartComponent } from './components/pasient-age-chart/pasient-age-chart.component';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, PasientChartComponent, PasientAgeChartComponent],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />

            <div class="col-span-12 xl:col-span-8">
                <app-pasient-chart />
            </div>

            <div class="col-span-12 xl:col-span-4">
                <app-pasient-age-chart />
            </div>
        </div>
    `
})
export class Dashboard {}
