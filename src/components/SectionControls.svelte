<script>
  import MediaQuery from "$lib/util/Breakpoint.svelte";
</script>

<MediaQuery query="(min-width: 992px)" let:matches>
  {#if matches}
    <nav>
      <div class="slide-indicator-module">
        <div id="menu">
          <div data-menuanchor="intro"><a href="#intro" title="intro">00</a></div>
          <div data-menuanchor="about"><a href="#about" title="about">01</a></div>
          <div data-menuanchor="experience"><a href="#experience" title="experience">02</a></div>
          <div data-menuanchor="portfolio"><a href="#portfolio" title="portfolio">03</a></div>
          <div data-menuanchor="contact"><a href="#contact" title="contact">04</a></div>
          <div class="indicator"></div>
        </div>
      </div>
    </nav>
  {/if}
</MediaQuery>

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    z-index: 2;
    height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 2.5rem;
    height: calc(100vh - 6.25rem);
  }

  @media (min-width: 1440px) {
    nav {
      right: 3.125rem;
    }
  }

  .slide-indicator-module {
    position: relative;
  }

  #menu {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  #menu a {
    width: 50px;
    height: 50px;
    display: flex;
    border-right: 1.5px solid #6d6f73;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 13px;
  }

  .indicator {
    height: 50px;
    width: 3px;
    border-radius: 100rem;
    background: white;

    position: absolute;
    right: -1px;
    z-index: 999;
    top: 0;
    transition: all 1s cubic-bezier(0.76, 0, 0, 1)
  }

  #menu > div:nth-child(1) {
    &.active ~ .indicator {
      transform: translateY(0);
    }
  }
  #menu > div:nth-child(2) {
    &.active ~ .indicator {
      transform: translateY(50px);
    }
  }
  #menu > div:nth-child(3) {
    &.active ~ .indicator {
      transform: translateY(100px);
    }
  }
  #menu > div:nth-child(4) {
    &.active ~ .indicator {
      transform: translateY(150px);
    }
  }
  #menu > div:nth-child(5) {
    &.active ~ .indicator {
      transform: translateY(200px);
    }
  }
</style>