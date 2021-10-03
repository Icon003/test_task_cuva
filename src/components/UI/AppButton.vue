<template>
	<button
		:class="[
			'app-button',
			fullWidth === true ? 'app-button--full-width' : ''
		]"
		@click="callback($event)"
	>
		{{ text }}
	</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "AppButton"
})
export default class AppButton extends Vue {
	@Prop() private text!: string;
	@Prop() private fullWidth!: boolean;

	public callback(e: object) {
		this.$emit("click", e);
	}
}
</script>

<style lang="scss">
.app-button {
	padding-top: 12px;
	padding-right: 20px;
	padding-bottom: 12px;
	padding-left: 20px;

	font-size: 16px;

	color: $primary-button-text-color;
	border: none;
	border-radius: 8px;
	background: none;
	background-color: $primary-button-background-color;

	cursor: pointer;
}
.app-button--full-width {
	width: 100%;
}

</style>
