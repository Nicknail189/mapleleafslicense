<template>
    <div class="flex flex-col justify-center items-center relative">
        <div class="logo"></div>

        <div v-if="open === true" class="z-50 fixed top-0 left-0 bg-black/50 w-full h-full grid place-items-center">
        <div class="rounded-md bg-white p-6 max-w-[400px]">
            <div @click="open = false" class=" text-[24px] font-bold flex justify-between items-center"><h2 class="text-[24px] font-bold text-blue-700">SUCCESSFUL</h2><div class="p-2 mb-2 cursor-pointer"><icon name="uil:times"/></div></div>
            
            <p>Your application has been successfully submitted. Your payment will be reviewed shortly, kindy make your registration payment if you have not.</p>
        </div>
        </div>

        <ExtraInstructions/>

        <div>
            <form class="form">
                <div>
                <label class="text-blue-900 mb-4" for="firstname">First Name *</label><br>
                <input class="input" placeholder="Enter First name" type="text" v-model="form.firstname">
                </div>
                
                <div>
                <label class="text-blue-900 mb-4" for="lastname">Last Name *</label><br>
                <input class="input" placeholder="Enter Last name" type="text" v-model="form.lastname">
                </div>

                <div>
                <label class="text-blue-900 mb-4" for="address">Address *</label><br>
                <input class="input" placeholder="Enter Address" type="text" v-model="form.address">
                </div>

                <div>
                <label class="text-blue-900 mb-4" for="zipcode">Zip Code *</label><br>
                <input class="input" placeholder="Enter Zip Code" type="number" v-model="form.zipcode">
                </div>

                <br><br>
                <!-- <button @click="open = true" class="border-[4px] border-blue-700 md:border-0 px-10 py-[10px] text-[20px] font-extrabold rounded-sm md:bg-gray-200 hover:bg-blue-700"><h4>SUBMIT</h4></button> -->
            </form>

                <button @click="open = true" class="border-[4px] border-blue-700 md:border-0 px-10 py-[10px] text-[20px] font-extrabold rounded-sm md:bg-gray-200 hover:bg-blue-700"><h4>SUBMIT</h4></button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            form: {
                firstname: '',
                lastname: '',
                address: '',
                zipcode: '',
            }
        }
    },
}
</script>

<style scoped>
h4 {
    color: rgb(2, 34, 193);
}
button:hover h4 {
    color: white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type-number] {
    -moz-appearance: textfield;
}
</style>
