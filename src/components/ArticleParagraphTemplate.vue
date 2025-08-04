<template>
	<div class="card-view root">
		<div @click="onClickHeader()" :class="['article-paragraph header', props.foldable ? 'foldable' : '']">
			<h2 v-if="props.title.length > 0">{{ props.title }}</h2>
			<div style="width: 16px; display: inline-block; position: relative; margin-left: auto;">
				<Transition class="article-paragraph" name="foldersw">
					<div class="article-paragraph folderind" v-if="props.foldable && expanding">-</div>
					<div class="article-paragraph folderind" v-else-if="props.foldable">+</div>
				</Transition>
			</div>
		</div>
		<AccordionTransition>
			<div v-show="expanding" :class="['article-paragraph contains', props.title.length > 0 ? 'titled' : '']">
				<slot></slot>
			</div>
		</AccordionTransition>
	</div>
</template>

<script setup lang="ts">
import {
	defineEmits,
	defineProps,
	ref,
	watch,
	withDefaults
} from 'vue';
import AccordionTransition from './AccordionTransition.vue';

const props = withDefaults(defineProps<{
	title?: string
	foldable?: boolean
	expanding?: boolean
}>(), {
	title: '',
	foldable: false,
	expanding: true,
})
const emit = defineEmits([
	'update:expanding'
])

const expanding = ref(props.expanding)
watch(() => props.expanding, (newValue) => expanding.value = newValue)
watch(expanding, (newValue) => emit('update:expanding', newValue))

function onClickHeader() {
	if (props.foldable) {
		expanding.value = !expanding.value
	}
}
</script>

<style scoped>
h2 {
	display: inline;
	margin: 0;
}

.card-view.root {
	box-sizing: border-box;
	border-radius: 16px;
	padding: 16px;
	background-color: var(--base-color-light);
	margin-block: 8px;
}

.article-paragraph.header {
	display: flex;
	flex-flow: row nowrap;
}

.article-paragraph.header.foldable {
	cursor: pointer;
}

.article-paragraph.folderind {
	position: absolute;
	height: 16pt;
	text-align: right;
	font-family: 'Courier New', Courier, monospace;
}

.article-paragraph.foldersw-enter-active,
.article-paragraph.foldersw-leave-active {
	transition: opacity 0.2s ease;
}

.article-paragraph.foldersw-enter-from,
.article-paragraph.foldersw-leave-to {
	opacity: 0;
}
</style>
