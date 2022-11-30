<template>
    <div class = "flex" >
        <div id = "chart" style ="width: 100%; height: 400px;"/>
    </div> 
</template>

<script>
import bb, {line,areaSpline,scatter} from "billboard.js";
import "billboard.js/dist/theme/insight.css";
// import bb, { line, areaSpline } from "https://cdn.skypack.dev/billboard.js";
// import "https://cdn.skypack.dev/billboard.js/dist/theme/insight.css";

export default {
    async mounted() {
        const categories = [
            "1D",
            "1M",
            "3M",
            "6M",
            "9M",
            "1Y",
            "1Y6M",
            "2Y",
            "2Y6M",
            "3Y",
            "4Y",
            "5Y",
            "6Y",
            "7Y",
            "8Y",
            "9Y",
            "10Y",
            "12Y",
            "15Y",
            "17Y",
            "20Y",
            "25Y",
            "30Y",
            "35Y",
            "40Y",
            "45Y",
            "50Y",
        ];
        const tener2day = {
            "1D": 0,
            "1M": 30,
            "3M": 90,
            "6M": 180,
            "9M": 270,
            "1Y": 360,
            "1Y6M": 540,
            "2Y": 720,
            "2Y6M": 900,
            "3Y": 1080,
            "4Y": 1440,
            "5Y": 1800,
            "6Y": 2160,
            "7Y": 2520,
            "8Y": 2880,
            "9Y": 3240,
            "10Y": 3600,
            "12Y": 4320,
            "15Y": 5400,
            "17Y": 6120,
            "20Y": 7200,
            "25Y": 9000,
            "30Y": 10800,
            "35Y": 12600,
            "40Y": 14400,
            "45Y": 16200,
            "50Y": 18000,
        };
        const day2tener = {
            0: "1D",
            30: "1M",
            90: "3M",
            180: "6M",
            270: "9M",
            360: "1Y",
            540: "1Y6M",
            720: "2Y",
            900: "2Y6M",
            1080: "3Y",
            1440: "4Y",
            1800: "5Y",
            2160: "6Y",
            2520: "7Y",
            2880: "8Y",
            3240: "9Y",
            3600: "10Y",
            4320: "12Y",
            5400: "15Y",
            6120: "17Y",
            7200: "20Y",
            9000: "25Y",
            10800: "30Y",
            12600: "35Y",
            14400: "40Y",
            16200: "45Y",
            18000: "50Y",
        };
        const transducer = function(val) {
            if (typeof val == "string") return tener2day[val];
            else if (typeof val == "number") return day2tener[val];
            else return null;
        };
        const tenerRange = [0, 30, 90, 180, 270, 360, 540, 720, 900, 1080, 1440, 1800, 2160, 2520, 2880, 3240, 3600, 4320, 5400, 6120, 7200, 9000, 10800, 12600, 14400, 16200, 18000];
        const scaler = function(val) {
            if (val == 18000) return tenerRange.length - 1;
            for (let i = 1; i < tenerRange.length; i++) {
                if (val < tenerRange[i]) return i - 1 + (Math.floor((1 / (tenerRange[i] - tenerRange[i - 1])) * 100 + Number.EPSILON) / 100) * (val - tenerRange[i - 1]);
            }
            return null;
        };

        let test = [];
        let test2 = [];
        for (let i = 0; i < categories.length; i++) {
            test.push(i);
        }

        var chart = bb.generate({
            bindto: "#chart",
            axis: {
                x: {
                    tick: {
                        fit: true,
                        culling: false,
                        count: test.length,
                        value:test,
                        format: function(x) {
                            return categories[x];
                        }
                    }
                },
            },
            point: {
                pattern: [
                    "rectangle",
                    "rectangle",
                    "circle",
                    "circle",
                    "circle",
                ]
            },
            data: {
                xs: {
                    국고채: "x",
                    정부보증: "x",
                    통안증권: "x",
                    기타: "x",
                    test: "x1",
                },
                columns: [
                   ["x", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                   ["x1", 1.5, 2.1, 3.2, 4.6, 5.1, 6.9, 7.8, 8.4, 9.1, 10.2, 11.5, 12.5, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],

                    ["국고채", 1.188, 1.188, 1.188, 1.208, 1.293, 1.455, 1.773, 1.911, 2.292, 2.35, 2.48, 2.525, 2.645, 2.67, 2.702, 2.728, 2.732, 2.74, 2.72, 2.706, 2.695, 2.653, 2.63, 2.618, 2.608, 2.595, 2.585],
                    ["정부보증", 1.288, 1.288, 1.288, 1.308, 1.393, 1.585, 1.893, 2.181, 2.422, 2.47, 2.61, 2.655, 2.795, 2.89, 2.952, 2.938, 2.952, 2.98, 2.99, 2.96, 2.95, 2.753, 2.73, 2.698, 2.658, 2.615, 2.585],
                    ["통안증권", 1.126, 1.126, 1.126, 1.231, 1.333, 1.538, 1.976, 2.165, 2.282, 2.39],
                    ["기타", 1.126, 1.126, 1.126, 1.226, 1.326, 1.426, 1.526, 1.626, 1.726, 1.826],
                    ["test", 2.126, 2.126, 2.126, 2.226, 2.326, 2.426, 2.526, 2.626, 3, 3]
                ],
                types: {
                    국고채: line(),
                    정부보증: line(),
                    통안증권: line(),
                    기타: scatter(),
                    test: scatter(),
                },
                colors: {
                    국고채: "red",
                    정부보증: "blue",
                    통안증권: "green",
                    기타: "orange",
                },
                regions: {
                    국고채: [{
                        style: {
                            dasharray: "5 2"
                        }
                    }]
                }
            },
        });
    },
}; 
</script>