<template>
	<img class="app-image" src="@/assets/image/hotel/hotel.jpg" :alt="alt" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "AppImage"
})
export default class AppImage extends Vue {
	@Prop() private alt!: string;
}
</script>

<style lang="scss">
.app-image {
	width: 100%;

	border-radius: inherit;

	object-fit: cover;
}

</style>
