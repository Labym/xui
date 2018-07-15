<template>
    <i :class="'icon  iconfont icon-' + name"></i>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            name: String
        }
    };
</script>