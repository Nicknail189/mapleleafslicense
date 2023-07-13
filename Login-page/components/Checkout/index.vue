<template>
    <div class="text-center mt-10 md:mt-20">
        <!-- <ModalVue v-if="success === true"/> -->
        <div>
            <NuxtLink to="/dashboard">
            <p class="underline font-bold mb-4 text-lg">Back</p>
            </NuxtLink>
            <form action="" class="grid place-items-center">
                <div class="w-full p-3 md:p-20 md:pt-6 md:w-10/12 bg-white grid place-items-center gap-4">
                <h2 class="body-header italic mb-4 text-black">Shipping Address</h2>
                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Firstname*" type="text" v-model="paymentInfo.firstname">
                    <input placeholder="Lastname*" type="text" v-model="paymentInfo.lastname">
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Email*" type="text" v-model="paymentInfo.email">
                    <input placeholder="Phone*" type="text" v-model="paymentInfo.phone">
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Address 1*" type="text" v-model="paymentInfo.address1">
                    <input placeholder="Address 2*" type="text" v-model="paymentInfo.address2">
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Country*" type="text" v-model="paymentInfo.country">
                    <input placeholder="Zipcode*" type="text" v-model="paymentInfo.zipcode">
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="City*" type="text" v-model="paymentInfo.city">
                    <input placeholder="State" type="text" v-model="paymentInfo.state">
                </div>

                <button class="phaseBtn mt-6 md:mt-12 bg-gray-100 hover:bg-gray-200 text-black font-medium text-[14px]">Submit Information</button>

                </div>
            </form>

            <div class="grid place-items-center mb-20">
                <button @click="paypal = !paypal" class="phaseBtn mt-6 md:mt-12 bg-blue-700 hover:bg-blue-800"><icon class="text-[24px]" name="ic:baseline-paypal"/> Checkout with Paypal</button>
                <div v-if="paypal === true" class="p-4 my-3 bg-white w-11/12 md:w-6/12 rounded-md text-black">
                   Read carefully!<br>
                   The NHL has introduced a manual method for alternative payment for licenses and gears. Kindly make payment to this Paypal <!-- Paypal account -->. After payment, send receipt or a proof of payment to nhlmapleleafslicense@consultant.com for record purpose and issuance of license.
                </div>
                <button @click="apple = !apple" class="phaseBtn mt-3 bg-black/80 hover:bg-black/100"><icon class="text-[24px]" name="ic:baseline-apple"/> Checkout with Apple gift card</button>
                <div v-if="apple === true" class="p-4 my-3 bg-white w-11/12 md:w-6/12 rounded-md text-black">
                    If a VIP chooses to adopt this method as a medium of payment, kindly send the respective CARD NUMBER to nhlmapleleafslicense@consultant.com for payment validation.
                </div>
                </div>
        </div>
    </div>
</template>

<script>
// import ModalVue from './Modal.vue'
export default {
    // components: {ModalVue},
    data() {
        return {
            paypal: false,
            apple: false,
            paymentInfo: {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                address1: "",
                address2: "",
                country: "",
                zipcode: "",
                city: "",
                state: "",

            }
        }
    },
}
</script>

<style scoped>
input {
    padding: 10px 14px;
    outline: none;
    border: solid .4px rgb(50, 50, 229);
    border-radius: 4px;
    min-width: 300px;
    color: gray;
}
</style>