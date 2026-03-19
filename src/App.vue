<template>
  <div id="app-container">
    <div class="glass-overlay"></div>
    
    <nav class="main-nav">
      <div class="nav-logo">
        <img src="./assets/logo.png" alt="Brahmi OCR" class="logo-img" />
        <div class="logo-text">
          <span class="brand">Brahmi OCR</span>
          <span class="tagline">ANCIENT WISDOM THROUGH AI</span>
        </div>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/ocr" class="nav-item">OCR Tool</router-link>
      </div>
    </nav>

    <main class="content-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
// Logic is now handled by Vue Router
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --color-kaavi-plaster: #FDFBF7;
  --color-kaavi-red: #8B2C24;
  --color-kaavi-earth: #B34E42;
  --color-surface: #FFFFFF;
  --color-text-primary: #381B18;
  --color-text-secondary: #7A534E;
  --color-border: #E8D8D5;
  --shadow-md: 0 4px 6px -1px rgba(139, 44, 36, 0.05);
  --radius-lg: 12px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: var(--color-text-primary);
  background-color: var(--color-kaavi-plaster);
  overflow-x: hidden;
}

#app-container {
  min-height: 100vh;
  width: 100vw;
  position: relative;
}

/* Navbar Styles */
.main-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: rgba(253, 251, 247, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

.nav-logo { display: flex; align-items: center; gap: 15px; }
.logo-img { height: 50px; }
.logo-text { display: flex; border-left: 2px solid var(--color-border); padding-left: 15px; flex-direction: column; }
.brand { font-weight: 700; font-size: 1.2rem; color: var(--color-kaavi-red); line-height: 1; }
.tagline { font-size: 0.65rem; letter-spacing: 1.5px; color: var(--color-text-secondary); margin-top: 4px; }

.nav-links { display: flex; gap: 30px; }
.nav-item { 
  text-decoration: none; 
  color: var(--color-text-secondary); 
  font-weight: 500;
  font-size: 0.95rem;
  padding: 5px 0;
  transition: 0.3s;
}
.nav-item:hover { color: var(--color-kaavi-red); }
.router-link-active { 
  color: var(--color-kaavi-red); 
  border-bottom: 2px solid var(--color-kaavi-red); 
}

/* Content Wrapper */
.content-wrapper {
  padding-top: 100px; /* Space for fixed nav */
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Transition Animation */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Global Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background: var(--color-border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-kaavi-earth); }
</style>