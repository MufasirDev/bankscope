<template>
  <div class="home">

    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">
        Bank<span>Scope</span>
      </div>

      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
      </div>

      <div class="nav-buttons">
        <button class="login-btn" @click="goToLogin">
          Login
        </button>

        <button class="get-started" @click="goToLogin">
          Get Started
        </button>
      </div>
    </nav>


    <!-- Hero Section -->
    <section class="hero">

      <div class="hero-content">

        <div class="badge">
          🔐 Secure Open Banking
        </div>

        <h1>
          All Your Banks.
          <span>One View.</span>
        </h1>

        <p>
          BankScope brings your bank accounts together in one
          secure platform. Track your balances, transactions,
          spending and finances from one simple dashboard.
        </p>

        <div class="hero-buttons">

          <button
            class="primary-btn"
            @click="goToLogin"
          >
            Get Started →
          </button>

          <button
            class="secondary-btn"
            @click="scrollToFeatures"
          >
            Explore Features
          </button>

        </div>

        <div class="trust">

          <div>
            <strong>🔒</strong>
            <span>Secure</span>
          </div>

          <div>
            <strong>⚡</strong>
            <span>Fast</span>
          </div>

          <div>
            <strong>🏦</strong>
            <span>Multi-Bank</span>
          </div>

        </div>

      </div>


      <!-- Dashboard Preview -->
      <div class="dashboard-preview">

        <div class="preview-header">
          <div>
            <small>Good morning 👋</small>
            <h3>Financial Overview</h3>
          </div>

          <div class="profile-circle">
            A
          </div>
        </div>


        <div class="balance-preview">

          <small>Total Balance</small>

          <h2>₦4,850,000.00</h2>

          <p>Across 3 connected accounts</p>

        </div>


        <div class="preview-stats">

          <div>
            <small>Income</small>
            <strong>₦850,000</strong>
          </div>

          <div>
            <small>Expenses</small>
            <strong>₦320,500</strong>
          </div>

        </div>


        <div class="preview-transactions">

          <div class="preview-title">
            <strong>Recent Transactions</strong>
            <span>View all</span>
          </div>

          <div class="preview-transaction">

            <div class="transaction-icon">
              💰
            </div>

            <div>
              <strong>Salary</strong>
              <small>Today</small>
            </div>

            <strong class="income">
              +₦500,000
            </strong>

          </div>


          <div class="preview-transaction">

            <div class="transaction-icon">
              💡
            </div>

            <div>
              <strong>Electricity</strong>
              <small>Yesterday</small>
            </div>

            <strong class="expense">
              -₦45,000
            </strong>

          </div>


          <div class="preview-transaction">

            <div class="transaction-icon">
              ↗️
            </div>

            <div>
              <strong>Transfer</strong>
              <small>Yesterday</small>
            </div>

            <strong class="expense">
              -₦30,000
            </strong>

          </div>

        </div>

      </div>

    </section>


    <!-- Features -->
    <section
      id="features"
      class="features"
    >

      <div class="section-heading">

        <p>WHY BANKSCOPE?</p>

        <h2>
          Your finances, simplified.
        </h2>

        <span>
          Everything you need to understand and manage
          your money in one place.
        </span>

      </div>


      <div class="feature-grid">

        <div class="feature-card">

          <div class="feature-icon">
            🏦
          </div>

          <h3>Connect Multiple Banks</h3>

          <p>
            Connect your different bank accounts
            and view them from one dashboard.
          </p>

        </div>


        <div class="feature-card">

          <div class="feature-icon">
            📊
          </div>

          <h3>Track Your Spending</h3>

          <p>
            Understand where your money goes with
            clear transaction and spending insights.
          </p>

        </div>


        <div class="feature-card">

          <div class="feature-icon">
            🔐
          </div>

          <h3>Secure & Private</h3>

          <p>
            Your financial information stays protected
            with secure authentication and consent.
          </p>

        </div>


        <div class="feature-card">

          <div class="feature-icon">
            ⚡
          </div>

          <h3>Real-Time Overview</h3>

          <p>
            Get a clear view of your financial position
            without switching between different apps.
          </p>

        </div>

      </div>

    </section>


    <!-- How It Works -->
    <section
      id="how-it-works"
      class="how-it-works"
    >

      <div class="section-heading">

        <p>HOW IT WORKS</p>

        <h2>
          Start managing your finances in minutes.
        </h2>

      </div>


      <div class="steps">

        <div class="step">

          <div class="step-number">
            01
          </div>

          <h3>Create an Account</h3>

          <p>
            Sign up and securely access your
            BankScope dashboard.
          </p>

        </div>


        <div class="step">

          <div class="step-number">
            02
          </div>

          <h3>Connect Your Bank</h3>

          <p>
            Select your bank and give BankScope
            permission to access your account information.
          </p>

        </div>


        <div class="step">

          <div class="step-number">
            03
          </div>

          <h3>Manage Your Money</h3>

          <p>
            View balances, transactions and financial
            insights from one place.
          </p>

        </div>

      </div>

    </section>


    <!-- About -->
    <section
      id="about"
      class="about"
    >

      <div>

        <p class="about-label">
          ABOUT BANKSCOPE
        </p>

        <h2>
          One simple view of your financial world.
        </h2>

      </div>

      <p>
        BankScope is an Open Banking platform designed
        to help users connect their financial accounts
        and understand their money through a single,
        easy-to-use interface.
      </p>

    </section>


    <!-- CTA -->
    <section class="cta">

      <h2>
        Ready to take control of your finances?
      </h2>

      <p>
        Connect your accounts and get a clearer
        view of your money.
      </p>

      <button @click="goToLogin">
        Get Started →
      </button>

    </section>


    <!-- Footer -->
    <footer>

      <div class="footer-logo">
        Bank<span>Scope</span>
      </div>

      <p>
        © 2026 BankScope. Open Banking made simple.
      </p>

    </footer>

  </div>
