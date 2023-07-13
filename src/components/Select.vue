<script setup>
import { defineProps, defineEmits, toRefs } from 'vue';
const id = crypto.randomUUID();
const props = defineProps(['modelValue', 'label', 'options']);
defineEmits(['update:modelUpdate']);
const { label, options } = toRefs(props);
</script>
<template>
	<label v-if="label" :for="id" class="form-label">{{ label }}</label>
	<select
		:id="id"
		class="form-select"
		:value="modelValue"
		@change="$emit('update:modelUpdate', $event.target.value)"
	>
		<option
			v-for="({ text, value }, index) in options"
			:key="index"
			:value="value"
		>
			{{ text }}
		</option>
	</select>
</template>