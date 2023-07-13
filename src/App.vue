<template>
	<div class="container pt-3">
		<template v-for="(control, index) in controls" :key="index">
			<div class="row mb-3">
				<div class="col">
					<component
						:is="control.type"
						v-model="control.model"
						v-bind="control.props"
					/>
					{{ control.model }}
				</div>
			</div>
		</template>
		<!-- <div
			class="row mb-3"
			v-for="(controlSet, index) in inlineControls"
			:key="index"
		>
			<div class="col">
				<template v-for="(control, idx) in controlSet" :key="idx">
					<component :is="control.type" v-bind="control.props" />
				</template>
			</div>
		</div> -->
	</div>
</template>

<script>
import { controls /*, inlineControls */ } from './data/controls.js';
import ControlComponents from './components';
export default {
	name: 'App',
	data: () => ({
		controls
		// inlineControls
	}),
	components: {
		...ControlComponents
	}
};
</script>

<style>
</style>
