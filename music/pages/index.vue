<script setup>
const { data: count } =await useFetch('/api/hello');
</script>
<template>
<div v-for="i in count">
{{i.name}}
</div>
</template>
