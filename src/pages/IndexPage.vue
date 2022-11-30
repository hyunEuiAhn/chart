<template>
    <q-page class="flex flex-top">
        <div class="flex" :style="{ width: '100%', height: '800px' }" ref="idxPage">
            <div style="width: 80%; height: 80%"><ChartRenderPlace :key="reRenderKey"></ChartRenderPlace></div>
            <div style="width: 20%; height: 80%"><ReRenderer @rerender="reRednering"></ReRenderer></div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";
import ChartRenderPlace from "components/ChartRenderPlace.vue";
import ReRenderer from "components/ReRenderer.vue";

export default defineComponent({
    components: {
        ChartRenderPlace,
        ReRenderer,
    },
    setup() {
        const reRenderKey = ref(0);
        const reRednering = function () {
            reRenderKey.value++;
        };
        return {
            reRenderKey,
            reRednering,
        };
    },
});
</script>
