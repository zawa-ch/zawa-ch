<template>
	<div class="article-page root">
		<div>
			<h1 v-if="props.title.length > 0">{{ props.title }}</h1>
		</div>
		<article>
			<slot></slot>
		</article>
	</div>
</template>

<script setup lang="ts">
import {
	defineProps,
	withDefaults,
} from 'vue';
const props = withDefaults(defineProps<{
	title?: string
}>(), {
	title: ''
})
</script>

<style scoped>
.article-page.root {
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
}

.article-page.root>* {
	width: min(640pt, 100%);
}
</style>
