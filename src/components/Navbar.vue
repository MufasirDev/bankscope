<template>
  <nav class="navbar">
    <div class="logo">FinView</div>

    <div class="nav-links">
      <button @click="goTo('/dashboard')">Dashboard</button>

      <button @click="goTo('/accounts')">Accounts</button>

      <button @click="goTo('/transactions')">Transactions</button>
    </div>

    <button class="logout" @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goTo(path) {
  router.push(path);
}

function logout() {
  localStorage.removeItem("connectedBank");
  router.push("/login");
}
</script>

<style scoped>
.navbar {
  height: 70px;
  padding: 0 5%;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo {
  font-size: 23px;
  font-weight: 800;
  color: #1261ff;
}

.nav-links {
  display: flex;
  gap: 10px;
  flex: 1;
}

.nav-links button,
.logout {
  border: none;
  background: transparent;
  padding: 10px 14px;
  cursor: pointer;
  color: #52606d;
  border-radius: 7px;
}

.nav-links button:hover {
  background: #f0f4ff;
  color: #1261ff;
}

.logout {
  color: #dc2626;
}
</style>
