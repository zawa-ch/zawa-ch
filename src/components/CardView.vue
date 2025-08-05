<template>
	<div class="card-view">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card-view {
	box-sizing: border-box;
	border-radius: 16px;
	padding: 16px;
	background-color: var(--base-color-light);
	margin-block: 8px;
}
</style>
