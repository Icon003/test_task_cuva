<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="header__container-logo">
				<Logo />
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";

@Component({
	components: {
		Logo
	}
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
	width: 100%;
	height: 80px;

	background-color: $header-background-color;

	.header__wrapper {
		width: 100%;
		max-width: 1440px;
		height: 100%;
		margin: auto;

		.header__container-logo {
			display: flex;

			justify-content: center;
			align-items: center;

			height: 100%;
		}
	}
}

</style>
