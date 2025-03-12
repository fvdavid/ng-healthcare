import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { debounceTime, Subscription } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '../../../../layout/service/layout.service';

@Component({
    selector: 'app-pasient-chart',
    imports: [ChartModule, SelectModule, FormsModule],
    template: `
        <div class="card">
            <div class="flex items-center justify-between font-semibold mb-4">
                <p class="text-2xl">Pasien</p>

                <p-select (onChange)="selectedPicked($event)" [options]="selectDescriptions" [(ngModel)]="selectedDesc" optionLabel="name" />
            </div>
            <p-chart type="bar" [data]="chartData" [options]="chartOptions" />
        </div>
    `,
    styles: ``
})
export class PasientChartComponent implements OnInit {
    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    selectedDesc = { name: 'Monthly' };
    selectDescriptions = [
        {
            name: 'Monthly'
        },
        {
            name: 'Yearly'
        }
    ];

    selectedPicked(event: any) {
        if (event.value.name === 'Yearly') {
            this.initChartYearly();
        } else {
            this.initChartMonthly();
        }
    }

    constructor(public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initChartMonthly();
        });
    }

    ngOnInit() {
        this.initChartMonthly();
    }

    initChartMonthly() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartData = {
            labels: ['Januari', 'februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Rawat Inap',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                    data: [4000, 10000, 15000, 4000, 4000, 10000, 15000, 4000, 10000, 2000, 3500, 9530],
                    barThickness: 32,
                    borderRadius: {
                        topLeft: 0,
                        topRight: 0,
                        bottomLeft: 8,
                        bottomRight: 8
                    },
                    borderSkipped: false
                },
                {
                    type: 'bar',
                    label: 'Rawat Jalan',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    data: [2100, 8400, 2400, 7500, 2100, 8400, 2400, 7500, 4000, 10000, 15000, 4000],
                    barThickness: 32,
                    borderRadius: {
                        topLeft: 8,
                        topRight: 8,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    borderSkipped: false
                }
                // {
                //     type: 'bar',
                //     label: 'Affiliate',
                //     backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                //     data: [4100, 5200, 3400, 7400],
                //     borderRadius: {
                //         topLeft: 8,
                //         topRight: 8,
                //         bottomLeft: 0,
                //         bottomRight: 0
                //     },
                //     borderSkipped: false,
                //     barThickness: 32
                // }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: borderColor,
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };
    }

    initChartYearly() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartData = {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Rawat Inap',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                    data: [40000, 100000, 105000, 40000, 54000, 120000],
                    barThickness: 32,
                    borderRadius: {
                        topLeft: 0,
                        topRight: 0,
                        bottomLeft: 8,
                        bottomRight: 8
                    },
                    borderSkipped: false
                },
                {
                    type: 'bar',
                    label: 'Rawat Jalan',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    data: [21200, 28400, 70400, 30500, 92100, 102000],
                    barThickness: 32,
                    borderRadius: {
                        topLeft: 8,
                        topRight: 8,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    borderSkipped: false
                }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: borderColor,
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
