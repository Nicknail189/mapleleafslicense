<template>
  <div
    class="h-auto md:h-auto w-full md:grid md:grid-cols-3 flex flex-col justify-center items-center"
  >
    <div
      class="hidden md:block relative md:col-span-2 bg-[url('https://www.tsn.ca/polopoly_fs/1.842067.1504043373!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/air-canada-centre.jpg')] bg-cover"
    >
      <div class="bg-[#182565de] w-full h-full p-20">
        <!-- company logo -->
        <div
          class="z-40 inline-flex items-center p-3 text-[30px] font-extrabold"
        >
          <img
            class="w-20 h-24 mr-4 ml-[-10px]"
            src="https://cms.nhl.bamgrid.com/images/assets/binary/291573114/binary-file/file.svg"
            alt="company-logo"
          />
          <div>
            <h2 class="medium-header mt-4 font-normal tracking-wider">TORONTO MAPLE LEAFS</h2>
          <h4 class="large-header uppercase font-thin">
            WELCOME TO MAPLE LEAFS VIP MEMBERSHIP
          </h4>
          </div>
          
        </div>

        <!-- text -->
        <div class="z-40">

          <br />
          <p class="w-8/12 font-light">
             mapleleafslicense.vercel.app is the official Website of the Toronto Maple Leafs VIP Members. The mapleleafslicense.vercel.app and mapleleafs.com are trademarks of MLSE. NHL, the NHL Shield, the word mark and image of the Stanley Cup and NHL Conference logos are registered trademarks of the National Hockey League.
            <br />
            <br />
            All NHL logos and marks and NHL team logos and marks as well as all other proprietary materials depicted herein are the property of the NHL and the respective NHL teams and may not be reproduced without the prior written consent of NHL Enterprises, L.P. Copyright © 1999-2023 MLSE and the National Hockey League. All Rights Reserved.
            <br />
            <br />
            We are happy to share with you some in-house priviledges and bids of investments.
            <br />
            <br />
            Account of any member of TMLVIP is protected 100%.
          </p>
          <br />
          <br />
          <br />
          <div class="flex items-center justify-between">
            <icon class="text-[40px]" name="uil:user-check" />
            <icon class="w-10/12" name="uil:arrows-h" />
            <icon class="text-[40px]" name="uil:money-stack" />
          </div>
        </div>
      </div>
    </div>

    <div class="h-full flex flex-col justify-center items-center gap-4 md:bg-none bg-cover bg-center bg-no-repeat bg-[url('https://www.tsn.ca/polopoly_fs/1.842067.1504043373!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/air-canada-centre.jpg')]">
    <div class="md:hidden bg-[#182565b2] absolute top-0 bottom-0 right-0 left-0 h-[980px]"></div>

      <div
        class="z-40 mt-10 rounded-md mb-5 inline-flex flex-col text-center items-center text-[30px] p-3 md:hidden"
      >
        <img
          class="w-20 h-24"
          src="https://cms.nhl.bamgrid.com/images/assets/binary/291573114/binary-file/file.svg"
          alt="company-logo"
        />
        
          <div>
          <h2 class="text-sm mt-4 font-normal tracking-wider">TORONTO MAPLE LEAFS</h2>
          <h4 class="text-[24px] uppercase font-thin">
            WELCOME TO LEAFS MEMBERSHIP
          </h4>
          </div>
      </div>

      <!-- signin buttons -->
      
      <NuxtLink to="/signUpPage" class="z-20">
        <button class="login-btn">Sign up</button>
      </NuxtLink>
      <NuxtLink to="/signInPage" class="z-20">
        <button class="login-btn">Sign in</button>
      </NuxtLink>
      <!-- <NuxtLink to="/register" class="z-20">
        <button class="login-btn">Register</button>
      </NuxtLink> -->

              <!-- text -->
        <div class="z-40 md:hidden p-4">

          <br />
          <p class="font-light">
             mapleleafslicense.vercel.app is the official Website of the Toronto Maple Leafs VIP. The Maple Leafs and mapleleafs.com are trademarks of MLSE. NHL, the NHL Shield, the word mark and image of the Stanley Cup and NHL Conference logos are registered trademarks of the National Hockey League.
            <br />
            <br />
            All NHL logos and marks and NHL team logos and marks as well as all other proprietary materials depicted herein are the property of the NHL and the respective NHL teams and may not be reproduced without the prior written consent of NHL Enterprises, L.P. Copyright © 1999-2023 MLSE and the National Hockey League. All Rights Reserved.
            <br />
            <br />
            We are happy to share with you some in-house priviledges and bids of investments.
            <br />
            <br />
            Account of any member of TMLVIP is protected 100%.
          </p>
          <br />
          <br />
          <br />
          <div class="flex items-center justify-between mb-10">
            <icon class="text-[24px]" name="uil:user-check" />
            <icon class="w-12/12" name="uil:arrows-h" />
            <icon class="text-[24px]" name="uil:money-stack" />
          </div>
        </div>
    </div>
  </div>
</template>