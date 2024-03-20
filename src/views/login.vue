<template>
  <div>
    <!-- component -->
<div class="flex h-screen">
  <!-- Left Pane -->
  <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
    <div class="max-w-xl text-center">
      <img src="../assets/wmgt.png"  class="w-full" alt="">
    </div>
  </div>
  <!-- Right Pane -->
  <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
    <div class="max-w-md w-full p-6">
      <h1 class="text-3xl font-semibold mb-6 text-black text-center">Sign In</h1>
      <form @submit.prevent="login()" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" v-model="creds.username" name="username" placeholder="johndoe" class="mt-1 pt-1 px-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="text" id="email" name="email" v-model="creds.password" placeholder="******" class="mt-1 pt-1 px-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
        </div>
        <div>
          <button type="submit" class="w-full bg-black text-white py-1 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign In</button>
        </div>
      </form>
      <div class="mt-4 text-sm text-gray-600 text-center">
        <p>Don't have an account? Please contact your administrator </p>
      </div>
    </div>
  </div>
</div>  
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      creds:{
        username:'',
        password:''
      }
    };
  },    
  methods:{
        login(){
          
            axios.post('http://bin.greatergraceag.com/api/auth', this.creds,
            )
            .then((response) => {
                this.setCookie('token', response.data.token)
                this.$router.push({name: 'map'})
            })
            .catch((error) => {
				this.msg = error.response.data
				this.msgColor = 'text-danger'
				setInterval(() => {
					this.msg = ''
					this.msgColor = null
				}, 5000);
                // console.log(error);
            });
        },
        getCookie(cname){
          let name = cname + "=";
          let ca = document.cookie.split(';');
          for(let i = 0; i < ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
              c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
              }
          }
          return "";
        },
        setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          let expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";"+ expires + ";path=/";
        },
    },
}
</script>
<style >
  .leaflet-div-icon {
    border: none;
    background: transparent;
}
</style>