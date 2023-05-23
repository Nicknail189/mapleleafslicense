<template>
  <div class="container w-full md:min-w-[400px] bg-[#232432] md:mb-4 flex flex-col p-5">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <p>Premium Membership</p>
        <h2 class="text-[20px] text-[#f3f3f3]">Athlete (Toronto Maple Leafs)</h2>
      </div>

      <div class="md:text-right mt-5 md:mt-0">
        <p>Available funds</p>
        <h2 class="text-[34px] font-bold text-[#f3f3f3]">
          $2,362,500.<span class="text-gray-400 text-[24px]">00</span>
        </h2>
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-4 md:flex-col">
      <div
        @mouseenter="sent = !sent"
        @mouseleave="sent = !sent"
        class="flex items-center gap-2 cursor-pointer"
      >
        <div class="p-2 rounded-md bg-red-400/50 flex items-center gap-2">
          <icon class="text-[18px] text-red-600" name="uil:top-arrow-to-top" />
          <p v-if="sent">Withdrawn</p>
        </div>
        <h4>$1,838,903.00</h4>
      </div>

      <div
        @mouseenter="received = !received"
        @mouseleave="received = !received"
        class="flex items-center gap-2 cursor-pointer"
      >
        <div class="p-2 rounded-md bg-green-400/20 flex items-center gap-2">
          <icon class="text-[18px] text-green-600" name="uil:arrow-from-top" />
          <p v-if="received">Received</p>
        </div>
        <h4>$4,201,403.00</h4>
      </div>

      <div
        @mouseenter="investment = !investment"
        @mouseleave="investment = !investment"
        class="flex items-center gap-2 cursor-pointer"
      >
        <div class="p-2 rounded-md bg-blue-400/20 flex items-center gap-2">
          <icon class="text-[18px] text-blue-500" name="uil:money-bill-stack" />
          <p v-if="investment">Investment</p>
        </div>
        <h4>$2,362,500.00  <i>PJ: 30.67% ROI in 2023</i></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      sent: false,
      received: false,
      investment: false,
      bitcoin: false,
    }
  },
})
</script>

<style scoped>
p {
  font-size: 12px;
  color: rgb(212, 212, 212);
}

h4 {
  font-size: 18px;
}
</style>