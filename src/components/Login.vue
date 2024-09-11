<template>
    <div class="login">
      <h2>Login</h2>
      <div>
        <label for="email" style="display: block;">Email:</label>
        <input v-model="email" type="email" id="email"/>
        <span v-if="errorEmail" style="color: red; display: block;">{{ errorEmail }}</span>
      </div>
      <div>
        <label for="password" style="display: block;">Password:</label>
        <input v-model="password" type="password" id="password"/>
        <span v-if="errorPassword" style="color: red; display: block;">{{ errorPassword }}</span>
      </div>
      <button @click="login" style="margin-top: 20px;">Login</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
      const errorEmail = ref('');
      const errorPassword = ref('');
      const router = useRouter();
  
      const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value) {
          errorEmail.value = 'Email is required';
        } else if (!emailPattern.test(email.value)) {
          errorEmail.value = 'Invalid email format';
        } else {
          errorEmail.value = '';
        }
      };
  
      const validatePassword = () => {
        if (!password.value) {
          errorPassword.value = 'Password is required';
        } else {
          errorPassword.value = '';
        }
      };
  
      const login = () => {
        validateEmail();
        validatePassword();
  
        if (!errorEmail.value && !errorPassword.value) {
          
          console.log('Email:', email.value, 'Password:', password.value);
  
          
          router.push('/gracias');
        }
      };
  
      return {
        email,
        password,
        errorEmail,
        errorPassword,
        login
      };
    }
  });
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: auto;
  }
  </style>

  <style scoped>
  </style>