<template>
	<div class="root">
		<div class="card-area">
			<div class="card">
				<div class="profile"></div>
				<div>
					<div class="name">zawa-ch.</div>
					<TypingLabel class="description" value="開発者に見えて開発者ではない、少しだけ開発している開発者" />
					<div><a class="console" target="_blank" href="https://geoplanetary.net/@stellar_ch">&gt;&gt;&gt; Misskey</a></div>
					<div><a class="console" target="_blank" href="https://github.com/zawa-ch">&gt;&gt;&gt; Github</a></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import TypingLabel from '@/components/TypingLabel.vue';

</script>

<style scoped>
.root {
	overflow-y: scroll;
}

.card-area {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: calc(100vh - 48pt);
}

.card {
	width: min(max(calc(100% / 3), 360px), calc(100% - 32px));
	border-radius: 16px;
	padding: 16px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	background-color: var(--base-color-light);
}

.profile {
	width: 80pt;
	aspect-ratio: 1;
	margin-right: 16pt;
	border-radius: 100%;
	background: center / contain no-repeat url(../assets/profile.png);
}

.name {
	font-size: 175%;
	font-weight: 600;
}

.description {
	font-size: small;
}

.console {
	font-family: 'Courier New', Courier, monospace;
	font-size: small;
	color: #aaa;
}
</style>
