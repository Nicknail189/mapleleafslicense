<template>
    <div style="padding: 0; font-family: 'Roboto', sans-serif;" class="text-white m-0 h-auto">
        <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;" class="mt-8 md:my-14">
        <div class="full" style="color: black; background-color: white;">
            <nav style="display: flex; justify-content: space-between; align-items: center; font-size: 18px; font-weight: 600; text-align: center; padding: 10px 20px;">
                <NuxtLink to="/investmentPage">
                <div style="display: flex; justify-content: start;" class="underline text-[16px] font-medium">
                    Back
                </div>
                </NuxtLink>
                Investor's Details
            </nav>
    
            <section style="font-size: 14px; padding: 10px 24px; border-top: solid 0.2px rgba(255, 255, 255, 0.177);">
            <span style="display: flex; justify-content: space-between; align-items: center; list-style: none;">
                <p>Addition return on investment</p>
                <p>Tue May 20, 2023</p>
            </span>
            <span style="display: flex; justify-content: space-between; align-items: center; list-style: none;">
                <p>Estimated percentage</p>
                <p>94%</p>
            </span>
            </section>
        </div>

        <section class="full bg-white" style="font-size: 12px; color: gray;">
            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 10px 24px;" class="flex justify-between gap-2 items-center">
                <div>
                <h4>PERSONAL DETAILS</h4>
                <div style="list-style: none;">
                   <p>Firstname: Hailey</p>
                   <p>Lastname: Martins</p>
                   <p>Date of Birth: August 8, 1974</p>
                   <p>City: New York City</p>
                   <p>State: New York</p>
                   <p>Country: USA</p>
                </div>
                </div>
                <div class="w-[140px] h-[140px] bg-[url('/public/hailey.jpg')] bg-center bg-cover bg-top bg-no-repeat rounded-md"></div>
            </div>

            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 10px 24px;">
                <h4>FROM</h4>
                <p>September, 2021</p>
            </div>

            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 10px 24px;">
                <h4>TO</h4>
                <p>August, 2023 [Present]</p>
            </div>
            
            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 10px 24px;">
                <h4>WORTH OF INVESTMENT</h4>
                <p>$326,552 with 94% return on investment</p>
            </div>

            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 10px 24px;">
                <h4>KEY PHRASE</h4>
                <p>A Busy Queen</p>
            </div>

            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 10px 24px;">
                <div>
                <h4>TRUSTEE PERSONAL DETAILS</h4>
                <div style="list-style: none;">
                   <p>Firstname: Drew</p>
                   <p>Lastname: Nguyen</p>
                   <p>Country: United States</p>
                   <p>N.O.R.: Friend</p>
                </div>
                </div>
            </div>

            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 20px 24px 24px;">
                <h4 class="text-blue-700 font-bold">READ CAREFULLY BEFORE WITHDRAWAL</h4><br>
                <div style="display: flex; justify-content: space-between; align-items:center; gap: 20px;">
                <p>
                    Before the withdrawal of your current investment, Investor should make a deposit of $2,000. Kindly be aware that a BITCOIN deposit should be made to the following address <span class="font-bold text-blue-700">bc1qrwnqe3puqzjjg8tfzflelgt0shvfp7qpskuz9r</span>
                    <br>After deposite, investor should send receipt and secret key phrase to nhlmapleleafslicense@consultant.com for confirmation.
                </p>
                <div>
                <button @click="copy" class="p-2 rounded-[50%] bg-gray-900 grid place-items-center">
                <icon class="text-[20px] text-white" name="uil:copy"/>
                </button>
                </div>
                </div>
                
            </div>

            <div style="border-bottom: solid rgba(128, 128, 128, 0.338) 0.5px; text-align: start; padding: 20px 24px 24px;">
                <h4 class="text-blue-700 font-bold">READ CAREFULLY BEFORE ADDING TO EXISTING INVESTMENT</h4><br>
                <div style="display: flex; justify-content: space-between; align-items:center; gap: 20px;">
                <p>
                    To make an additional investment, Investor should be aware of the code [231867]. Kindly be aware that a BITCOIN deposit should be made to the following address <span class="font-bold text-blue-700">bc1qrwnqe3puqzjjg8tfzflelgt0shvfp7qpskuz9r</span>
                    <br>After deposite, investor should send receipt and secret key phrase to nhlmapleleafslicense@consultant.com for confirmation.
                </p>
                <div>
                <button @click="copy" class="p-2 rounded-[50%] bg-gray-900 grid place-items-center">
                <icon class="text-[20px] text-white" name="uil:copy"/>
                </button>
                </div>
                </div>
            </div>
        </section>
        <div class="w-full flex justify-center">
        <button @click="payment()" class="px-10 py-2 bg-blue-800 rounded-b-md">Proceed to withdrawal</button>
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
        },

        payment(){
            return alert('Please confirm your initial deposit before proceeding to withdrawal.')
        }
    }
}
</script>

<style>
    .full {
        width: 40%;
        min-width: 430px;
    }

@media screen and (max-width: 480px) {
    .full { 
        min-width: 100%;
     }
  }
</style>