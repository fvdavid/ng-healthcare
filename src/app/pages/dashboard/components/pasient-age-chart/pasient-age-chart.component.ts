import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-pasient-age-chart',
    imports: [ButtonModule, MenuModule, ChartModule],
    template: `
        <div class="card h-full">
            <div class="mb-6">
                <div class="font-semibold text-xl">Pasien Berdasarkan Umur</div>
            </div>

            <div class="card flex justify-center">
                <p-chart type="doughnut" [data]="data" [options]="options" />
            </div>
        </div>
    `
})
export class PasientAgeChartComponent implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');

            this.data = {
                labels: ['Balita', 'Remaja', 'Dewasa', 'Langsia'],
                datasets: [
                    {
                        data: [300, 50, 100, 75],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-green-500'), documentStyle.getPropertyValue('--p-purple-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-green-400'), documentStyle.getPropertyValue('--p-purple-400')]
                    }
                ]
            };

            this.options = {
                cutout: '60%',
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.cd.markForCheck();
        }
    }
}
