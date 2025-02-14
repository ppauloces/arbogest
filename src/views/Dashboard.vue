<template>
    <div class="flex min-h-screen bg-gradient-to-b from-white to-gray-100 relative">
      <!-- Sidebar Toggle Button -->
      <button @click="toggleSidebar" class="absolute top-4 left-4 z-50 text-[#81cc27] text-3xl">
        <i class="fas fa-bars"></i>
      </button>
      
      <!-- Sidebar -->
      <div :class="['w-64 bg-[#81cc27] text-white p-5 absolute left-0 top-0 h-full transition-transform', sidebarOpen ? 'translate-x-0' : '-translate-x-full']">
        <button @click="toggleSidebar" class="text-white text-2xl absolute top-4 right-4">
          <i class="fas fa-times"></i>
        </button>
        <p class="text-lg font-bold mt-10">Menu</p>
        <ul class="mt-4">
          <li class="py-2"><a href="#">Perfil</a></li>
          <li class="py-2"><a href="#">Configurações</a></li>
          <li class="py-2"><a href="#">Sair</a></li>
        </ul>
      </div>
      
      <!-- Main Content -->
      <div class="flex-1 flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Logo" class="w-90 h-auto" />
        <div class="grid grid-cols-2 gap-4 mt-6">
          <button @click="$router.push('/relatorios')"  class="w-32 h-32 bg-[#81cc27] text-white font-bold flex flex-col items-center justify-center rounded-lg shadow-lg">
            <i class="fas fa-chart-bar text-4xl"></i>
            <span class="text-sm">RELATÓRIOS</span>
          </button>
          <button class="w-32 h-32 bg-[#81cc27] text-white font-bold flex flex-col items-center justify-center rounded-lg shadow-lg">
            <i class="fas fa-seedling text-4xl"></i>
            <span class="text-sm">IMPLEMENTOS</span>
          </button>
          <button class="w-32 h-32 bg-[#81cc27] text-white font-bold flex flex-col items-center justify-center rounded-lg shadow-lg">
            <i class="fas fa-warehouse text-4xl"></i>
            <span class="text-sm">ESTOQUE</span>
          </button>
          <button class="w-32 h-32 bg-[#81cc27] text-white font-bold flex flex-col items-center justify-center rounded-lg shadow-lg">
            <i class="fas fa-sync-alt text-4xl"></i>
            <span class="text-sm">SINCRONIZAÇÃO</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebarOpen: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
      },
    },
  };
  </script>
  
  <style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
  </style>
  