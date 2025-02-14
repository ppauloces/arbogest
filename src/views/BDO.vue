<template>
    <div class="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 relative p-4 items-center">
      <!-- Loading Overlay -->
      <div v-if="loading" class="fixed inset-0 bg-[#81cc27] bg-opacity-50 flex items-center justify-center">
      <div class="w-28 h-28 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
      
      <!-- Top Navigation -->
      <div class="flex w-full max-w-lg items-center justify-between mb-6">
        <button @click="$router.push('/relatorios')" class="text-[#81cc27] text-3xl">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="text-[#81cc27] text-2xl font-bold text-center">BDO</h1>
      </div>
      
      <!-- Steps Navigation -->
      <div class="w-full max-w-lg">
        <div v-if="step === 1">
          <label class="block text-[#81cc27] font-bold">Data:</label>
          <input v-model="formData.date" type="date" class="w-full border border-[#81cc27] p-2 rounded-md mb-2">
          
          <label class="block text-[#81cc27] font-bold">Encarregado:</label>
          <input v-model="formData.manager" type="text" class="w-full border border-[#81cc27] p-2 rounded-md mb-2">
          
          <label class="block text-[#81cc27] font-bold">Programação:</label>
          <input v-model="formData.schedule" type="text" class="w-full border border-[#81cc27] p-2 rounded-md mb-2">
          
          <label class="block text-[#81cc27] font-bold">Descrição da operação:</label>
          <input v-model="formData.operationDesc" type="text" class="w-full border border-[#81cc27] p-2 rounded-md mb-2">
          
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[#81cc27] font-bold">Cod. de operação:</label>
              <input v-model="formData.operationCode" type="text" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
            <div>
              <label class="block text-[#81cc27] font-bold">Quant. Ajudantes:</label>
              <input v-model="formData.helpers" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
            <div>
              <label class="block text-[#81cc27] font-bold">Quant. de caminhões:</label>
              <input v-model="formData.trucks" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
            <div>
              <label class="block text-[#81cc27] font-bold">Quant. de máquinas:</label>
              <input v-model="formData.machines" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
          </div>
        </div>
        
        <div v-if="step === 2">
          <h2 class="text-[#81cc27] text-xl font-bold">Quantidade de horas trabalhadas:</h2>
          <label class="block text-[#81cc27] font-bold">Talhão:</label>
          <input v-model="formData.plot" type="text" class="w-full border border-[#81cc27] p-2 rounded-md mb-2">
          
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[#81cc27] font-bold">HH:</label>
              <input v-model="formData.hh" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
            <div>
              <label class="block text-[#81cc27] font-bold">HM:</label>
              <input v-model="formData.hm" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
          </div>
          
          <h2 class="text-[#81cc27] text-xl font-bold mt-4">Rendimentos</h2>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[#81cc27] font-bold">HH PARADA:</label>
              <input v-model="formData.hhStop" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
            <div>
              <label class="block text-[#81cc27] font-bold">HM PARADA:</label>
              <input v-model="formData.hmStop" type="number" class="w-full border border-[#81cc27] p-2 rounded-md">
            </div>
          </div>
          
          <label class="block text-[#81cc27] font-bold mt-2">Máquina:</label>
          <input v-model="formData.machine" type="text" class="w-full border border-[#81cc27] p-2 rounded-md mb-2">
        </div>
        
        <!-- Navigation Buttons -->
        <div class="flex justify-between w-full max-w-lg mt-4">
          <button v-if="step === 2" @click="prevStep" class="bg-[#81cc27] text-white px-6 py-2 rounded-lg">
            VOLTAR
          </button>
          <button @click="nextStep" class="bg-[#81cc27] text-white px-6 py-2 rounded-lg">
            {{ step === 2 ? 'CADASTRAR' : 'PRÓXIMO' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1,
        loading: false,
        formData: {
          date: '',
          manager: '',
          schedule: '',
          operationDesc: '',
          operationCode: '',
          helpers: '',
          trucks: '',
          machines: '',
          plot: '',
          hh: '',
          hm: '',
          hhStop: '',
          hmStop: '',
          machine: ''
        }
      };
    },
    methods: {
      nextStep() {
        console.log('Dados atuais:', this.formData);
        if (this.step < 2) {
          this.step++;
        } else {
          this.submitForm();
        }
      },
      prevStep() {
        if (this.step > 1) this.step--;
      },
      submitForm() {
        this.loading = true;
        console.log('Enviando dados:', this.formData);
        setTimeout(() => {
          this.loading = false;
          //alert('Cadastro realizado com sucesso!');
          this.$router.push('/relatorios');
        }, 1500);
      }
    }
  };
  </script>
  
  <style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
  </style>
  