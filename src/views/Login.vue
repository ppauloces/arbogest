<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 relative">
      <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
        <div class="w-16 h-16 border-4 border-[#81cc27] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div class="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        <div class="flex flex-col items-center mt-[-200px]">
          <img src="/logo.png" alt="Logo" class="w-90 h-auto" />
          <p class="text-[#81cc27] text-3xl font-bold tracking-wide">LOGIN</p>
        </div>
        <form @submit.prevent="login" class="mt-6">
          <div>
            <label class="block text-gray-700">E-mail</label>
            <input 
              v-model="email" 
              type="email" 
              class="w-full mt-1 p-2 border-b-2 border-[#81cc27] focus:outline-none" 
              required 
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Senha</label>
            <input 
              v-model="password" 
              type="password" 
              class="w-full mt-1 p-2 border-b-2 border-[#81cc27] focus:outline-none" 
              required 
            />
          </div>
          <div class="flex items-center justify-between mt-4">
            <label class="flex items-center text-sm text-gray-600">
              <input v-model="rememberMe" type="checkbox" class="mr-2" />
              Me manter conectado
            </label>
            <a href="#" class="text-red-500 text-sm">Esqueceu a senha?</a>
          </div>
          <button @click="$router.push('/dashboard')"
            type="submit" 
            class="w-full mt-6 p-2 bg-[#81cc27] text-white font-semibold rounded-lg hover:bg-[#4f860d] transition"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
        loading: false,
      };
    },
    methods: {
      login() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.push('/dashboard');
        }, 2000);
      },
    },
  };
  </script>
  