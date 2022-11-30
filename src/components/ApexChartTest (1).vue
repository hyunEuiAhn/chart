<template>
    <div class="flex">
        <!-- <div
            :class="`testBox${idx}`"
            v-for="(val, idx) in Array(4000)"
            :key="idx"
            :style="{ width: '10px', height: '10px', backgroundColor: `rgb(20,${Math.floor(Math.random() * 100) + 150},20)` }"
        ></div> -->
        <div style="padding: 30px">
            <apexchart type="line" height="700" width="1600" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { categories, transducer, scaler } from "./calcFunc.js";
import preData from "./data/response_ytm_pre.json";
import todayData from "./data/response_ytm_today.json";
import dotData from "./data/else.json";
export default {
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const chartOptions = ref({
            chart: {
                height: 350,
                type: "line",
                animations: {
                    enabled: false,
                },
                fill: {
                    type: "solid",
                },
                markers: {
                    size: 6,
                },
                zoom: {
                    enabled: false,
                },
            },
            annotations: {},
            colors: ["red", "green", "blue", "red", "green", "blue", "grey"],
            legend: {
                position: "right",
                offsetY: 200,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: [2, 2, 2, 2, 2, 2, 2],
                curve: "straight",
                dashArray: [8, 8, 8, 0, 0, 0, 0],
                colors: ["#FF4560", "#4CAF50", "#008FFB", "#FF4560", "#4CAF50", "#008FFB", "#A5978B"],
            },
            grid: {
                show: true,
                borderColor: "#E1E1E1",
                // strokeDashArray: 10,
                position: "back",
                opacity: 0.1,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: { top: 50, left: 50 },
            },
            title: {
                text: "Apex Chart",
                align: "left",
            },
            markers: {
                size: 3,
            },
            xaxis: {
                type: "numeric",
                min: -1,
                max: 27,
                tickAmount: 28,
                labels: {
                    show: true,
                    formatter: function (val) {
                        if (categories[val] == null) return "";
                        else return categories[val];
                    },
                },
            },
            yaxis: {
                min: 1,
                max: 3.5,
                showAlways: true,
            },
        });
        return {
            series,
            chartOptions,
        };
    },
};
</script>
