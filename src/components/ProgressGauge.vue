<template>
	<div class="progress-gauge root">
		<div style="box-sizing: border-box; display: flex; align-items: end; padding-inline: 4px;">
			<span style="font-size: 90%;">{{ props.label }}</span>
			<span v-if="props.valueDisplay != 'none'"
				style="margin-left: auto; font-size: 75%; font-weight: 600; vertical-align: bottom;">
				{{ valueText }}
			</span>
		</div>
		<div class="progress-gauge progress">
			<div class="progress-gauge bar"
				:style="[`background-color: ${props.color};`, `margin-left: 0%`, `margin-right: ${barRight}%;`]">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	computed,
	defineProps,
	withDefaults,
} from 'vue';
const props = withDefaults(defineProps<{
	value?: number
	min?: number
	max?: number
	color?: string
	label?: string
	valueDisplay?: 'none' | 'percentage' | 'value' | 'fraction'
}>(), {
	value: 0,
	min: 0,
	max: 1,
	color: 'var(--accent-color)',
	label: '',
	valueDisplay: 'none',
})

const barRight = computed(() => {
	if (props.max < props.min) { return 100 }
	if (props.value < props.min) { return 100 }
	if (props.max < props.value) { return 0 }
	return 100 + 100 * (props.min - props.value) / (props.max - props.min)
})

const valueText = computed(() => {
	switch (props.valueDisplay) {
		case 'value': return `${props.value}`
		case 'percentage': return `${(100 * (props.value - props.min) / (props.max - props.min)).toPrecision(2)}%`
		case 'fraction': return `${props.value} / ${props.max}`
		default: return ''
	}
})
</script>

<style scoped>
.progress-gauge.root {
	box-sizing: border-box;
	width: 100%;
	padding-inline: 8px;
	margin-block: 4px;
}

.progress-gauge.progress {
	height: 2px;
	margin-top: 2px;
	background: var(--black-a1d8);
	overflow: hidden;
}

.progress-gauge.bar {
	position: relative;
	height: 100%;
}
</style>
