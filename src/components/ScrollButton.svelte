<script>
  import { getContext } from "svelte";
  import MediaQuery from "$lib/util/Breakpoint.svelte";
  export let hideButton;
  const slideCount = 4;
  let moveSectionDown = getContext('moveSectionDown');
</script>

<MediaQuery query="(min-width: 992px)" let:matches>
  {#if matches && !hideButton}
    <div class="scroll-button" aria-hidden="true" on:click={moveSectionDown}>
      <span>Scroll Down</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="aliceblue"></path></svg>
    </div>
  {/if}
</MediaQuery>

<style>
  span {
    display: block;
    transform: rotate(-90deg);
    color: #f0f8ff;
    position: relative;
    font-size: 13px;
    opacity: .4;
    letter-spacing: 1px;
    min-width: 100px;
  }

  svg {
    transition: transform .3s ease;
    position: relative;
    top: 40px;
  }
  
  .scroll-button {
    cursor: pointer;
    cursor: hand;
    border: 0;
    background-color: transparent;
    position: relative;
    padding: 0;
    flex-direction: column;
    align-items: center;
    max-width: 20px;
    min-height: 100px;
    display: flex;
    right: 3.125rem;
    bottom: 64px;
    position: fixed;
    z-index: 3;
  }


</style>