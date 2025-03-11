import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, ChartModule],
    template: `
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="mb-0 border border-red-800 rounded-3xl">
                <div class="flex justify-evenly mb-4 dark:bg-cyan-500 bg-cyan-200 rounded-3xl pt-2 pb-2">
                    <div>
                        <span class="block font-medium mb-4 text-xl">Total Pasien</span>
                        <div class="text-surface-900 dark:text-surface-0 font-bold text-[2rem]">152</div>
                    </div>

                    <div class="flex flex-col-reverse items-center justify-center">
                        <span class="text-primary dark:text-cyan-900 font-medium text-lg">%52+ </span>
                        <span class="">Seminggu Terakhir</span>

                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-arrow-up-right text-blue-500 !text-xl"></i>
                        </div>
                    </div>
                </div>

                <div>
                    <p-chart height="70" type="line" [data]="data" [options]="options" />
                </div>
            </div>
        </div>

        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="mb-0 border border-red-800 rounded-3xl">
                <div class="flex justify-evenly mb-4 dark:bg-green-500 bg-green-200 rounded-3xl pt-2 pb-2">
                    <div>
                        <span class="block font-medium mb-4 text-xl">Total Temu Janji</span>
                        <div class="text-surface-900 dark:text-surface-0 font-bold text-[2rem]">302</div>
                    </div>

                    <div class="flex flex-col-reverse items-center justify-center">
                        <span class="text-primary font-medium dark:text-cyan-900 text-lg">%52+ </span>
                        <span class="">Seminggu Terakhir</span>

                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-arrow-up-right text-blue-500 !text-xl"></i>
                        </div>
                    </div>
                </div>

                <div>
                    <p-chart height="70" type="line" [data]="data" [options]="options" />
                </div>
            </div>
        </div>

        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="mb-0 border border-red-800 rounded-3xl">
                <div class="flex justify-evenly mb-4 dark:bg-purple-500 bg-purple-200 rounded-3xl pt-2 pb-2">
                    <div>
                        <span class="block font-medium mb-4 text-xl">Total Dokter</span>
                        <div class="text-surface-900 dark:text-surface-100 font-bold text-[2rem]">75</div>
                    </div>

                    <div class="flex flex-col-reverse items-center justify-center">
                        <span class="text-primary font-medium text-lg">%2+ </span>
                        <span class="">Seminggu Terakhir</span>

                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-arrow-up-right text-blue-500 !text-xl"></i>
                        </div>
                    </div>
                </div>

                <div>
                    <p-chart height="70" type="line" [data]="data" [options]="options" />
                </div>
            </div>
        </div>

        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="mb-0 border border-red-800 rounded-3xl">
                <div class="flex justify-evenly mb-4 dark:bg-red-500 bg-red-200 rounded-3xl pt-2 pb-2">
                    <div>
                        <span class="block font-medium mb-4 text-xl">UGD</span>
                        <div class="text-surface-900 dark:text-surface-100 font-bold text-[2rem]">75</div>
                    </div>

                    <div class="flex flex-col-reverse items-center justify-center">
                        <span class="text-primary font-medium text-lg">%2+ </span>
                        <span class="">Seminggu Terakhir</span>

                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-arrow-up-right text-blue-500 !text-xl"></i>
                        </div>
                    </div>
                </div>

                <div>
                    <p-chart height="70" type="line" [data]="data" [options]="options" />
                </div>
            </div>
        </div>
    `
})
export class StatsWidget implements OnInit {
    data: any;
    options: any;

    platformId = inject(PLATFORM_ID);

    backgroundColor: string = '';
    documentStyle = getComputedStyle(document.documentElement);

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            this.data = {
                labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
                datasets: [
                    {
                        label: 'Pasien',
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        backgroundColor: documentStyle.getPropertyValue('--p-slate-100'),
                        // : documentStyle.getPropertyValue('--p-slate-100'),
                        yAxisID: 'y',
                        tension: 0.2,
                        data: [65, 59, 80, 81, 56, 55, 10]
                    }
                ]
            };

            this.options = {
                stacked: false,
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        display: false
                        // labels: {
                        //     color: textColor
                        // }
                    }
                },
                scales: {
                    x: {
                        display: false,
                        ticks: {
                            color: textColorSecondary,
                            display: false
                        },
                        grid: {
                            color: surfaceBorder,
                            display: false //hide grid
                        }
                    },
                    y: {
                        type: 'linear',
                        display: false, //hide y axis
                        position: 'left',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            display: false //hide grid
                        }
                    }
                }
            };

            this.cd.markForCheck();
        }
    }
}
