<script>
  import { fullPageInfo } from '$lib/store';
	import MediaQuery from "$lib/util/Breakpoint.svelte";
  import ArrowIcon from '$components/ArrowIcon.svelte';

  let fpDirection, exitingSlideIndex, enteringSlideIndex;
  let animation_slide2_container,
      animation_slide2_container2,
      animation_slide2_containerUp,
      animation_slide2_container2Up;
  let animation_slide3_constRight,
      animation_slide3_constRight2,
      animation_slide3_constLeft,
      animation_slide3_constLeft2;
        
  let animateCont, animateCont2, animateContUp, animation_slide2_constLeft, animation_slide2_constLeft2, animation_slide2_constRight, animation_slide2_constRight2, animationConstLeft, animationConstLeft2, animationConstRight, animationConstRight2, animateCont2Up;

  fullPageInfo.subscribe((val) => {
    // console.log('');
    // console.log(val);

    // console.log(val.exitingSlideIndex && val.enteringSlideIndex);

    if(val.exitingSlideIndex != undefined && val.enteringSlideIndex != undefined) {
      exitingSlideIndex = val.exitingSlideIndex;
      enteringSlideIndex = val.enteringSlideIndex;
      fpDirection = val.direction;

      //animateCont = fpDirection === 'right' ? 'animate__fadeOutLeftBig animate__slow' : 'animate__slideInLeft animate__delay-1s'
      //animateCont = fpDirection === 'right' ? 'animate__slideInRight animate__slow' : 'animate__slideInLeft animate__delay-1s'
      //animateContUp = fpDirection === 'up' && fpCurrentSection === 2 ? 'animate__fadeOut ' : (fpDirection === 'up' && fpCurrentSection === 3 ? 'animate__fadeIn animate__delay-1s' : '')

      if(enteringSlideIndex == 0) {
        animation_slide2_constLeft = fpDirection === 'left' ? 'animate__fadeOutRightBig animate__slow animate__delay-1s' : '';
        animation_slide2_constLeft2 = fpDirection === 'left' ? 'animate__fadeOutRightBig animate__slow' : '';
      
        // animation_slide2_constRight = fpDirection === 'left' ? 'animate__fadeOutRightBig animate__slow' : 'animate__slideInRight animate__delay-1s';
        // animation_slide2_constRight2 = fpDirection === 'left'? 'animate__fadeOutRightBig animate__slow animate__delay-1s' : 'animate__slideInRight animate__delay-1s';
        animation_slide2_constRight = fpDirection === 'right' ? 'animate__fadeOutLeftBig animate__slow' : '';
        animation_slide2_constRight2 = fpDirection === 'right'? 'animate__fadeOutLeftBig animate__slow animate__delay-1s' : '';
      
      }

      if(enteringSlideIndex == 1) {
        //console.log('entering to slide 1')
        animation_slide2_constRight = fpDirection === 'right' ? 'animate__slideInRight animate__slow' : 'animate__slideInLeft animate__delay-1s';
        animation_slide2_constRight2 = fpDirection === 'right'? 'animate__slideInRight animate__slow animate__delay-1s' : 'animate__slideInLeft animate__delay-1s';
      
        animation_slide2_constLeft = fpDirection === 'left' ? 'animate__slideInLeft animate__slow' : '';
        animation_slide2_constLeft2 = fpDirection === 'left'? 'animate__slideInLeft animate__slow animate__delay-1s' : '';
      
        animation_slide3_constLeft = fpDirection === 'left' ? 'animate__fadeOutRightBig animate__slow' : 'animate__slideInRight animate__delay-1s';
        animation_slide3_constLeft2 = fpDirection === 'left' ? 'animate__fadeOutRightBig animate__slow animate__delay-1s' : 'animate__slideInRight animate__delay-1s';
      
      }

      if(enteringSlideIndex == 2) {
        animation_slide2_constRight = fpDirection === 'right' ? 'animate__fadeOutLeftBig animate__slow' : '';
        animation_slide2_constRight2 = fpDirection === 'right'? 'animate__fadeOutLeftBig animate__slow animate__delay-1s' : '';
      
        animation_slide2_constLeft = '';
        animation_slide2_constLeft2 = '';
      
        animation_slide3_constLeft = fpDirection === 'right' ? 'animate__slideInRight animate__slow animate__delay-1s' : '';
        animation_slide3_constLeft2 = fpDirection === 'right' ? 'animate__slideInRight animate__slow ' : '';
    
      //   animation_slide3_constRight = fpDirection === 'right' ? 'animate__slideInRight animate__slow' : 'animate__slideInLeft animate__delay-1s';
      //   animation_slide3_constRight2 = fpDirection === 'right'? 'animate__slideInRight animate__slow animate__delay-1s' : 'animate__slideInLeft animate__delay-1s';
      }

    }
    
  })
