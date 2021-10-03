<template>
	<transition name="fade">
		<div v-if="isLoading" class="app-loader">
			<img
				class="app-loader__image"
				src="@/assets/image/puff.svg"
				alt="Загрузка"
			/>
		</div>
	</transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "AppLoader"
})
export default class AppLoader extends Vue {
	@Prop() private isLoading!: boolean;
}
</script>

<style lang="scss">
.fade-enter-active,.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,.fade-leave-to {
	opacity: 0;
}
.app-loader {
	display: flex;

	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;

	position: fixed;

	background-color: rgba(0, 0, 0, 0.3);
	.app-loader__image {
		width: 1200px;
		height: 120px;
	}
}

</style>
