<script setup>
import { defineProps, defineEmits, computed, toRefs } from 'vue';
const id = crypto.randomUUID();
const props = defineProps({
	modelValue: String,
	label: String,
	value: String,
	inline: {
		type: Boolean,
		default: false
	}
});

const emits = defineEmits(['update:modelValue']);

const { label, value, inline, modelValue } = toRefs(props);

function clicked(checked) {
	if (checked) {
		emits('update:modelValue', value.value);
	} else {
		emits('update:modelValue', '');
	}
}

const stacked = computed(() => {
	if (inline.value) {
		return 'form-check form-check-inline';
	}

	return 'form-check';
});
</script>
<template>
	<div :class="stacked">
		<input
			:id="id"
			type="checkbox"
			class="form-check-input"
			:value="value"
			@click="clicked($event.target.checked)"
		/>
		<label class="form-check-label" :for="id"> {{ label }} </label>
	</div>
</template>
<style scoped>
</style>