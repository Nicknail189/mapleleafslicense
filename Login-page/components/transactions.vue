<template>
    <div class="bg-white pt-16 md:pt-0">
      <div class="pb-10 relative h-auto max-h-[400px] md:mt-4 md:p-3 lg:w-auto shadow-lg rounded bg-white text-[#333] flex flex-col justify-start items-center">

      <h2 class="uppercase text-[#333] text-[16px] font-black text-center my-2">
          Your actions will appear here
      </h2>
      
      <div class="w-[390px] sm:w-full  overflow-auto">
        <table class="w-full">
      <tr>
        <th>s/n</th>
        <th>date</th>
        <th>name</th>
        <th>title</th>
        <th>ticket</th>
        <th>price</th>
        <th>status</th>
        <th>license</th>
        <th>lic/status</th>
        <th>action</th>
      </tr>
      <tr v-for="action in actions" :key="action.sn">
        <td>{{action.sn}}</td>
        <td>{{action.date}}</td>
        <td class="min-w-[180px]">{{action.name}}</td>
        <td>{{action.title}}</td>
        <td>{{action.ticket}}</td>
        <td>{{action.price}}</td>
        <td v-html="action.status"></td>
        <td>{{action.license}}</td>
        <td v-html="action.tag"></td>
        <td>
          <input @click="openPopUp" class="text-[10px] text-white bg-black/20 hover:bg-green-700 px-2 py-1 rounded-sm" type="button" value="make payment">
        </td>
      </tr>
        </table>
      </div>
    <div><paymentModal v-show="pay" @close="closePopUp"/></div>

      </div>
  
      <div class="pb-10 relative h-auto max-h-[400px] md:p-3 lg:w-auto shadow-lg rounded bg-white text-[#333] flex flex-col justify-start items-center">

      <h2 class="uppercase text-[#333] text-[16px] font-black text-center my-2">
          Actions (Gears)
      </h2>
      
      <div class="w-[390px] sm:w-full  overflow-auto">
        <table class="w-full">
      <tr>
        <th>s/n</th>
        <th>date</th>
        <th>title</th>
        <th>price</th>
        <th>status</th>
        <th>license</th>
        <th>lic/status</th>
      </tr>
      <tr v-for="gear in gears" :key="gear.sn">
        <td>{{gear.sn}}</td>
        <td>{{gear.date}}</td>
        <td class="min-w-[180px]">{{gear.title}}</td>
        <td>{{gear.price}}</td>
        <td v-html="gear.status"></td>
        <td>{{gear.license}}</td>
        <td v-html="gear.tag"></td>
      </tr>
        </table>
      </div>

      </div>
    </div>
</template>

<script>
export default {
  emits: ['payment'],
  data(){
    return {
      pay: false,
      actions:[
        {
          sn: 1,
          title: 'License',
          name: 'Cathy Arnold',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
          ticket: 'Gold',
          price: '$9,499',
          license: '$2,999',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>'
        },
        {
          sn: 2,
          title: 'License',
          name: 'Sue Fox-Hutson',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
          ticket: 'Silver',
          price: '$5,000',
          license: '$1,999',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>'
        },
        {
          sn: 3,
          title: 'License',
          name: 'Creed Mc Kinnon',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
          ticket: 'Gold',
          price: '$9,499',
          license: '$2,999',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>'
        },
        {
          sn: 4,
          title: 'License',
          name: 'Tyler Lanktree',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
          ticket: 'Gold',
          price: '$9,499',
          license: '$2,999',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>'
        },
        {
          sn: 5,
          title: 'License',
          name: 'Dave Fehr',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
          ticket: 'Silver',
          price: '$5,000',
          license: '$1,999',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>'
        },
        {
          sn: 6,
          title: 'License',
          name: 'Marlene Silver',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
          ticket: 'Silver',
          price: '$5,000',
          license: '$1,999',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>'
        }
      ],

      gears:[
        {
          sn: 1,
          title: 'vs. Montreal Canadiens on May 22, 2021',
          price: '$14,999',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">sold</p>',
          license: '$2,000',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-green-600 text-white text-[10px] leading-[10px]">paid</p>',
        },
        {
          sn: 2,
          title: 'Game Used 5-24-21 vs. MTL" Inscription',
          price: '$14,999',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-blue-600 text-white text-[10px] leading-[10px]">available</p>',
          license: '$2,000',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>',
        },
        {
          sn: 3,
          title: 'Fanatics Authentic 36" x 48',
          price: '$4,999',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-blue-600 text-white text-[10px] leading-[10px]">available</p>',
          license: '$1,500',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>',
        },
        {
          sn: 4,
          title: 'White Adidas Authentic Jersey Hand Painted',
          price: '$2,999',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-blue-600 text-white text-[10px] leading-[10px]">available</p>',
          license: '$500',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>',
        },
        {
          sn: 5,
          title: 'Autographed Fanatics Authentic Blue Jersey - Hand Painted',
          price: '$3,499',
          status: '<p class="inline-block p-1 px-2 rounded-sm bg-gray-600 text-white text-[10px] leading-[10px]">retrieved</p>',
          license: '$500',
          tag: '<p class="inline-block p-1 px-2 rounded-sm bg-red-600 text-white text-[10px] leading-[10px]">unpaid</p>',
        },
      ]
    }
  },

  methods: {
      openPopUp(){
        this.pay = true
      },
      closePopUp(){
        this.pay = false
      }
  }
}
</script>

<style scoped>
table,
th,
td {
  text-align: center;
  padding: 4px 10px;
  border: solid 0.3px #8080802a;
}

table {
  width: 100%;
}

th {
  color: #182565;
  text-transform: uppercase;
}
</style>