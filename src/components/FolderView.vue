<template>
	<div class="folder-view root">
		<div @click="onClickHeader" @keypress="onKeyPress" class="folder-view header" tabindex="0">
			<span v-if="props.title.length > 0">{{ props.title }}</span>
			<div style="width: 16px; margin-left: auto; display: inline-block; position: relative;">
				<Transition class="folder-view" name="foldersw">
					<div class="folder-view folderind" v-if="expanding">-</div>
					<div class="folder-view folderind" v-else>+</div>
				</Transition>
			</div>
		</div>
		<AccordionTransition>
			<div v-show="expanding">
				<div class="folder-view content">
					<slot></slot>
				</div>
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
	expanding?: boolean
}>(), {
	title: '',
	expanding: true,
})
const emit = defineEmits([
	'update:expanding'
])

const expanding = ref(props.expanding)
watch(() => props.expanding, (newValue) => expanding.value = newValue)
watch(expanding, (newValue) => emit('update:expanding', newValue))

function onClickHeader() {
	expanding.value = !expanding.value
}
function onKeyPress(payload: KeyboardEvent) {
	if (payload.key == 'Enter') {
		expanding.value = !expanding.value
	}
}
</script>

<style scoped>
.folder-view.root {
	box-sizing: border-box;
	border-radius: 8px;
	background-color: var(--black-a1d8);
	margin-block: 8px;
	overflow: hidden;
}

.folder-view.header {
	display: flex;
	flex-flow: row nowrap;
	height: 1.25em;
	padding: 8px;
	cursor: pointer;
}

.folder-view.folderind {
	position: absolute;
	height: 16pt;
	text-align: right;
	font-family: 'Courier New', Courier, monospace;
}

.folder-view.foldersw-enter-active,
.folder-view.foldersw-leave-active {
	transition: opacity 0.2s ease;
}

.folder-view.foldersw-enter-from,
.folder-view.foldersw-leave-to {
	opacity: 0;
}

.folder-view.content {
	margin: 8px;
}
</style>
