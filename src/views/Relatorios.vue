<template>
    <div class="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 relative p-4 items-center">
      <!-- Top Navigation -->
      <div class="flex justify-between w-full max-w-lg items-center mb-6">
        <button @click="$router.push('/dashboard')" class="text-[#81cc27] text-3xl">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button @click="$router.push('/bdo')" class="bg-[#81cc27] text-white px-4 py-2 rounded-lg">ADICIONAR +</button>
      </div>
      
      <!-- Title Centered Above Table -->
      <h1 class="text-[#81cc27] text-2xl font-bold text-center mb-4">RELATÓRIOS (BDO)</h1>
      
      <!-- Table -->
      <div class="w-full max-w-lg">
        <div class="bg-[#81cc27] text-white font-bold flex justify-between p-2 rounded-t-lg">
          <span class="w-1/3 text-center">DATA</span>
          <span class="w-1/3 text-center">STATUS</span>
          <span class="w-1/3 text-center">AÇÕES</span>
        </div>
        <div v-for="(report, index) in reports" :key="index" class="flex justify-between p-2 border-b bg-white items-center">
          <span class="w-1/3 text-center">{{ report.date }}</span>
          <span class="w-1/3 text-center" :class="report.status === 'SINCRONIZADO' ? 'text-green-500' : 'text-red-500'">
            {{ report.status }}
          </span>
          <div class="w-1/3 flex justify-center gap-2">
            <button class="text-blue-500 text-xl"><i class="fas fa-eye"></i></button>
            <button class="text-yellow-500 text-xl"><i class="fas fa-edit"></i></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reports: [
          { date: '23/08', status: 'NÃO SINCRONIZADO' },
          { date: '22/08', status: 'SINCRONIZADO' },
          { date: '21/08', status: 'SINCRONIZADO' },
          { date: '20/08', status: 'SINCRONIZADO' },
          { date: '19/08', status: 'SINCRONIZADO' },
          { date: '18/08', status: 'SINCRONIZADO' },
        ],
      };
    },
    methods: {
      addReport() {
        console.log('Adicionar novo relatório');
      },
    },
  };
  </script>
  
  <style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
  </style>
  