<script>
  import { onMount, setContext } from "svelte";
  import { fullPageInfo } from '$lib/store';
  import Intro from '$sections/Intro.svelte';
  import About from '$sections/About.svelte';
  import Experience from '$sections/Experience.svelte';
  import Portfolio from '$sections/Portfolio.svelte';
  import viewport from '$lib/util/useViewportAction';
  import 'animate.css';
  
  let contactComponentPromise;
  let fullpage;
  let prevSection = 0;
  let nextSection = 0;
  let fpInstance;
  let slideIndexS = 0;
  let sliding = false;
  let slideCount = 3;
  const breakpoint = 992;
  let isLoaded = false;

  onMount(async() => {
    // const sh = await import('fullpage.js/dist/scrollHorizontal')   
    const fp = await import('fullpage.js/dist/fullpage.extensions.min')       
    const ease = await import('fullpage.js/vendors/easings')   
    fullpage = fp.default;  

    fpInstance = new fullpage('#fullpage', {
      menu: '#menu',
      scrollOverflow: false,
      fitToSection: true,
      responsiveWidth: breakpoint,
      responsiveSlides: true,
      scrollingSpeed: 1200,
      easing: 'easeInOutCubic',
      easingcss3: 'cubic-bezier(0.88,0,0.265,1)', // easingcss3: 'cubic-bezier(0.76, 0, 0, 1)',
      anchors: ['intro','about','experience','portfolio','contact'],
      licenseKey: 'gplv3-license',
      css3: true,
      scrollBar: false,
      controlArrows: false,
      onSlideLeave: ( section, origin, destination, direction, trigger) => {
        fullPageInfo.set({ exitingSlideIndex: origin.index, enteringSlideIndex: destination.index, direction: direction })
      },
      afterSlideLoad: function(section, origin, destination, direction){
        slideIndexS = destination.index+1;
      },
      beforeLeave: (origin, destination, direction, trigger) => {
        prevSection = origin.index;
        nextSection = destination.index;
        fullPageInfo.set({ prevSection: prevSection, nextSection: nextSection, direction: direction })
      },
      afterLoad: (origin, destination, direction, trigger) => {
        prevSection = origin.index;
        nextSection = destination.index;
      },
      onLeave: (origin, destination, direction, trigger) => {
        if (origin.index === 3) {
          if (direction === 'down' && slideIndexS < slideCount) {
            fpInstance.moveSlideRight();
            return false;
          } else if (direction === 'up' && slideIndexS > 1) {
            fpInstance.moveSlideLeft();
            return false;
          }
        } else if (sliding) {
          return false;
        }
      }
    });
  });

  function moveSectionDown() {
    fpInstance.moveSectionDown();
  }

  setContext('moveSectionDown', moveSectionDown)
</script>

<div id="fullpage">
  <Intro />
  <About />
  <Experience />
  <Portfolio />
  <div use:viewport on:enterViewport={()=> {
    if (!isLoaded) {
      contactComponentPromise = import('$sections/Contact.svelte')
    }
    isLoaded = true;
  }} />
    {#if contactComponentPromise}
      {#await contactComponentPromise}
        ..Loading
      {:then { default: Contact }}
        <Contact />
      {/await}
    {/if}
</div>