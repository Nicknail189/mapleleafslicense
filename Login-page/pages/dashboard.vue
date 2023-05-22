<template>

  <div class="h-auto md:p-5 w-full md:mt-10 bg-[#f3f3f3] flex items-center justify-center">
    <div>
      <!-- side bar call button -->
      <div
        @click="dashboard()"
        class="md:hidden z-30 rounded-[50%] fixed right-[20px] bottom-[40px] w-16 h-16 bg-black flex justify-center items-center"
      >
        <icon class="text-[30px]" name="uil:create-dashboard" />
      </div>

      <div class="flex w-full h-full md:gap-4">
        <!-- side bar -->
        <div class="md:sticky">
          <div
          id="side-bar"
          class="z-20 fixed left-[-1000px] md:sticky md:top-14 w-full md:w-auto mt-10 md:mt-0"
        >
          <NuxtLink to="/">
            <navigation />
          </NuxtLink>
          <side-bar @close-sidebar="closedashboard()" />
        </div>
        </div>

        <!-- dashboard content -->
        <div class="flex flex-col w-full z-10">
          <div class="flex flex-col xl:flex-row items-start md:gap-4">
            <db-personal-info />
            <div class="flex flex-col w-full">
            <amount />
            <ticket />
            </div>
          </div>
          <div>
            <div class="flex items-center w-full bg-blue-900 p-2 mt-12 rounded-md text-[20px]">
              <icon class="mr-3 text-[32px]" name="ri:t-shirt-2-fill"/>
              NHL Official Licensed Gear
            </div>
            <db-cards />
          </div>
          <div class="flex items-center w-full bg-blue-900 p-2 mt-12 mb-4 rounded-md text-[20px]">
              <icon class="mr-3 text-[32px]" name="material-symbols:deployed-code-history"/>
              Application History
            </div>
          <transactions />
          <div class="container bg-blue-900 px-4 py-10">For any issue of double payment, transactions, and delay, kindly send a mail to <b class="underline cursor-pointer">nhlmapleleafslicense@consultant.com</b> with the theme TRANSACTION.</div>
        </div>
      </div>
      
      <Footer/>
    </div>
    
  </div>

</template>

<script>

export default {
    methods: {
      dashboard(){
        document.getElementById('side-bar').style.left = '0px'
      },
      closedashboard(){
        document.getElementById('side-bar').style.left = '-1000px'
      },
    }
}
</script>