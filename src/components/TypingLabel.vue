<template>
	<div>{{ current }}</div>
</template>

<script setup lang="ts">
import {
	computed,
	defineProps,
	onUnmounted,
	ref,
	watch,
	withDefaults
} from 'vue';

const props = withDefaults(defineProps<{
	value: string
	updateInterval?: number
}>(), {
	value: '',
	updateInterval: 50
});

// プッシュ/ポップのどちらをしているか。
var currentState: 'push' | 'pop' = 'push'
// 表示中の文字列。
const target = ref(props.value)
// 先頭から何文字を表示するか。
const pickN = ref(0)
// 実際に表示する文字列。
const current = computed(() => { return target.value.substring(0, pickN.value) })

function advanceFrame() {
	switch (currentState) {
		case 'push':
			pickN.value = pickN.value < target.value.length ? pickN.value + 1 : pickN.value
			break
		case 'pop':
			if (pickN.value == 0 || props.value.startsWith(current.value)) {
				target.value = props.value
				currentState = 'push'
			} else {
				--pickN.value
			}
	}
}
var frameUpdater = setInterval(advanceFrame, props.updateInterval)

watch(() => props.value, (newValue) => {
	if (newValue.startsWith(current.value)) {
		target.value = props.value
		currentState = 'push'
	} else {
		currentState = 'pop'
	}
}, { immediate: true })
watch(() => props.updateInterval, (newValue) => {
	clearInterval(frameUpdater)
	frameUpdater = setInterval(advanceFrame, newValue)
})

onUnmounted(() => {
	clearInterval(frameUpdater)
})
</script>