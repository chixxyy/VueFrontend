<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center text-gray-900">註冊帳戶</h1>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">帳號</label>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              required 
              class="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="請輸入用戶名" 
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">電子郵件</label>
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
          <div>
            <label for="confirm-password" class="block text-sm font-medium text-gray-700">確認密碼</label>
            <input 
              type="password" 
              id="confirm-password" 
              v-model="confirmPassword" 
              required 
              class="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="請再次輸入密碼" 
            />
          </div>
          <button type="submit" class="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">註冊</button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
          已有帳號？
          <router-link to="/LoginPage" class="text-indigo-600 hover:underline">登入</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async handleSubmit() {
        if (this.password !== this.confirmPassword) {
          alert('密碼和確認密碼不一致！');
          return;
        }
        
        try {
          const response = await axios.post('http://127.0.0.1:8000/register/', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          
          // 處理成功的回應
          console.log('註冊成功:', response.data);
          alert('註冊成功！');
          // 例如，轉到登入頁面或主頁
          this.$router.push('/LoginPage');
        } catch (error) {
          // 處理錯誤的回應
          console.error('註冊失敗:', error.response.data);
          alert('註冊失敗！請檢查您的資料。');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 樣式與登入頁面保持一致 */
  </style>
  