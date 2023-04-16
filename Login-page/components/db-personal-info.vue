<template>
  <div class="container mt-10 md:mt-0 h-max w-full min-w-[289px] xl:max-w-[310px] bg-white text-[#333] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-6">
    <div>
      <img class="w-full md:max-w-[310px]" src="/profile.jpg" alt="">
    </div>
    
    <div class="text-md">
      <div class="pi text-[#182565]">
        <h4>Account:</h4>
        <span>{{ personal.account }}</span>
      </div>
      <div class="pi text-[#ca9039]">
        <h4>Profession:</h4>
        <span>{{ personal.package }}</span>
      </div>
      <div class="pi">
        <h4>Firstname:</h4>
        <span>{{ personal.firstname }}</span>
      </div>
      <div class="pi">
        <h4>Lastname:</h4>
        <span>{{ personal.lastname }}</span>
      </div>
      <div class="pi">
        <h4>Date of birth:</h4>
        <span>{{ personal.dob }}</span>
      </div>
      <div class="pi">
        <h4>Address:</h4>
        <span>{{ personal.address }}</span>
      </div>
      <div class="pi">
        <h4>State:</h4>
        <span>{{ personal.state }}</span>
      </div>
      <div class="pi">
        <h4>Country:</h4>
        <span>{{ personal.country }}</span>
      </div>
      <div class="pi">
        <h4>Sex:</h4>
        <span>{{ personal.sex }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      personal: {
        account: 'Active Investor',
        package: 'Athlete',
        firstname: 'Auston',
        lastname: 'Matthews',
        dob: '9/17/1997',
        address: 'undisclosed',
        state: 'California',
        country: 'USA',
        sex: 'Male'
      }
    }
  }
}
</script>

<style scoped>
h4 {
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

span {
  width: 50%;
  text-align: right;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  padding: 4px 10px;
}
</style>