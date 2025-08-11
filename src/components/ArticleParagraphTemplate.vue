<template>
	<div class="article-paragraph root">
		<h2 v-if="props.title.length > 0" class="article-paragraph title">{{ props.title }}</h2>
		<div class="article-paragraph contains">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	defineProps,
	withDefaults
} from 'vue';

const props = withDefaults(defineProps<{
	title?: string
}>(), {
	title: '',
})
</script>

<style>
.article-paragraph.root {
	margin-block: 16px;
}

.card-view>.article-paragraph.root {
	margin: 0;
}

h2.article-paragraph.title {
	margin: 0;
}
</style>
