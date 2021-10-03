<template>
	<div class="thanks-message">
		<div class="thanks-message__container-title">
			<span class="thanks-message__title">Спасибо вам!</span>
		</div>
		<div class="thanks-message__container-text">
			<p class="thanks-message__text">{{ text }}</p>
		</div>
		<div class="thanks-message__container-icon">
			<img
				class="thanks-message__icon"
				src="@/assets/image/love.svg"
				alt="Изображение сердечка на руке"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "ThanksMessage"
})
export default class ThanksMessage extends Vue {
	@Prop() private text!: string;
}
</script>

<style lang="scss">
.thanks-message {
	width: 100%;

	.thanks-message__container-title {
		display: flex;

		justify-content: center;

		width: 100%;
		margin-bottom: 0.5em;

		font-family: "Roboto Medium";
		font-size: 24px;

		color: $card-hotel-title-color;

		text-align: center;

		.thanks-message__title {
			font-family: inherit;
			font-size: inherit;

			color: inherit;
		}
	}
	.thanks-message__container-text {
		display: flex;

		justify-content: center;

		width: 100%;
		margin-bottom: 0.5em;

		font-family: "Roboto Light";
		font-size: 16px;

		color: $card-hotel-title-color;

		text-align: center;

		.thanks-message__text {
			font-family: inherit;
			font-size: inherit;

			color: inherit;
		}
	}
	.thanks-message__container-icon {
		display: flex;

		justify-content: center;
		align-items: center;

		width: 100%;

		.thanks-message__icon {
			width: 64px;
			height: 64px;
		}
	}
}

</style>
