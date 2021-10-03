<template>
	<form
		v-if="isSending === false"
		class="form-booking"
		ref="form"
		@submit.prevent=""
	>
		<div class="form-booking__container-items">
			<div class="form-booking__item">
				<AppInput placeholder="Адрес" v-model="form.address" />
			</div>
			<div class="form-booking__item">
				<AppInput placeholder="Имя" v-model="form.name" />
			</div>
			<div class="form-booking__item">
				<AppInput placeholder="Телефон" v-model="form.phone" />
			</div>
		</div>
		<div class="form-booking__container-button">
			<AppButton
				text="Отправить"
				:fullWidth="true"
				@click="validationForm"
			/>
		</div>
	</form>
	<ThanksMessage v-else text="Ваш отель забронирован" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AppButton from "@/components/UI/AppButton.vue"
import AppInput from "@/components/UI/AppInput.vue"
import ThanksMessage from "@/components/ThanksMessage.vue";

export interface Form {
	address: string;
	name: string;
	phone: string;
}

@Component({
	name: "FormBooking",
	components: {
		AppButton,
		AppInput,
		ThanksMessage
	}
})
export default class FormBooking extends Vue {
	@Prop() private idHotel!: number;

	private form: Form = {
		address: "",
		name: "",
		phone: ""
	};

	private isSending: boolean = false;

	public validationForm() {
		this.form.address.length < 2 ||
		this.form.name.length < 2 ||
		this.form.phone.length < 2
			? alert("Заполните форму корректно")
			: this.sendForm();
	}

	public sendForm() {
		this.$emit("isSendForm");

		setTimeout(() => {
			this.switchIsSending();
			this.$emit("isSendForm");
		}, 1500);
	}
	public switchIsSending() {
		this.isSending = !this.isSending;
	}
}
</script>

<style lang="scss">
.form-booking {
	width: 100%;

	.form-booking__container-items {
		margin: -12px;

		.form-booking__item {
			margin: 12px;
		}
	}
	.form-booking__container-button {
		margin-top: 36px;
	}
}

</style>
