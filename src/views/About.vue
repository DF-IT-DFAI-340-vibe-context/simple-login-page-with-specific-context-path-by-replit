<template>
  <div class="about-container">
    <nav class="navbar">
      <div class="nav-content">
        <h2>我的網站</h2>
        <div class="nav-links">
          <router-link to="/">回到登入</router-link>
        </div>
      </div>
    </nav>
    <div class="about-content">
      <div class="about-card">
        <h1>關於我們</h1>
        <div class="section">
          <h2>公司簡介</h2>
          <p>
            我們是一家專注於提供優質服務的科技公司。我們致力於創新和卓越，
            為客戶提供最佳的解決方案。
          </p>
        </div>
        <div class="section">
          <h2>我們的使命</h2>
          <p>
            透過技術創新，為客戶創造價值，推動行業發展，
            成為業界領先的解決方案提供者。
          </p>
        </div>
        <div class="section">
          <h2>核心價值</h2>
          <ul>
            <li>創新思維</li>
            <li>客戶至上</li>
            <li>團隊合作</li>
            <li>持續進步</li>
          </ul>
        </div>
        <div class="contact-info">
          <h2>聯絡我們</h2>
          <p>Email: contact@example.com</p>
          <p>電話: +886-2-1234-5678</p>
          <p>地址: 台北市信義區信義路五段7號</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: $primary-color;
      margin: 0;
    }

    .nav-links {
      a {
        color: $text-color;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: background 0.3s;

        &:hover {
          background: #f0f0f0;
        }
      }
    }
  }
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.about-card {
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h1 {
    color: $primary-color;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .section {
    margin-bottom: 2rem;

    h2 {
      color: $secondary-color;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    p {
      color: $text-color;
      line-height: 1.8;
      font-size: 1.1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        color: $text-color;
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        font-size: 1.1rem;

        &:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: $primary-color;
          font-weight: bold;
        }
      }
    }
  }

  .contact-info {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;

    h2 {
      color: $primary-color;
      margin-bottom: 1rem;
    }

    p {
      color: $text-color;
      margin: 0.5rem 0;
      font-size: 1rem;
    }
  }
}
</style>
