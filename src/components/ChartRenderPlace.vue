<template>
    <div style="width: 100%; height: 100%">
        <ChartTest></ChartTest>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import ChartTest from "./ChartTest.vue";

export default {
    components: {
        ChartTest,
    },
    props: ["propkey"],
    setup(props, { slots, attrs, emit }) {
        let startAt = new Date().getTime();
        onMounted(() => {
            let endAt = new Date().getTime();
            console.log("rendering time : " + (endAt - startAt));
        });
        return {};
    },
};
</script>
