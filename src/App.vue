<template>
	<header class="banner" aria="banner">
		<div class="logo">Page Logo</div>
		<TypingLabel class="path" v-bind:value="$route.fullPath" />
		<div style="flex: 1;"></div>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/links">Links</RouterLink>
		</nav>
	</header>
	<main>
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import TypingLabel from './components/TypingLabel.vue';
</script>

<style lang="css">
body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	padding: 0px;
	margin: 0px;
}

main {
	width: 100%;
	padding-top: 48pt;
}
</style>

<style lang="css" scoped>
.banner {
	display: flex;
	width: calc(100% - 32px);
	height: calc(48pt - 1px);
	position: fixed;
	top: 0;
	padding-inline: 16px;
	align-items: center;
	border-bottom: 1pt var(--base-color-line) solid;
	background: var(--base-color);
}

.logo {
	max-height: 100%;
}

.path {
	font-family: 'Courier New', Courier, monospace;
	font-size: small;
	margin-inline: 16px;
}

nav>* {
	padding: 8px;
}

nav>a {
	color: var(--text-color);
	font-weight: 600;
	text-decoration: none;
}
</style>
