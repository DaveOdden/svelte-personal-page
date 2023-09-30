<svelte:head>
  <script src="/vendor/fullpage.js/scrollHorizontal.js"></script>
</svelte:head>

<script>
  import { onMount, setContext } from "svelte";
  import { fullPageInfo } from '$lib/store';
  import Logo from '$components/Logo.svelte';
  import SectionControls from '$components/SectionControls.svelte';
  import ScrollButton from '$components/ScrollButton.svelte';
  import Intro from '$sections/Intro.svelte';
  import About from '$sections/About.svelte';
  import Experience from '$sections/Experience.svelte';
  import Portfolio from '$sections/Portfolio.svelte';
  import Contact from '$sections/Contact.svelte';
  import "fullpage.js/dist/fullpage.min.css";
  import 'animate.css';
  
  let fullpage;
  let prevSection = 0;
  let nextSection = 0;
  let fpInstance;
  let slideIndexS = 0;
  let sliding = false;
  let slideCount = 3;
  const breakpoint = 992;

  onMount(async() => {
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
      },
      afterResponsive: function(isResponsive){
        if(fpInstance) {
          fpInstance.reBuild();
          if(isResponsive) {
            console.log(isResponsive);
          }
        }
      }
    });
  });

  function moveSectionDown() {
    fpInstance.moveSectionDown();
  }

  setContext('moveSectionDown', moveSectionDown)
</script>

<div class="fixed-page-elements">
  <Logo />
  <SectionControls />
  <ScrollButton />
</div>
<div id="fullpage">
  <Intro />
  <About />
  <Experience />
  <Portfolio />
  <Contact />
</div>

<style lang="scss">
  #fullpage {
    @media (max-width: 992px) {
      position: relative;
      overflow: hidden;
    }
  }
</style>