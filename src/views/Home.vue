<template>
	<div class="home-page">
		<AppLoader :isLoading="isLoading" />
		<div class="home-page__container-header">
			<Header />
		</div>
		<div class="home-page__wrapper">
			<div class="home-page__container-title">
				<AppTitle level="h1" text="Наши отели" />
			</div>
			<div class="home-page__container-cards">
				<CardHotel
					v-for="hotel of hotels"
					:key="hotel.id"
					:hotel="hotel"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppLoader from "@/components/UI/AppLoader.vue"
import Header from "@/components/Header.vue";
import AppTitle from "@/components/UI/AppTitle.vue"
import CardHotel from "@/components/CardHotel.vue";

@Component({
	components: {
		AppLoader,
		Header,
		AppTitle,
		CardHotel
	}
})
export default class Home extends Vue {
	private isLoading: boolean = true;

	private mounted() {
		this.getHotels();
	}

	public async getHotels() {
		this.$store.dispatch("getHotels");
		this.switchLoadingStatus();
	}
	public switchLoadingStatus() {
		this.isLoading = !this.isLoading;
	}

	get hotels() {
		return this.$store.getters["GET_HOTELS"];
	}
}
</script>

<style lang="scss">
.home-page {
	.home-page__container-header {
		margin-bottom: 40px;
	}
	.home-page__wrapper {
		width: 100%;
		max-width: 1440px;
		margin: auto;
		padding-right: 20px;
		padding-left: 20px;

		.home-page__container-title {
			margin-bottom: 40px;

			text-align: center;
		}

		.home-page__container-cards {
			display: grid;

			width: 100%;
			margin-bottom: 40px;

			gap: 25px;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
}
</style>
