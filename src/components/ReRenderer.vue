<template>
    <div style="height: 100%">
        <button @click="rerender">다시 그리기</button>
    </div>
</template>
<script>
export default {
    emits: ["rerender"],
    setup(props, { emit }) {
        const rerender = function () {
            emit("rerender");
        };
        return {
            rerender,
        };
    },
};
</script>
<style lang="sass" scoped>
div
    background-color: #F0F0F0
</style>