</script>

<MediaQuery query="(max-width: 992px)" let:matches>
  <section class="section section-portfolio {matches ? 'fp-auto-height' : ''}">
    <div class="bg-code-decor">
      <svg width="903" height="887" viewBox="0 0 903 887" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.2262 320.433L114.319 320.792L118.976 335.892L52.0914 336.238L47.2262 320.433Z" fill="#F4A949"></path><path d="M134.246 320.858L201.343 321.227L205.994 336.318L139.104 336.663L134.246 320.858Z" fill="#1C5F9A"></path><path d="M97.3566 353.899L164.437 354.261L169.088 369.365L102.209 369.702L97.3566 353.899Z" fill="#1C5F9A"></path><path d="M221.413 321.768L485.765 322.185L490.419 337.284L226.28 337.562L221.413 321.768Z" fill="#1C5F9A"></path><path d="M202.902 354.015L638.794 357.201L643.448 372.291L207.775 369.82L202.902 354.015Z" fill="#9C27B0"></path><path d="M478.267 521.382L894.745 524.805L899.401 539.9L483.124 537.176L478.267 521.382Z" fill="#1C5F9A"></path><path d="M177.996 354.168L194.845 354.651L199.501 369.748L182.857 369.972L177.996 354.168Z" fill="#F4A949"></path><path d="M358.89 389.3L424.034 390.501L428.68 405.6L363.757 405.092L358.89 389.3Z" fill="#F4A949"></path><path d="M299.752 487.208L316.603 487.687L321.258 502.79L304.619 503.005L299.752 487.208Z" fill="#F4A949"></path><path d="M326.155 486.923L343.001 487.404L347.649 502.497L331.026 502.73L326.155 486.923Z" fill="#F4A949"></path><path d="M107.698 387.455L222.122 388.706L226.773 403.81L112.567 403.258L107.698 387.455Z" fill="#1C5F9A"></path><path d="M335.415 421.264L449.857 422.522L454.508 437.619L340.288 437.071L335.415 421.264Z" fill="#1C5F9A"></path><path d="M175.659 487.91L290.087 489.164L294.747 504.27L180.515 503.712L175.659 487.91Z" fill="#1C5F9A"></path><path d="M342.326 520.75L456.777 521.989L461.425 537.08L347.2 536.54L342.326 520.75Z" fill="#1C5F9A"></path><path d="M208.827 454.265L424.046 456.49L428.701 471.576L213.681 470.068L208.827 454.265Z" fill="#1C5F9A"></path><path d="M236.887 388.975L351.317 390.227L355.967 405.323L241.747 404.773L236.887 388.975Z" fill="#1C5F9A"></path><path d="M78.2267 421.127L145.324 421.484L149.974 436.587L83.0959 436.92L78.2267 421.127Z" fill="#F4A949"></path><path d="M156.512 420.877L317.531 421.363L322.181 436.463L161.364 436.688L156.512 420.877Z" fill="#9C27B0"></path><path d="M433.682 456.113L745.839 455.683L750.486 470.793L438.556 471.918L433.682 456.113Z" fill="#9C27B0"></path><path d="M131.938 454.719L199.041 455.071L203.696 470.177L136.815 470.523L131.938 454.719Z" fill="#F4A949"></path><path d="M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z" fill="#9C27B0"></path><path d="M275.51 520.95L324.298 521.124L328.953 536.228L280.376 536.745L275.51 520.95Z" fill="#9C27B0"></path><path d="M109.231 521.806L254.295 520.887L258.947 535.998L114.098 537.606L109.231 521.806Z" fill="#1C5F9A"></path></svg>
    </div>
    <div class="section-content">
      <div class="{matches ? '' : 'slide'}" data-anchor="slide1">
        <div class="slide-content centered intro">
          <h2>Inventive Ideas Need Personalized Solutions</h2>
          <p>Through understanding business problems and an expertise in crafting digital experiences, I work closely with stakeholders and team members to translate requirements into products.</p>
          {#if !matches}
          <a href="#portfolio/slide2">See Recent Projects <ArrowIcon/></a>
          {/if}
        </div>
      </div>
      <div class="{matches ? '' : 'slide'}" data-anchor="slide2">

          <div class="slide-content feature slide2 {matches ? '' : 'animate__animated'} ">
            <div class="left project-summary {matches ? '' : 'animate__animated'} {animation_slide2_constLeft} {animation_slide2_constRight}" style="--animate-duration: 800ms; --animate-delay: 500ms">
              <div class="overline">REACT, GSAP, MUI, NEXTJS, CONTENTFUL</div>
              <h2>The PGA</h2>
              <p>Professional Golfer's Association of America</p>
              <p>Sole Engineer working with designers to create a responsive and interactive marketing campaign to attract prospective PGA members. Features a unique vertical scroll-based carousel with path dependent states and immersive path transitions.</p>
              <div>
                <a href="http://pga.com/workingolf" target="_blank">Visit App <ArrowIcon/></a>
              </div>
            </div>
            <div class="right {matches ? '' : 'animate__animated'}" style="--animate-duration: 1200ms;">
              <div class="{matches ? '' : 'animate__animated'} {animation_slide2_constLeft2} {animation_slide2_constRight2}" style="--animate-duration: 600ms; --animate-delay: 300ms">
                <img src="./assets/pga-macbook.png" alt="work-in-golf page highlight" />
              </div>
            </div>
          </div>

      </div>
      <div class="{matches ? '' : 'slide'}" data-anchor="slide3">
        <div class="">


          <div class="slide-content feature {matches ? '' : 'animate__animated'}">
            <div class="left project-summary {matches ? '' : 'animate__animated'} {animation_slide3_constLeft2} {animation_slide3_constRight2}" style="--animate-duration: 800ms; --animate-delay: 500ms">
              <div class="overline">REACT, GSAP, SCSS, CONTENTFUL</div>
              <h2>CarMax</h2>
              <p>One of America's largest used car retailer.</p>
              <p>Lead engineer, responsible for building new components, ensuring performance (CWV) scores are met, meeting accessibility requirements, managing and organizing sprint tasks, owning our CI/CD pipeline, and guiding features into existence.</p>
              <div>
                <a href="http://carmax.com" target="_blank">Visit App <ArrowIcon/></a>
              </div>
            </div>
            <div class="right {matches ? '' : 'animate__animated'}" style="--animate-duration: 1200ms;">
              <div class="{matches ? '' : 'animate__animated'} {animation_slide3_constLeft} {animation_slide3_constRight}" style="--animate-duration: 600ms; --animate-delay: 300ms">
                <img src="./assets/carmax-macbook.png" alt="work-in-golf page highlight" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
</MediaQuery>

<style lang="scss">
  h2 {
    line-height: 1.2
  }

  .overline {
    opacity: .7;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .bg-code-decor {
    left: unset;
    right: -550px;
  }

  .section-content {
    width: 100%;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
      padding: 0;
    }
  }
  
  .slide-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 992px) {
      text-align: center;
    }
  }

  .slide-content.intro {
    max-width: 700px;
    @media (min-width: 992px) {
      text-align: center;
    }
  }

  .slide-content.feature {
    flex-direction: column-reverse;
    margin-top: 6rem;
    justify-content: center;
    @media (min-width: 992px) {
      flex-direction: row;
      margin-top: 0;
      padding: 0 2.5rem;
      text-align: left;
    }
    @media (min-width: 1440px) {
      padding: 0;
    }
  }

  .slide-content.centered {
    @media (min-width: 992px) {
      justify-content: center;
      align-items: center;
    }
  }

  .slide-content.feature.slide2 {
    @media (max-width: 992px) {
      margin-top: 2rem;
    }
  }

  .project-summary {
    width: 100%;
    max-width: 550px;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1.5rem;
    @media (min-width: 992px) {
      margin-top: 0;
    }
  }

  .left {
    @media (min-width: 992px) {
      width: 45%;
    }
    @media (min-width: 1440px) {
      width: 100%;
    }
  }

  .right {
    @media (min-width: 992px) {
      width: 55%;
      padding-right: 2rem;
    }
    @media (min-width: 1440px) {
      width: 100%;
    }
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    display: block;
    width: 100%;
    height: auto;
    max-width: 700px;
    margin: 20px auto;
  }

  a {
    margin-top: .75rem;
  }
</style>