<template>
	<h1 v-if="level === 'h1'" class="app-title app-title--h1">{{ text }}</h1>
	<h2 v-else-if="level === 'h2'" class="app-title app-title--h2">{{ text }}</h2>
	<h3 v-else-if="level === 'h3'" class="app-title app-title--h3">{{ text }}</h3>
	<h4 v-else-if="level === 'h4'" class="app-title app-title--h4">{{ text }}</h4>
	<h5 v-else-if="level === 'h5'" class="app-title app-title--h5">{{ text }}</h5>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "AppTitle"
})
export default class AppTitle extends Vue {
	@Prop() private level!: string;
	@Prop() private text!: string;
}
</script>

<style lang="scss">
.app-title {
	display: flex;

	justify-content: center;

	position: relative;

	font-family: "Roboto Medium";

	color: $block-title-color;
}
.app-title::after {
	width: 120px;
	height: 3px;

	position: absolute;
	bottom: -10px;

	background-color: black;

	content: "";
}
.app-title--h1 {
	font-size: 36px;
}
.app-title--h2 {
	font-size: 32px;
}
.app-title--h3 {
}
.app-title--h4 {
}
.app-title--h5 {
}

</style>
