<script>
  import viewport from '$lib/util/useViewportAction';
	import MediaQuery from "$lib/util/Breakpoint.svelte";

  let contactComponentPromise;
  let isLoaded = false;
</script>

<div use:viewport on:enterViewport={()=> {
  if (!isLoaded)
    contactComponentPromise = import('$components/Globe.svelte')
  isLoaded = true;
}}/>
<section class="section section-contact fp-auto-height-responsive">
  <div class="section-content">
    <MediaQuery query="(max-width: 992px)" let:matches>
      <div class="copy-content">
        <p>Located in Richmond, VA and available for hire.</p>
        <p>If you're looking for an engineer that's dedicated to delivering pixel-perfect, uniquely bespoke digital products, contact me at:</p>
        <h3>davidpodden@gmail.com</h3>
      </div>
      <div class="threed-container">
        {#if contactComponentPromise}
          {#await contactComponentPromise}
            ..Loading
          {:then { default: Globe }}
            <Globe />
          {/await}
        {/if}
      </div>
    </MediaQuery>
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    @media (min-width: 992px) {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .section-content {
    position: relative;
    flex-direction: column;
    padding: 0;
  }

  .copy-content {
    position: relative;
    z-index: 9999;
    padding: 0 32px;
    @media (min-width: 992px) {
      max-width: 650px;
    }
  }

  .threed-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>