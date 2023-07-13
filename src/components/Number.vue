<script setup>
import { defineProps, toRefs } from 'vue';
const id = crypto.randomUUID();
const props = defineProps({
	min: {
		type: Number,
		default: null
	},
	max: {
		type: Number,
		default: null
	},
	step: {
		type: Number,
		default: 1
	},
	label: String,
	value: Number
});
</script>
<template>
	<div>
		<label v-if="label" :for="id" class="form-label">{{ label }}</label>
		<input
			:id="id"
			type="number"
			class="form-control"
			:min="min"
			:max="max"
			:step="step"
		/>
	</div>
</template>