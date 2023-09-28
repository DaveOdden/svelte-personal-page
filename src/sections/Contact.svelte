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
      {#if contactComponentPromise}
        {#await contactComponentPromise}
          ..Loading
        {:then { default: Globe }}
          <Globe />
        {/await}
      {/if}
      <div class="copy-content">
        <p>Located in Richmond, VA and available for hire.</p>
        <p>Feel free to contact me through Linkedin or my email:</p>
        <h3>davidpodden@gmail.com</h3>
      </div>
    </MediaQuery>
  </div>
</section>

<style>
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .section-content {
    position: relative;
    max-width: 100%;
    flex-direction: column;
  }

  .copy-content {
    position: absolute; 
    width: 100%;
    max-width: 550px;
    left: 0;
    top: 45%;
    padding: 0 64px;
  }

  @media (min-width: 990px) {
    .copy-content {
      left: 50%;
      top: 35%;
      padding: 0;
    }
  }
</style>