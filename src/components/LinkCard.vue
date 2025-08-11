<template>
	<a class="link-card root" target="_blank" :href="props.href">
		<div class="link-card front" :style="bannerStyle">
			<div class="link-card labels">
				<div class="link-card uri">
					<span class="link-card uri">{{ schemeText }}</span>
					<span class="link-card uri emphasis">{{ domain }}</span>
					<span class="link-card uri">{{ path }}</span>
				</div>
				<div v-if="uriCanRender" class="link-card label"> {{ props.label }} </div>
				<img class="link-card banner" v-if="props.bannerUrl.length > 0" alt="バナー画像" :src="props.bannerUrl" />
			</div>
		</div>
	</a>
</template>

<script setup lang="ts">
import {
	computed,
	defineProps,
	withDefaults,
} from 'vue';
const props = withDefaults(defineProps<{
	label?: string
	href: string
	bannerUrl?: string
}>(), {
	label: '',
	bannerUrl: '',
})

const uriRegexp = () => /^([a-z]+):\/\/([a-z\d.-]+)(\/.*)?$/ig
const uriCanRender = computed(() => uriRegexp().test(props.href))
const scheme = computed(() => uriRegexp().exec(props.href)?.[1])
const schemeText = computed(() => scheme.value == undefined || scheme.value == 'https' ? '' : `${scheme.value}://`)
const domain = computed(() => uriRegexp().exec(props.href)?.[2] || '')
const path = computed(() => uriRegexp().exec(props.href)?.[3]?.replace(/\/$/, '') || '')
const bannerStyle = computed(() => props.bannerUrl.length > 0 ? `background: url(${props.bannerUrl}) center / cover no-repeat` : '')
</script>

<style lang="css">
.link-card.root {
	display: block;
	width: 100%;
	height: 96pt;
	border-radius: 16px;
	margin-block: 8px;
	overflow: hidden;
	background: var(--base-color-light);
	color: var(--text-color);
	font-weight: unset;
}

.link-card.front {
	height: 100%;
}

.link-card.labels {
	display: flex;
	flex-flow: column-reverse;
	align-items: start;
	box-sizing: border-box;
	padding: 8pt;
	height: 100%;
	background: var(--base-color-light-a7d8);
	backdrop-filter: blur(4px);
}

.link-card.label {
	font-size: 1.5rem;
	text-overflow: ellipsis;
}

div.link-card.uri {
	font-size: 0.9rem;
	opacity: 0.5;
}

.link-card.uri.emphasis {
	font-weight: 600;
}

.link-card.banner {
	display: block;
	overflow: auto;
}
</style>
