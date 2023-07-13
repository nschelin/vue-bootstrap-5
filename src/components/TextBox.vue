<script setup>
import { defineProps, defineEmits, ref, toRefs } from 'vue';
const id = crypto.randomUUID();
const props = defineProps({
	modelValue: String,
	label: String,
	placeholder: String,
	textMode: {
		type: String,
		default: 'single',
		validator: (v) => ['single', 'multiline'].includes(v)
	}
});

const emits = defineEmits(['update:modelValue']);

const { label, placeholder, textMode, modelValue } = toRefs(props);
</script>
<template>
	<label v-if="label" :for="id" class="form-label">{{ label }}</label>

	<input
		v-if="textMode === 'single'"
		:id="id"
		type="text"
		class="form-control"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>

	<textarea
		v-if="textMode === 'multiline'"
		:id="id"
		class="form-control"
		:placeholder="placeholder"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>
<style scoped>
</style>