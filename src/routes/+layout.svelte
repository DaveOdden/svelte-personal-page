<svelte:head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
</svelte:head>

<script>
  import "$styles/app.css";
  import Logo from '$components/Logo.svelte';
</script>

<main>
  <div class="fixed-page-elements">
    <Logo />
  </div>
  <slot />  
</main>