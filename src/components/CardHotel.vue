<template>
	<div class="card-hotel" @click.prevent="goToHotel(hotel.id)">
		<div class="card-hotel__container-image">
			<AppImage :alt="`Фото ${hotel.title}`" />
		</div>
		<div class="card-hotel__container-name">
			<span class="card-hotel__name">{{ hotel.title }}</span>
		</div>
		<div class="card-hotel__container-description">
			<p class="card-hotel__description">
				{{ hotel.body | sliceString(36) }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AppImage from "@/components/UI/AppImage.vue"

export interface Hotel {
	id: number;
	userId: number;
	title: string;
	body: string;
}

@Component({
	components: {
		AppImage
	},
	name: "CardHotel",
	filters: {
		sliceString(value: string, end: number) {
			return value.length < end ? value : `${value.slice(0, end)}...`;
		}
	}
})
export default class CardHotel extends Vue {
	@Prop() private hotel!: Hotel;

	public goToHotel(id: number) {
		this.$router.push(`/hotel/${id}`);
	}
}
</script>

<style lang="scss">
.card-hotel {
	padding: 16px;

	border-radius: 8px;
	box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
	0px 10px 32px -4px rgba(24, 39, 75, 0.1);

	cursor: pointer;

	.card-hotel__container-image {
		position: relative;

		border-radius: 8px;
	}
	.card-hotel__container-name {
		margin-top: 0.5em;

		font-family: "Roboto Medium";
		font-size: 16px;

		color: $card-hotel-title-color;

		.card-hotel__name {
			font-family: inherit;
			font-size: inherit;

			color: inherit;
		}
	}
	.card-hotel__container-description {
		margin-top: 0.5em;

		font-family: "Roboto Light";
		font-size: 14px;

		color: $card-hotel-description-color;

		.card-hotel__description {
			font-family: inherit;
			font-size: inherit;

			color: inherit;
		}
	}
}

</style>
