<template>
	<header class="banner" aria="banner">
		<div><img class="logo" alt="Satellite #ee+411 symbol" src="/assets/site-logo-symbol.svg" height="25"></div>
		<TypingLabel class="path" :value="$route.fullPath" />
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
	<footer class="page-foot">
		<div>
			<div class="foot-map">
				<RouterLink to="/infomation">このサイトについて</RouterLink>
			</div>
			<div class="foot-copyright">
				<span>
					Copyright 2025 zawa-ch. licensed under
					<a target="_blank" href="https://github.com/zawa-ch/zawa-ch/blob/master/LICENSE.md">
						zawa-ch. default license
					</a>
					.
				</span>
			</div>
		</div>
	</footer>
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
	min-height: calc(100vh - 48pt);
	padding-top: 48pt;
}
</style>

<style lang="css">
header.banner {
	display: flex;
	width: calc(100% - 32px);
	height: calc(48pt - 1px);
	position: fixed;
	top: 0;
	padding-inline: 16px;
	z-index: 1024;
	align-items: center;
	border-bottom: 1pt var(--base-color-line) solid;
	background: var(--base-color);
}

header.banner>nav>* {
	padding: 8px;
}

header.banner>nav>a {
	color: var(--text-color);
	font-weight: 600;
	text-decoration: none;
}

.logo {
	max-height: 100%;
}

.path {
	font-family: 'Courier New', Courier, monospace;
	font-size: small;
	margin-inline: 16px;
}

footer.page-foot {
	background: var(--base-color-darker);
	padding: 30pt;
	min-height: 40pt;
}

footer.page-foot a {
	color: var(--text-color);
}

div.foot-map {
	display: flex;
	flex-flow: row;
	gap: 16pt;
}

div.foot-copyright {
	margin-top: 1rem;
	font-size: smaller;
}
</style>
