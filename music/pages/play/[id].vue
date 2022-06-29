<script setup>
const router = useRoute().params.id;
const {data:jofos}=await useFetch('/api/hello');
const {data:infos}=await useFetch('/api/hello',{pick:[router]})
</script>
<template>
<div>
<div v-for="i in infos">
<h3>{{i.name}}</h3>
<img :src="`../jackets/${i.id}.png`" width="320px" />

<audio :src="`../audios/${i.id}.mp3`" controls />
<div>
<a :href="`/play/${i.link[0]}`">
<img src="../sp.png"/>
</a>
<img @click="palupa" :src="operation"/>
<a :href="`/play/${i.link[1]}`">
<img src="../sn.png"/>
</a>
</div>
</div>
</template>
