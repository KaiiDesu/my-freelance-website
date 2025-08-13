
<script lang="ts">
  import Hero from './components/Hero.svelte';
  import About from './components/about.svelte';
  import Menu from './components/Menu.svelte';
  import SciFiBackground from './components/SciFiBackground.svelte';
  import { fly } from 'svelte/transition';
</script>

<Menu />
<div class="relative min-h-screen w-full bg-black">
  <SciFiBackground />
  <main class="text-white flex flex-col items-center justify-center pt-24 relative z-10" in:fly={{ y: 60, duration: 700 }}>
    <Hero />
    <About />
    <div class="cardlet-container">
      <div class="cardlet-grid">
        <div class="cardlet">
          <img src="/src/routes/assets/example.jpg" alt="Example Website 1" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
        <div class="cardlet">
          <img src="/src/routes/assets/example.jpg" alt="Example Website 2" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
        <div class="cardlet">
          <img src="/src/routes/assets/example.jpg" alt="Example Website 3" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
      </div>
    </div>
<style>

.cardlet-container {
  background: rgba(255,255,255,0.8);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);
  padding: 2.5rem 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200rem;
}
.cardlet-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  justify-items: center;
}
.cardlet {
  background: #18181b;
  border: 1.5px solid #232323;
  border-radius: 1rem;
  box-shadow: 0 6px 32px 0 rgba(0,0,0,0.25);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
}
.cardlet-img {
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 10rem;
  object-fit: cover;
  background: #232323;
  border: 1.5px solid #232323;
}
.cardlet-btn {
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #fff;
  color: #18181b;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}
.cardlet-btn:hover {
  background: #f3f4f6;
  color: #18181b;
}
</style>
  </main>
</div>

