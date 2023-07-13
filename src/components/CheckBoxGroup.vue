<script setup>
import { defineProps, ref, toRefs } from 'vue';
import CheckBox from './CheckBox';
const name = crypto.randomUUID();

const props = defineProps({
	modelValue: Array,
	settings: {
		type: Array,
		default: () => [
			{
				label: '',
				value: ''
			}
		]
	},
	inline: {
		type: Boolean,
		default: false
	}
});

const { settings, inline } = toRefs(props);

const controlSettings = ref(
	settings.value.map((setting) => ({ ...setting, name, inline: inline.value }))
);
</script>

<template>
	<div>
		<CheckBox
			v-for="(setting, index) in controlSettings"
			:key="index"
			v-bind="setting"
		/>
	</div>
</template>