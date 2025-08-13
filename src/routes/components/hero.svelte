<script lang="ts">
  import { fly, fade } from 'svelte/transition';
</script>

<section class="hero-section">
  <h1 class="hero-title" in:fly={{ y: 40, duration: 700 }}>
    Looking for a <span class="hero-title-accent">Site?</span>
  </h1>
  <p class="hero-desc" in:fade={{ delay: 200, duration: 600 }}>
    Here, you can find modern, clean, and organized websites for a business.
  </p>
  <a href="#contact" class="hero-btn" in:fly={{ y: 20, delay: 400, duration: 600 }}>
    Contact Me
  </a>
</section>

<style>
.hero-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  text-align: center;
}
@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}
.hero-title-accent {
  animation: rgb-accent 3s linear infinite;
  background: linear-gradient(90deg, #ff0080, #7928ca, #00cfff, #ff0080 100%);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

@keyframes rgb-accent {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.hero-desc {
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 40rem;
  text-align: center;
}
@media (min-width: 768px) {
  .hero-desc {
    font-size: 1.25rem;
  }
}
.hero-btn {
  display: inline-block;
  background: #fff;
  color: #000;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.125rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  transition: background 0.2s;
}
.hero-btn:hover {
  background: #f3f4f6;
}
</style>