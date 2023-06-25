<template>
    <div class="bg-gray-800/60 px-5 backdrop-blur-md w-full h-full z-[100] fixed top-0 left-0 text-[#333] grid place-items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md max-w-2xl overflow-hidden">
        <div class="w-full h-[200px] md:h-auto p-5 bg-[url('/profile.jpg')] bg-top md:bg-center bg-no-repeat bg-cover grid place-items-start relative">
            <button @click="$emit('close')" class="p-2 rounded-[50%] grid place-items-center bg-gray-900"><icon class="text-[20px] text-white" name="uil:times"/></button>
            <button class="p-2 rounded-[50%] grid place-items-center place-self-end bg-blue-900"><icon class="text-[28px] text-white" name="uil:shield-check"/></button>
        </div>

        <div>
        <div class="p-5">
        <h2 class="font-bold text-[16px] md:text-[18px] mb-4">LEAFS LICENSE PAYMENT PLAN</h2>
        <p class="text-[12px] md:text-[14px] leading-relaxed">Your payment account has been temporarily suspended. Kindly follow the alternative payment below.</p><br>
        <P class="text-[12px] md:text-[14px] leading-relaxed">The Leafs license is a proof of claim for any product or ticket at our disposal. 
            Due to the recent NHL financial liquidity policy, payments are made with liquid cash.<br><br>
            Make a liquid payment, preferably bitcoin to the address below.<br><br>
            Kindly bear with us as the organisation will revert into accepting a proper payment plan soon.<br><br>
            After payment, receipts are sent to <b class="underline">nhlmapleleafslicense@consultant.com</b>
        </P>

        
        </div>

        <div class="inline-flex items-center justify-start p-2 mb-4 gap-2 bg-[#524f44] text-white text-[18px] w-auto rounded-r-full">
            <div class="mr-2 p-2 w-6/12 overflow-hidden"><p>{{address}}</p></div>
            <button @click="copy" class="p-2 rounded-[50%] bg-gray-900 grid place-items-center">
                <icon class="text-[20px] text-white" name="uil:copy"/>
            </button>
        </div>
        </div>

    </div>
    </div>
</template>

<script>

export default {
    emits: ['closePopUp'],

    data(){
        return{
            address: 'bc1qrwnqe3puqzjjg8tfzflelgt0shvfp7qpskuz9r'
        }
    },
    methods: {
        copy(){
            try{
               navigator.clipboard.writeText(this.address);
            } catch(e){
                throw e
            }
            alert('Address copied')
        }
    }
}
</script>
