<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

                <q-toolbar-title> Chart Test </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered :key="innerDrawerKey">
            <div v-for="idx in Array(100)" :key="idx" style="width: 100%; height: 50px" ref="innerDrawer">
                <div
                    :style="{
                        backgroundColor: `rgb(${50},${50},${Math.floor(Math.random() * 100) + 155})`,
                        width: '100%',
                        height: '100%',
                    }"
                    @click="handleClick"
                ></div>
            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent, ref, onBeforeUpdate } from "vue";

export default defineComponent({
    name: "MainLayout",

    setup() {
        const leftDrawerOpen = ref(false);

        const innerDrawerKey = ref(0);
        const handleClick = function () {
            innerDrawerKey.value++;
        };

        onBeforeUpdate(() => {
            console.log("main update");
        });

        return {
            innerDrawerKey,
            handleClick,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});
</script>
