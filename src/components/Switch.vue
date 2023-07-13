<script setup>
import { defineProps } from 'vue';
const id = crypto.randomUUID();
const props = defineProps({
	label: String,
	value: String
});
</script>
<template>
	<div class="form-check form-switch">
		<input :id="id" class="form-check-input" type="checkbox" />
		<label v-if="label" class="form-check-label" :for="id"> {{ label }} </label>
	</div>
</template>