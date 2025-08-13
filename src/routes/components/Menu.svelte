<script lang="ts">
  import { fly } from 'svelte/transition';
  export let menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
<<<<<<< HEAD
    { name: 'Contact', href: '#contact' }
=======
  { name: 'Contact', href: '/contact' }
>>>>>>> 2db121b (Initial commit)
  ];
</script>

<nav class="menu-bar" in:fly={{ y: -60, duration: 700 }}>
  <div class="menu-brand">KaiiDesu</div>
  <ul class="menu-list">
    {#each menuItems as item}
      <li>
        <a
          href={item.href}
          class="menu-link"
        >
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
.menu-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #000;
  background: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  border-bottom: 2px solid #fff;
}
.menu-brand {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #fff
}
.menu-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-link {
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -0.01em;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  transition: color 0.2s;
  text-decoration: none;
}
.menu-link:hover {
  color: #9ca3af;
}
</style>
