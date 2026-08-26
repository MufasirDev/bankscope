<template>
  <div class="accounts-page">

    <div class="page-header">
      <div>
        <p class="brand">BankScope</p>
        <h1>My Accounts</h1>
        <p>Manage all your connected bank accounts.</p>
      </div>

      <button @click="connectBank">
        + Connect Bank
      </button>
    </div>

    <div v-if="accounts.length" class="accounts-grid">

      <div
        v-for="account in accounts"
        :key="account.name"
        class="account-card"
      >
        <div class="account-top">
          <div class="bank-logo">
            {{ account.shortName }}
          </div>

          <span class="connected">
            ● Connected
          </span>
        </div>

        <h2>{{ account.name }}</h2>

        <p>{{ account.type }}</p>

        <div class="balance">
          <span>Available Balance</span>
          <strong>
            ₦{{ account.balance.toLocaleString() }}.00
          </strong>
        </div>

        <div class="account-number">
          Account Number
          <strong>{{ account.number }}</strong>
        </div>

        <button
          class="disconnect"
          @click="disconnectAccount(account.name)"
        >
          Disconnect
        </button>
      </div>

    </div>

    <div v-else class="empty">
      <div class="empty-icon">🏦</div>

      <h2>No bank connected</h2>

      <p>
        Connect your bank to see your account information here.
      </p>

      <button @click="connectBank">
        Connect Your First Bank
      </button>
    </div>

  </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const accounts = ref([])


onMounted(() => {

  const savedBank = localStorage.getItem('connectedBank')

  if (savedBank) {

    const bank = JSON.parse(savedBank)

    accounts.value = [
      {
        name: bank.name,
        shortName: bank.shortName,
        type: bank.type,
        balance: 2450000,
        number: '**** 4821'
      }
    ]

  }

})


function connectBank() {
  router.push('/connect-bank')
}


function disconnectAccount(name) {

  const confirmDisconnect =
    confirm(`Disconnect ${name} from BankScope?`)

  if (!confirmDisconnect) {
    return
  }

  localStorage.removeItem('connectedBank')

  accounts.value = []

}

</script>


<style scoped>

.accounts-page {
  min-height: 100vh;
  background: #f6f8fc;
  padding: 50px 7%;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.brand {
  color: #1261ff;
  font-weight: 700;
}

h1 {
  color: #102a43;
  margin: 5px 0;
  font-size: 36px;
}

.page-header p {
  color: #829ab1;
}

.page-header button,
.empty button {
  background: #1261ff;
  color: white;
  border: none;
  padding: 13px 20px;
  border-radius: 9px;
  font-weight: 700;
  cursor: pointer;
}

.accounts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.account-card {
  background: white;
  padding: 28px;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(16, 42, 67, .06);
}

.account-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bank-logo {
  width: 55px;
  height: 55px;
  border-radius: 14px;
  background: #1261ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

.connected {
  color: #16a34a;
  font-size: 13px;
}

.account-card h2 {
  color: #102a43;
  margin-bottom: 5px;
}

.account-card > p {
  color: #829ab1;
}

.balance {
  margin-top: 30px;
}

.balance span,
.account-number {
  display: block;
  color: #829ab1;
  font-size: 13px;
}

.balance strong {
  display: block;
  color: #102a43;
  font-size: 30px;
  margin-top: 8px;
}

.account-number {
  margin-top: 25px;
}

.account-number strong {
  display: block;
  color: #243b53;
  margin-top: 6px;
}

.disconnect {
  width: 100%;
  margin-top: 25px;
  padding: 12px;
  border: 1px solid #fecaca;
  background: #fff5f5;
  color: #dc2626;
  border-radius: 8px;
  cursor: pointer;
}

.empty {
  background: white;
  padding: 70px 30px;
  text-align: center;
  border-radius: 18px;
}

.empty-icon {
  font-size: 50px;
}

.empty h2 {
  color: #102a43;
}

.empty p {
  color: #829ab1;
  margin-bottom: 25px;
}

@media (max-width: 700px) {

  .accounts-page {
    padding: 30px 20px;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .accounts-grid {
    grid-template-columns: 1fr;
  }

}

</style>