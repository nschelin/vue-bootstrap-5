<script setup>
import { defineProps, toRefs } from 'vue';
const id = crypto.randomUUID();
const props = defineProps({
	label: String,
	value: String
});

const { label, value } = toRefs(props);
</script>

<template>
	<div>
		<label v-if="label" :for="id" class="form-label">{{ label }}</label>
		<input :id="id" type="date" class="form-control" :value="value" />
	</div>
</template>