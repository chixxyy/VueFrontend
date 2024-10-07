<template>
    <nav class="fixed top-0 left-0 w-full p-4 bg-blue-500 shadow-sm">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-lg font-bold text-white">Weather</router-link>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/LoginPage" class="text-white hover:text-gray-200">登入</router-link>
          </li>
          <li>
            <router-link to="/RegisterPage" class="text-white hover:text-gray-200">註冊</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  