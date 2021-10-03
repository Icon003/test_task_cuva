<template>
	<input
		class="app-input"
		type="text"
		:placeholder="placeholder"
		@input="callback($event)"
	/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "AppInput"
})
export default class AppInput extends Vue {
	@Prop() private placeholder!: string;

	public callback(e: any) {
		this.$emit("input", e.target.value);
	}
}
</script>

<style lang="scss">
.app-input {
	width: 100%;
	padding-top: 8px;
	padding-right: 12px;
	padding-bottom: 8px;
	padding-left: 12px;

	font-family: "Roboto";
	font-size: 16px;

	color: $input-text-color;
	border: 1px solid $input-border-color;
	border-radius: 8px;
}

</style>
