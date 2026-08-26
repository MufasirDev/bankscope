<template>
  <div class="register-page">

    <div class="register-card">

      <h1>Create your BankScope Account</h1>

      <p>Join BankScope and manage your finances in one place.</p>

      <form @submit.prevent="register">

        <input
          v-model="fullName"
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          v-model="email"
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          v-model="phone"
          type="tel"
          placeholder="Phone Number"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />

        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />

        <label class="terms">
          <input
            v-model="acceptedTerms"
            type="checkbox"
          />
          I agree to the Terms & Conditions
        </label>

        <p v-if="errorMessage" class="error">
          {{ errorMessage }}
        </p>

        <button type="submit">
          Create Account
        </button>

      </form>

      <p class="login-text">
        Already have an account?

        <button
          type="button"
          class="login-button"
          @click="goToLogin"
        >
          Sign in
        </button>
      </p>

    </div>

  </div>
</template>


<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptedTerms = ref(false)

const errorMessage = ref('')


function register() {

  errorMessage.value = ''

  if (password.value.length < 4) {
    errorMessage.value =
      'Password must contain at least 4 characters.'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value =
      'Passwords do not match.'
    return
  }

  if (!acceptedTerms.value) {
    errorMessage.value =
      'Please accept the Terms & Conditions.'
    return
  }

  const user = {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value
  }

  localStorage.setItem(
    'bankscopeUser',
    JSON.stringify(user)
  )

  router.push('/dashboard')
}


function goToLogin() {
  router.push('/login')
}

</script>


<style scoped>

.register-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f8fc;
  padding: 30px;
}

.register-card {
  width: 100%;
  max-width: 450px;
  background: white;
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

h1 {
  color: #102a43;
  margin-bottom: 10px;
}

p {
  color: #627d98;
}

form {
  margin-top: 25px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  margin-bottom: 15px;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  outline: none;
}

input:focus {
  border-color: #1261ff;
}

.terms {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #627d98;
  margin: 10px 0 20px;
}

.terms input {
  width: auto;
  margin: 0;
}

.error {
  background: #fff1f2;
  color: #dc2626;
  padding: 10px;
  border-radius: 7px;
  font-size: 14px;
}

form button[type="submit"] {
  width: 100%;
  padding: 14px;
  background: #1261ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

form button[type="submit"]:hover {
  background: #0b52df;
}

.login-text {
  text-align: center;
  margin-top: 20px;
}

.login-button {
  border: none;
  background: transparent;
  color: #1261ff;
  font-weight: bold;
  cursor: pointer;
}

</style>