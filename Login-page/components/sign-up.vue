<template>
  <div
    class="flex flex-col justify-center items-center h-auto mt-10 text-[#d1d1d1]"
  >
    <NuxtLink
      to="/"
      class="rounded-full p-3 bg-white/20 hover:bg-white/50 mt-10 md:mt-0"
    >
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>
    <h2 class="text-[40px] tracking-[2px]">Welcome</h2>
    <h4 class="text-[18px] font-light mb-10">Sign up</h4>
    <form
      class="p-5 px-24 border-[0.4px] border-gray-600 rounded-lg mx-4 md:mx-0"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">
        <div class="flex flex-col justify-center items-center gap-2 md:mr-10">
          <label for="firstname">Enter firstname</label>
          <input
            v-model="signUp.firstname"
            type="text"
            placeholder="first name"
            class="custom-input bg-black/50 backdrop-blur-md"
          />

          <label for="lastname">Enter lastname</label>
          <input
            v-model="signUp.lastname"
            type="text"
            placeholder="last name"
            class="custom-input bg-black/50 backdrop-blur-md"
          />

          <label for="address">Enter address</label>
          <input
            v-model="signUp.address"
            type="text"
            placeholder="1234 abc, alphabet"
            class="custom-input bg-black/50 backdrop-blur-md"
          />

          <label for="state">Enter state</label>
          <select
            v-model="signUp.state"
            name="state"
            id="state"
            class="custom-input bg-black/50 backdrop-blur-md appearance-none"
          >
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Northern Marianas Islands">
              Northern Marianas Islands
            </option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>

        <div class="flex flex-col justify-center items-center gap-2 md:ml-10">
          <label for="email">Enter email</label>
          <input
            v-model="signUp.email"
            type="email"
            placeholder="abc@gmail.com"
            class="custom-input bg-black/50 backdrop-blur-md"
          />

          <label for="password">Create password</label>
          <input
            v-model="signUp.password"
            type="password"
            placeholder="*********"
            class="custom-input bg-black/50 backdrop-blur-md"
          />

          <label for="password">Enter referral code</label>
          <input
            v-model="signUp.code"
            type="text"
            placeholder="Enter code"
            class="custom-input bg-black/50 backdrop-blur-md"
          />

          <div class="text-[11px]">
            Do have an account with us -
            <NuxtLink to="/signInPage">
              <span class="underline">Proceed to sign in</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <button type="submit" class="login-btn w-full">Complete</button>
    </form>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default ({
    data() {
       return{
        signUp:{
            firstname: '',
            lastname: '',
            address: '',
            state: {},
            email: '',
            code: '',
            password: '',
        }
       } 
    },
})
</script>


<style>
label {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
}
</style>