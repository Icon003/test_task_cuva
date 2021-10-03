<template>
	<div class="hotel-page">
		<AppLoader :isLoading="isLoading"/>
		<div class="hotel-page__container-header">
			<Header />
		</div>
		<div class="hotel-page__wrapper">
			<div class="hotel-page__container-block-title">
				<AppTitle level="h2" text="Отель" />
			</div>
			<div class="hotel-page__container-hotel">
				<div class="hotel-page__container-image">
					<AppImage :alt="`Фото ${currentHotel.title}`" />
				</div>
				<div class="hotel-page__container-info">
					<div class="hotel-page__container-title">
						<h1 class="hotel-page__title">
							{{ currentHotel.title }}
						</h1>
					</div>
					<div class="hotel-page__container-description">
						<p class="hotel-page__description">
							{{ currentHotel.body }}
						</p>
					</div>
				</div>
			</div>
			<div class="hotel-page__container-block-title">
				<AppTitle level="h2" text="Форма бронирования" />
			</div>
			<div class="hotel-page__container-form-booking">
				<FormBooking @isSendForm="switchLoadingStatus" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppLoader from "@/components/UI/AppLoader.vue";
import Header from "@/components/Header.vue";
import AppTitle from "@/components/UI/AppTitle.vue"
import AppImage from "@/components/UI/AppImage.vue"
import FormBooking from "@/components/FormBooking.vue";

@Component({
	components: {
		AppLoader,
		Header,
		AppTitle,
		AppImage,
		FormBooking
	}
})
export default class Hotel extends Vue {
	private isLoading: boolean = true;

	private mounted() {
		this.getCurrentHotel();
	}
	public async getCurrentHotel() {
		await this.$store.dispatch("getCurrentHotel", this.$route.params.id);
		this.switchLoadingStatus();
	}
	public switchLoadingStatus() {
		this.isLoading = !this.isLoading;
	}
	get currentHotel() {
		return this.$store.getters["GET_CURRENT_HOTEL"];
	}
}
</script>

<style lang="scss">
.hotel-page {
	.hotel-page__container-header {
		margin-bottom: 40px;
	}
	.hotel-page__wrapper {
		width: 100%;
		max-width: 1440px;
		margin: auto;
		padding-right: 20px;
		padding-left: 20px;

		.hotel-page__container-block-title {
			margin-bottom: 40px;

			text-align: center;
		}

		.hotel-page__container-hotel {
			display: flex;

			margin-bottom: 40px;
			padding: 16px;

			border-radius: 8px;
			box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
			0px 10px 32px -4px rgba(24, 39, 75, 0.1);

			.hotel-page__container-image {
				width: 40%;

				border-radius: 8px;
			}

			.hotel-page__container-info {
				width: 60%;
				padding-right: 40px;
				padding-left: 40px;

				.hotel-page__container-title {
					margin-bottom: 0.5em;

					font-family: "Roboto Medium";
					font-size: 28px;

					color: $card-hotel-title-color;

					.hotel-page__title {
						font-family: inherit;
						font-size: inherit;

						color: inherit;
					}
				}

				.hotel-page__container-description {
					margin-top: 0.5em;

					font-family: "Roboto Light";
					font-size: 16px;

					color: $card-hotel-description-color;

					.hotel-page__description {
						font-family: inherit;
						font-size: inherit;

						color: inherit;
					}
				}
			}
		}
		.hotel-page__container-form-booking {
			width: 40%;
			margin: 0 auto;
			margin-bottom: 40px;
			padding: 16px;

			border-radius: 8px;
			box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
			0px 10px 32px -4px rgba(24, 39, 75, 0.1);
		}
	}
}

</style>