</template>


<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()


function goToLogin() {

  router.push('/login')

}


function scrollToFeatures() {

  document
    .getElementById('features')
    ?.scrollIntoView({
      behavior: 'smooth'
    })

}

</script>


<style scoped>

.home {
  min-height: 100vh;
  background: #f8faff;
  color: #102a43;
}


/* NAVBAR */

.navbar {
  height: 72px;
  padding: 0 7%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;

  border-bottom: 1px solid #edf2f7;

  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: #102a43;
}

.logo span,
.footer-logo span {
  color: #1261ff;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #52606d;
  font-size: 14px;
}

.nav-links a:hover {
  color: #1261ff;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.login-btn,
.get-started {
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.login-btn {
  border: 1px solid #d9e2ec;
  background: white;
  color: #102a43;
}

.get-started {
  border: none;
  background: #1261ff;
  color: white;
}


/* HERO */

.hero {
  max-width: 1200px;
  margin: auto;
  padding: 90px 7%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;

  align-items: center;
}

.badge {
  display: inline-block;

  padding: 8px 14px;

  background: #eaf0ff;
  color: #1261ff;

  border-radius: 30px;

  font-size: 13px;
  font-weight: 600;

  margin-bottom: 20px;
}

.hero h1 {
  font-size: 58px;
  line-height: 1.05;
  margin: 0 0 25px;
}

.hero h1 span {
  color: #1261ff;
}

.hero-content > p {
  font-size: 17px;
  line-height: 1.7;
  color: #627d98;
  max-width: 580px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.primary-btn,
.secondary-btn,
.cta button {
  padding: 14px 22px;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 600;
}

.primary-btn {
  border: none;
  background: #1261ff;
  color: white;
}

.secondary-btn {
  background: white;
  border: 1px solid #d9e2ec;
  color: #102a43;
}

.trust {
  display: flex;
  gap: 25px;
  margin-top: 30px;
}

.trust div {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #627d98;
  font-size: 13px;
}


/* DASHBOARD PREVIEW */

.dashboard-preview {
  background: white;

  border-radius: 20px;

  padding: 25px;

  box-shadow:
    0 25px 60px rgba(16, 42, 67, 0.12);

  border: 1px solid #edf2f7;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.preview-header small {
  color: #829ab1;
}

.preview-header h3 {
  margin: 5px 0;
}

.profile-circle {
  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: #1261ff;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
}

.balance-preview {
  margin-top: 25px;

  background: #102a43;

  color: white;

  padding: 25px;

  border-radius: 15px;
}

.balance-preview small {
  opacity: 0.7;
}

.balance-preview h2 {
  font-size: 30px;
  margin: 8px 0;
}

.balance-preview p {
  margin: 0;
  opacity: 0.7;
  font-size: 13px;
}

.preview-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  margin: 15px 0;
}

.preview-stats div {
  padding: 15px;

  background: #f7f9fc;

  border-radius: 10px;
}

.preview-stats small {
  display: block;
  color: #829ab1;
  margin-bottom: 5px;
}

.preview-transactions {
  margin-top: 20px;
}

.preview-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.preview-title span {
  color: #1261ff;
  font-size: 13px;
}

.preview-transaction {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 0;

  border-bottom: 1px solid #edf2f7;
}

.transaction-icon {
  width: 38px;
  height: 38px;

  background: #f0f4ff;

  border-radius: 9px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-transaction div:nth-child(2) {
  flex: 1;
}

.preview-transaction small {
  display: block;
  color: #829ab1;
  margin-top: 3px;
}

.income {
  color: #16a34a;
}

.expense {
  color: #dc2626;
}


/* GENERAL SECTIONS */

.features,
.how-it-works {
  padding: 90px 7%;
  max-width: 1200px;
  margin: auto;
}

.section-heading {
  text-align: center;
  max-width: 650px;
  margin: auto auto 50px;
}

.section-heading p,
.about-label {
  color: #1261ff;
  font-size: 13px;
  font-weight: 700;
}

.section-heading h2 {
  font-size: 38px;
  margin: 10px 0;
}

.section-heading span {
  color: #627d98;
}


/* FEATURES */

.feature-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 20px;
}

.feature-card {
  background: white;

  padding: 25px;

  border-radius: 15px;

  border: 1px solid #edf2f7;

  transition: 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 15px 35px rgba(16, 42, 67, 0.08);
}

.feature-icon {
  font-size: 28px;
}

.feature-card h3 {
  margin: 15px 0 10px;
}

.feature-card p {
  color: #627d98;
  line-height: 1.6;
}


/* STEPS */

.steps {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
}

.step {
  text-align: center;
}

.step-number {
  width: 55px;
  height: 55px;

  border-radius: 50%;

  background: #eaf0ff;

  color: #1261ff;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;

  font-weight: 800;
}

.step h3 {
  margin-top: 20px;
}

.step p {
  color: #627d98;
  line-height: 1.6;
}


/* ABOUT */

.about {
  max-width: 1000px;

  margin: 50px auto;

  padding: 60px 7%;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 60px;

  background: #102a43;

  color: white;

  border-radius: 20px;
}

.about h2 {
  font-size: 34px;
}

.about > p {
  color: #bcccdc;

  line-height: 1.8;
}


/* CTA */

.cta {
  text-align: center;

  padding: 90px 7%;
}

.cta h2 {
  font-size: 38px;
}

.cta p {
  color: #627d98;
}

.cta button {
  border: none;
  background: #1261ff;
  color: white;
  margin-top: 15px;
}


/* FOOTER */

footer {
  padding: 35px 7%;

  border-top: 1px solid #edf2f7;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: white;
}

.footer-logo {
  font-size: 20px;
  font-weight: 800;
}

footer p {
  color: #829ab1;
  font-size: 13px;
}


/* MOBILE */

@media (max-width: 900px) {

  .nav-links {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;

    padding-top: 60px;
  }

  .hero h1 {
    font-size: 45px;
  }

  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .about {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 600px) {

  .navbar {
    padding: 0 5%;
  }

  .get-started {
    display: none;
  }

  .hero {
    padding-left: 5%;
    padding-right: 5%;
  }

  .hero h1 {
    font-size: 38px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .preview-stats {
    grid-template-columns: 1fr;
  }

  .about {
    margin-left: 5%;
    margin-right: 5%;
  }

  footer {
    flex-direction: column;
    gap: 15px;
  }

}

</style>