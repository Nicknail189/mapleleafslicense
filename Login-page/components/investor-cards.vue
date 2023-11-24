<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 text-center text-black bg-white py-4">
        <!-- <NuxtLink to="/viewInvestor"> -->
        <div class="flex flex-col justify-center items-center">
            <div class="w-[140px] h-[140px] rounded-[50%] opacity-70 bg-[url('/public/Jessi.jpg')] bg-center bg-cover bg-no-repeat"></div>
            <p class="font-medium text-[14px] mt-[10px]">Jessica Gilbert
                <!-- <sup class="px-[3px] py-[1px] leading-[4px] bg-green-500 text-white rounded-sm">user</sup> -->
            </p>
            <p class="text-[18px] font-bold">$209,667</p>
        </div>
        <!-- </NuxtLink> -->

        <NuxtLink to="/jeff">
        <div class="flex flex-col justify-center items-center">
            <div class="w-[140px] h-[140px] rounded-[50%] bg-[url('https://i2.wp.com/liveforlivemusic.com/wp-content/uploads/2015/08/JeffChimenti_12-06-2013_portrait.jpg?fit=740%2C600&ssl=1')] bg-center bg-cover bg-zoom bg-no-repeat"></div>
            <p class="font-medium text-[14px] mt-[10px]">Jeff Chimenti <sup class="px-[3px] py-[1px] leading-[4px] bg-green-500 text-white rounded-sm">Active</sup></p>
            <p class="text-[18px] font-bold">$146,552</p>
        </div>
        </NuxtLink>

        <div class="flex flex-col justify-center items-center">
            <div class="w-[140px] h-[140px] rounded-[50%] opacity-70 bg-[url('/public/creed.jpg')] bg-center bg-cover bg-top bg-no-repeat"></div>
            <p class="font-medium text-[14px] mt-[10px]">Creed Mckinnon</p>
            <p class="text-[18px] font-bold">$124,667</p>
        </div>

        <div class="flex flex-col justify-center items-center">
            <div class="w-[140px] h-[140px] rounded-[50%] opacity-70 bg-[url('/public/white.avif')] bg-center bg-cover bg-top bg-no-repeat"></div>
            <p class="font-medium text-[14px] mt-[10px]">Joseph White</p>
            <p class="text-[18px] font-bold">$99,209</p>
        </div>
    </div>
</template>
