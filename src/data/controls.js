const controls = [
	{
		type: 'TextBox',
		model: 'My Text',
		props: {
			label: 'My Label',
			placeholder: 'placeholder'
		}
	},
	{
		type: 'TextBox',
		model: 'My Multline',
		props: {
			label: 'My Label',
			textMode: 'multiline',
			placeholder: 'placeholder'
		}
	},
	{
		type: 'TextBox',
		props: {
			placeholder: 'What what'
		}
	},
	{
		type: 'Select',
		model: 2,
		props: {
			label: 'My Select',
			options: [
				{ text: 'Option 1', value: 1 },
				{ text: 'Option 2', value: 2 }
			]
		}
	},
	{
		type: 'CheckBox',
		model: '',
		props: {
			label: 'My CheckBox',
			value: 'Testing'
		}
	},
	{
		type: 'RadioButton',
		props: {
			label: 'Radio 1',
			value: 'Testing',
			name: 'group'
		}
	},
	{
		type: 'RadioButton',
		props: {
			label: 'Radio 2',
			value: 'Testing',
			name: 'group'
		}
	},
	{
		type: 'Switch',
		props: {
			label: 'Switch',
			value: 'Off'
		}
	},
	{
		type: 'Number',
		props: {
			min: 0,
			max: 100,
			step: 2,
			label: 'My Number',
			value: 0
		}
	},
	{
		type: 'Date',
		props: {
			label: 'My Date',
			value: '2020-09-12'
		}
	},
	{
		type: 'RadioButtonGroup',
		props: {
			settings: [
				{
					label: 'Radio 1',
					value: 'Testing'
				},
				{
					label: 'Radio 2',
					value: 'Testing'
				}
			],
			inline: true
		}
	},
	{
		type: 'CheckBoxGroup',
		props: {
			settings: [
				{
					label: 'CheckBox 1',
					value: 'Testing 1'
				},
				{
					label: 'CheckBox 2',
					value: 'Testing 2'
				}
			],
			inline: true
		}
	}
];

// const inlineControls = [
// 	[
// 		{
// 			type: 'RadioButton',
// 			props: {
// 				label: 'Radio 1',
// 				value: 'Testing',
// 				name: 'group',
// 				inline: true
// 			}
// 		},
// 		{
// 			type: 'RadioButton',
// 			props: {
// 				label: 'Radio 2',
// 				value: 'Testing',
// 				name: 'group',
// 				inline: true
// 			}
// 		}
// 	]
// ];

export { controls /*, inlineControls*/ };
