<template>
  <div class="container w-full md:w-[300px] h-screen bg-white">
    <ul class="px-4 text-[14px] text-[#333]">
      <li @click="warn = true"><icon name="uil:create-dashboard" /> Dashboard</li>
      <li @click="warn = true"><icon name="uil:bell" /> Notification</li>
      <li @click="warn = true"><icon name="uil:envelope" /> Contact</li>
      <li @click="warn = true"><icon name="uil:setting" /> Settings</li>
      <li @click="warn = true"><icon name="uil:money-withdrawal" /> Withdrawals</li>
      <li class="md:hidden" @click="$emit('closeSidebar')">
        <icon name="uil:times" /> Close Sidebar
      </li>
    </ul>

    <div v-if="warn === true"  class="z-50 bg-gray-800/60 px-5 backdrop-blur-md w-full h-full absolute top-0 left-0 text-[#333] flex justify-center items-start">
    <div class="bg-white p-6 rounded-md mt-20">
      <button @click="warn = false" class="p-1 rounded-md w-full inline-flex justify-end bg-gray-100 mb-6"><icon class="text-[20px] text-gray-900" name="uil:times"/></button>
      <h2 class="text-[24px] text-blue-700 mb-3">Notification</h2>
      <p>Visitors are restricted from performing further actions. To open an investor account with the leafs, contact your referrer.</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeSidebar'],
  data(){
    return {
      warn: false
    }
  }
}
</script>

<style scoped>
ul li {
  width: 100%;
  padding: 10px;
  margin: 20px 0px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

ul li:hover {
  background: #006f9e32;
}

.icon {
  font-size: 20px;
  margin-right: 8px;
}
</style>