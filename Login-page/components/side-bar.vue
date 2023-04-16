<template>
  <div class="container w-full md:w-[300px] h-screen bg-white">
    <ul class="px-4 text-[14px] text-[#333]">
      <li><icon name="uil:create-dashboard" /> Dashboard</li>
      <li><icon name="uil:bell" /> Notification</li>
      <li><icon name="uil:envelope" /> Contact</li>
      <li><icon name="uil:setting" /> Settings</li>
      <li><icon name="uil:money-withdrawal" /> Withdrawals</li>
      <li class="md:hidden" @click="$emit('closeSidebar')">
        <icon name="uil:times" /> Close Sidebar
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['closeSidebar']
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
}

ul li:hover {
  background: #006f9e32;
}

.icon {
  font-size: 20px;
  margin-right: 8px;
}
</style>