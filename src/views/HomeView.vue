<template>
  <div class="home-content">
    <header class="hero-section">
      <h1 class="kaavi-text">Ashokan Brahmi Inscriptions</h1>
      <p class="tagline">The fountainhead of Indian scripts, restored through Modern AI.</p>
    </header>

    <div class="info-grid">
      <section class="info-card">
        <h3>About the Script</h3>
        <p>Brahmi is the oldest writing system of Ancient India (3rd Century BCE). It is the direct ancestor of Devanagari, Bengali, Tamil, and many other South Asian scripts. Most famously, it was used by <strong>Emperor Ashoka</strong> to spread messages of Dhamma across the subcontinent.</p>
      </section>

      <section class="info-card">
        <h3>The AI Pipeline</h3>
        <p>Our platform uses <strong>Pix2Pix GANs</strong> to reconstruct eroded characters and <strong>Deep CNNs (ResNet/EfficientNet)</strong> to transliterate them into modern Devanagari and Latin scripts with high precision.</p>
      </section>
    </div>

    <router-link to="/ocr" class="cta-button">
      Launch OCR Tool
      <span class="arrow">→</span>
    </router-link>
  </div>
</template>

<style scoped>
.home-content {
  max-width: 900px;
  padding: 60px 20px;
  text-align: center;
  z-index: 1;
}
.kaavi-text { color: var(--color-kaavi-red); font-size: 2.5rem; margin-bottom: 0.5rem; }
.tagline { color: var(--color-text-secondary); margin-bottom: 3rem; font-weight: 300; }
.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem; }
.info-card { 
  background: var(--color-surface); 
  padding: 2rem; 
  border-radius: var(--radius-lg); 
  border: 1px solid var(--color-border);
  text-align: left;
  box-shadow: var(--shadow-md);
}
.info-card h3 { color: var(--color-kaavi-red); margin-top: 0; }
.cta-button {
  display: inline-block;
  background: var(--color-kaavi-red);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: var(--shadow-lg);
  transition: transform 0.2s;
}
.cta-button:hover { transform: translateY(-3px); background: var(--color-kaavi-earth); }
</style>