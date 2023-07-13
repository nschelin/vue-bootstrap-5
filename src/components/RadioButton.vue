<script setup>
import { defineProps, toRefs, computed } from 'vue';
const id = crypto.randomUUID();
const props = defineProps({
	label: String,
	value: String,
	name: String,
	inline: {
		type: Boolean,
		default: false
	}
});

const { label, value, inline } = toRefs(props);

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
			:name="name"
			class="form-check-input"
			type="radio"
			:value="value"
		/>
		<label v-if="label" class="form-check-label" :for="id">
			{{ label }}
		</label>
	</div>
</template>

<style scoped>
</style>