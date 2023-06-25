<template>
    <div class="container bg-white text-[#333] flex flex-col justify-center items-center">
        <div>
            <h2 class="uppercase text-[#333] text-[16px] font-black text-center mb-8 mt-2">
                application for annual ticket license
            </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
            <div>
            <div class="w-[260px] h-[120px] bg-[#d3d1ce] rounded-lg flex justify-center items-center shadow-xl">
                <button @click="open()" class="px-6 py-3 bg-white rounded-md uppercase body-text hover:shadow-2xl">Get license</button>
            </div>
            <p class="body-text text-center mt-4">Available: 0 unit</p>
            <p class="body-text text-center">Exp: 5 months</p>
            <p class="text-md text-center font-black my-2">$5,000</p>
            </div>

            <div>
            <div class="w-[260px] h-[120px] bg-[#d6a12d] rounded-lg flex justify-center items-center shadow-xl">
                <button @click="open()" class="px-6 py-3 bg-white rounded-md uppercase body-text hover:shadow-2xl">Get license</button>
            </div>
            <p class="body-text text-center mt-4">Available: 0 unit</p>
            <p class="body-text text-center">Exp: 10 months</p>
            <p class="text-md text-center font-black my-2">$9,499</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        open(){
            return alert('Visitors are restricted from performing further actions. To open an investor account with the leafs, contact your referrer.')
        }
    }
}
</script>