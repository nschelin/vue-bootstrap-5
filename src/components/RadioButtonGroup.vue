<script setup>
import { defineProps, ref, toRefs } from 'vue';
import RadioButton from './RadioButton';
const name = crypto.randomUUID();

const props = defineProps({
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
		<RadioButton
			v-for="(setting, index) in controlSettings"
			:key="index"
			v-bind="setting"
		/>
	</div>
</template>