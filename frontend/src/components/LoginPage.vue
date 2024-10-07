<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 class="mb-6 text-2xl font-bold text-center">登入帳戶</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">帳號</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              required 
              class="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="請輸入電子郵件" 
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">密碼</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              required 
              class="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="請輸入密碼" 
            />
          </div>
          <button type="submit" class="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">登入</button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
          還沒有帳戶？
          <router-link to="/registerPage" class="text-indigo-600 hover:underline">註冊</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log('登入:', {
          email: this.email,
          password: this.password,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* 樣式統一 */
  </style>
  