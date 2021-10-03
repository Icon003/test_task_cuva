<template>
	<a class="logo" href="/" @click.prevent="goToHomePage">
		<img class="logo__image" src="@/assets/logo.png" alt="Логотип Cuva" />
	</a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "Logo"
})
export default class Logo extends Vue {
	public goToHomePage() {
		if (this.$route.path !== "/") {
			this.$router.push("/");
		}
	}
}
</script>

<style lang="scss">
.logo {
	display: flex;

	.logo__image {
		height: 36px;
	}
}

</style>
