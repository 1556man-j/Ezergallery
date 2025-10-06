<script>
  import { onMount } from 'svelte';

  const images = [
    '/assets/Arrival copy.webp','/assets/Caught.webp','/assets/Colourful dreams.webp',
    '/assets//Do you miss me like I miss you.webp','/assets/ppjpg copy.webp','/assets/The Lioness Stands Still.webp',
    '/assets/Fish Boy.webp','/assets/Kiishi.webp','/assets/KUWE.webp',
    '/assets/Misunderstanding.webp','/assets/Nameless beauty.webp','/assets/She who speaks with fire.webp',
    '/assets/Pothead Attention copy.webp','/assets/Tara 3.webp','/assets/Waiting Glitch.webp'
  ];

  const loopImages = [...images, ...images];
  let container;

  onMount(() => {
    let scrollSpeed = 0.3; // px/frame
    let raf;
    let isDragging = false;
    let startX, scrollLeft;

    /** Auto-scroll animation */
    const step = () => {
      if (!isDragging && container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    /** Drag logic */
    const startDrag = (e) => {
      isDragging = true;
      container.classList.add('cursor-grabbing');
      startX = (e.pageX || e.touches?.[0]?.pageX) - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const moveDrag = (e) => {
      if (!isDragging) return;
      const x = (e.pageX || e.touches?.[0]?.pageX) - container.offsetLeft;
      const walk = (x - startX); // drag distance
      container.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
      isDragging = false;
      container.classList.remove('cursor-grabbing');
    };

    container.addEventListener('mousedown', startDrag);
    container.addEventListener('mousemove', moveDrag);
    container.addEventListener('mouseup', endDrag);
    container.addEventListener('mouseleave', endDrag);
    container.addEventListener('touchstart', startDrag, { passive: true });
    container.addEventListener('touchmove', moveDrag, { passive: true });
    container.addEventListener('touchend', endDrag);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('mousedown', startDrag);
      container.removeEventListener('mousemove', moveDrag);
      container.removeEventListener('mouseup', endDrag);
      container.removeEventListener('mouseleave', endDrag);
      container.removeEventListener('touchstart', startDrag);
      container.removeEventListener('touchmove', moveDrag);
      container.removeEventListener('touchend', endDrag);
    };
  });
</script>

<!-- ✅ Slider -->
<div
  bind:this={container}
  class="relative w-full overflow-x-auto flex space-x-4 scrollbar-hide cursor-grab select-none"
>
  {#each loopImages as img}
    <img
      src={img}
      alt="slider"
      class="h-[600px] w-auto object-cover flex-shrink-0"
    />
  {/each}
</div>

<style>
  /* Hide scrollbars */
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
