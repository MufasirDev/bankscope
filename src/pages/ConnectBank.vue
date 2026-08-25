<template>
  <div class="connect-page">
    <div class="header">
      <button class="back" @click="goBack">← Back</button>

      <div>
        <h1>Connect a Bank</h1>
        <p>Choose your bank to securely connect your account.</p>
      </div>
    </div>

    <div v-if="!selectedBank" class="bank-section">
      <h2>Select your bank</h2>

      <div class="bank-grid">
        <button
          v-for="bank in banks"
          :key="bank.name"
          class="bank-card"
          @click="selectBank(bank)"
        >
          <div class="bank-logo">
            {{ bank.shortName }}
          </div>

          <div>
            <strong>{{ bank.name }}</strong>
            <p>Connect account</p>
          </div>

          <span>→</span>
        </button>
      </div>
    </div>

    <div v-else class="consent-card">
      <button class="back" @click="selectedBank = null">
        ← Choose another bank
      </button>

      <div class="selected-bank">
        <div class="bank-logo">
          {{ selectedBank.shortName }}
        </div>

        <div>
          <h2>{{ selectedBank.name }}</h2>
          <p>Bank connection</p>
        </div>
      </div>

      <hr>

      <h2>Give BankScope access</h2>

      <p class="consent-text">
        BankScope needs your permission to securely access the following
        information from your bank:
      </p>

      <div class="permissions">
        <div>
          <span>✓</span>
          <p>
            <strong>Account information</strong>
            <small>Account name and account type</small>
          </p>
        </div>

        <div>
          <span>✓</span>
          <p>
            <strong>Account balance</strong>
            <small>Your available account balance</small>
          </p>
        </div>

        <div>
          <span>✓</span>
          <p>
            <strong>Transaction history</strong>
            <small>Your recent financial transactions</small>
          </p>
        </div>
      </div>

      <div class="security">
        🔒 Your banking credentials are not stored by BankScope.
      </div>

      <button class="connect-button" @click="connectAccount">
        Give Consent & Connect
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedBank = ref(null)

const banks = [
  {
    name: 'Bank A',
    shortName: 'BA'
  },
  {
    name: 'Bank B',
    shortName: 'BB'
  },
  {
    name: 'Bank C',
    shortName: 'BC'
  },
  {
    name: 'Bank D',
    shortName: 'BD'
  }
]

function selectBank(bank) {
  selectedBank.value = bank
}

function connectAccount() {
  localStorage.setItem(
    'connectedBank',
    JSON.stringify(selectedBank.value)
  )

  router.push('/dashboard')
}

function goBack() {
  router.push('/dashboard')
}
</script>

<style scoped>
.connect-page {
  min-height: 100vh;
  background: #f7f9fc;
  padding: 50px 7%;
  color: #102a43;
}

.header {
  margin-bottom: 40px;
}

.header h1 {
  margin: 15px 0 5px;
  font-size: 36px;
}

.header p {
  color: #627d98;
}

.back {
  border: none;
  background: transparent;
  color: #1261ff;
  cursor: pointer;
  font-size: 15px;
}

.bank-section {
  max-width: 850px;
}

.bank-section h2 {
  margin-bottom: 20px;
}

.bank-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.bank-card {
  border: 1px solid #e5e7eb;
  background: white;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  text-align: left;
}

.bank-card:hover {
  border-color: #1261ff;
}

.bank-card p {
  margin: 5px 0 0;
  color: #829ab1;
  font-size: 14px;
}

.bank-card span {
  margin-left: auto;
  font-size: 20px;
  color: #1261ff;
}

.bank-logo {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #1261ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.consent-card {
  max-width: 650px;
  background: white;
  padding: 35px;
  border-radius: 18px;
  box-shadow: 0 15px 40px rgba(16, 42, 67, 0.08);
}

.selected-bank {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 0;
}

.selected-bank h2 {
  margin: 0;
}

.selected-bank p {
  margin: 5px 0;
  color: #829ab1;
}

.consent-text {
  color: #627d98;
  line-height: 1.6;
}

.permissions {
  margin: 25px 0;
}

.permissions div {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  margin: 20px 0;
}

.permissions span {
  color: #16a34a;
  font-size: 20px;
}

.permissions p {
  margin: 0;
}

.permissions small {
  display: block;
  color: #829ab1;
  margin-top: 5px;
}

.security {
  background: #f0fdf4;
  padding: 15px;
  border-radius: 8px;
  color: #166534;
  margin: 25px 0;
}

.connect-button {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 9px;
  background: #1261ff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
</style>