<<<<<<< HEAD

=======
>>>>>>> 2db121b (Initial commit)
<script lang="ts">
  import Hero from './components/Hero.svelte';
  import About from './components/about.svelte';
  import Menu from './components/Menu.svelte';
  import SciFiBackground from './components/SciFiBackground.svelte';
  import { fly } from 'svelte/transition';
<<<<<<< HEAD
</script>

=======

// Svelte action for scroll-based fade/translate animation
function scrollFade(node: HTMLElement, params = { delay: 0 }) {
  let timeout;
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeout = setTimeout(() => {
          node.classList.add('cardlet-visible');
          node.classList.remove('cardlet-hidden');
        }, params.delay || 0);
      } else {
        clearTimeout(timeout);
        node.classList.remove('cardlet-visible');
        node.classList.add('cardlet-hidden');
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.15
  });
  observer.observe(node);
  return {
    update(newParams) {
      params = newParams;
    },
    destroy() {
      observer.disconnect();
      clearTimeout(timeout);
    }
  };
}
</script>

<svelte:head>
  <title>Homepage | KaiiDesu</title>
  <link rel="icon" type="image/png" href="/src/lib/assets/logo.png" />
</svelte:head>


>>>>>>> 2db121b (Initial commit)
<Menu />
<div class="relative min-h-screen w-full bg-black">
  <SciFiBackground />
  <main class="text-white flex flex-col items-center justify-center pt-24 relative z-10" in:fly={{ y: 60, duration: 700 }}>
    <Hero />
    <About />
    <div class="cardlet-container">
      <div class="cardlet-grid">
<<<<<<< HEAD
        <div class="cardlet">
          <img src="/src/routes/assets/example.jpg" alt="Example Website 1" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
        <div class="cardlet">
          <img src="/src/routes/assets/example.jpg" alt="Example Website 2" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
        <div class="cardlet">
=======
        <div class="cardlet cardlet-hidden" use:scrollFade={{delay: 0}}>
          <img src="/src/routes/assets/example.jpg" alt="Example Website 1" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
        <div class="cardlet cardlet-hidden" use:scrollFade={{delay: 350}}>
          <img src="/src/routes/assets/example.jpg" alt="Example Website 2" class="cardlet-img" />
          <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a>
        </div>
        <div class="cardlet cardlet-hidden" use:scrollFade={{delay: 700}}>
>>>>>>> 2db121b (Initial commit)
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
<<<<<<< HEAD
=======
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1.2s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1);
}

.cardlet:hover {
  transform: translateY(-18px) scale(1.07) rotate(-2deg);
  box-shadow:
    0 0 24px 4px #2356a8,
    0 0 12px 0 rgba(35,86,168,0.18),
    0 0 2px 0 #3a4e7c;
  filter: brightness(1.03) saturate(1.06) drop-shadow(0 0 6px #2356a8);
  z-index: 3;
}

.cardlet-hidden {
  opacity: 0;
  transform: translateY(60px);
  pointer-events: none;
}
.cardlet-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
>>>>>>> 2db121b (Initial commit)
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

