<script>
  import Javascript from '~icons/teenyicons/javascript-solid'
  import React from '~icons/teenyicons/react-outline'
  import NextJS from '~icons/teenyicons/nextjs-solid'
  import Angular from '~icons/teenyicons/angular-solid'
  import Vue from '~icons/akar-icons/vue-fill'
  import Svelte from '~icons/simple-icons/svelte'
  import Css3 from '~icons/simple-icons/css3'
  import Sass from '~icons/fa6-brands/sass'
  import Gsap from '~icons/logos/greensock-icon'
  import Git from '~icons/bi/git'
  import CiCd from '~icons/clarity/ci-cd-line'
  import A11y from '~icons/solar/accessibility-bold'
  import FeBuildTools from '~icons/devicon-plain/webpack'
  import Agile from '~icons/ph/kanban-duotone'
  import ThirdParty from '~icons/gg/ui-kit'
  import Figma from '~icons/file-icons/figma'
  import Api from '~icons/icon-park-twotone/data'
  import { fullPageInfo } from '$lib/store';
	import MediaQuery from "$lib/util/Breakpoint.svelte";

  let fpCurrentSection, fpNextSection, fpDestination;
  let animateCont, animateContUp;

  fullPageInfo.subscribe((val) => {
    if(val.prevSection && val.nextSection && val.direction) {
      fpCurrentSection = val.prevSection;
      fpNextSection = val.nextSection;
      fpDestination = val.direction;

      animateCont = fpDestination === 'down' && fpCurrentSection === 1 ? 'animate__fadeInUp animate__delay-1s' : (fpDestination === 'down' && fpCurrentSection === 2 ? 'animate__fadeOutUpBig animate__slower animate__delay-1s' : '')
      animateContUp = fpDestination === 'up' && fpCurrentSection === 2 ? 'animate__fadeOut ' : (fpDestination === 'up' && fpCurrentSection === 3 ? 'animate__fadeIn animate__delay-1s' : '')
    }
  })
</script>

<section class="section section-experience fp-auto-height-responsive">
  <MediaQuery query="(max-width: 992px)" let:matches>
    <div class="section-content {matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0s">
      <h3>Working with World Renown Companies for 10+ years</h3>
      <h2>Skills & Experience</h2>
      <p>The main area of expertise is front end development (client side of the web).</p>
      <p>HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</p>
      <p>Visit my <a href="https://www.linkedin.com/in/dave-odden" target="_blank">Linkedin</a> for more details.</p>
      {#if !matches}
        <ul>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.1s">
            <div class="icon"><Javascript /></div>
            <div class="label">JavaScript</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.1s">
            <div class="icon"><React /></div>
            <div class="label">React</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.2s">
            <div class="icon"><NextJS /></div>
            <div class="label">NextJS</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.3s">
            <div class="icon"><Angular /></div>
            <div class="label">Angular</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.4s">
            <div class="icon"><Vue /></div>
            <div class="label">Vue</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.5s">
            <div class="icon"><Svelte /></div>
            <div class="label">Svelte</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.6s">
            <div class="icon"><Gsap /></div>
            <div class="label">GSAP</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.7s">
            <div class="icon"><Css3 /></div>
            <div class="label">CSS</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.8s">
            <div class="icon"><Sass /></div>
            <div class="label">Sass</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.9s">
            <div class="icon"><ThirdParty /></div>
            <div class="label">Third Party</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 0.9s">
            <div class="icon"><Api /></div>
            <div class="label">API Integration</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 1s">
            <div class="icon"><FeBuildTools /></div>
            <div class="label">Build Tools</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 1.1s">
            <div class="icon"><Git /></div>
            <div class="label">Git</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 1.2s">
            <div class="icon"><A11y /></div>
            <div class="label">A11y</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 1.3s">
            <div class="icon"><CiCd /></div>
            <div class="label">CI/CD</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 1.4s">
            <div class="icon"><Figma /></div>
            <div class="label">Figma</div>
          </li>
          <li class="{matches ? '' : 'animate__animated'} {animateCont} {animateContUp}" style="--animate-delay: 1.5s">
            <div class="icon"><Agile /></div>
            <div class="label">Agile</div>
          </li>
        </ul>
      {/if}
    </div>
  </MediaQuery>
  <div class="bg-code-decor">
    <svg width="903" height="887" viewBox="0 0 903 887" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.2262 320.433L114.319 320.792L118.976 335.892L52.0914 336.238L47.2262 320.433Z" fill="#F4A949"></path><path d="M134.246 320.858L201.343 321.227L205.994 336.318L139.104 336.663L134.246 320.858Z" fill="#1C5F9A"></path><path d="M97.3566 353.899L164.437 354.261L169.088 369.365L102.209 369.702L97.3566 353.899Z" fill="#1C5F9A"></path><path d="M221.413 321.768L485.765 322.185L490.419 337.284L226.28 337.562L221.413 321.768Z" fill="#1C5F9A"></path><path d="M202.902 354.015L638.794 357.201L643.448 372.291L207.775 369.82L202.902 354.015Z" fill="#9C27B0"></path><path d="M478.267 521.382L894.745 524.805L899.401 539.9L483.124 537.176L478.267 521.382Z" fill="#1C5F9A"></path><path d="M177.996 354.168L194.845 354.651L199.501 369.748L182.857 369.972L177.996 354.168Z" fill="#F4A949"></path><path d="M358.89 389.3L424.034 390.501L428.68 405.6L363.757 405.092L358.89 389.3Z" fill="#F4A949"></path><path d="M299.752 487.208L316.603 487.687L321.258 502.79L304.619 503.005L299.752 487.208Z" fill="#F4A949"></path><path d="M326.155 486.923L343.001 487.404L347.649 502.497L331.026 502.73L326.155 486.923Z" fill="#F4A949"></path><path d="M107.698 387.455L222.122 388.706L226.773 403.81L112.567 403.258L107.698 387.455Z" fill="#1C5F9A"></path><path d="M335.415 421.264L449.857 422.522L454.508 437.619L340.288 437.071L335.415 421.264Z" fill="#1C5F9A"></path><path d="M175.659 487.91L290.087 489.164L294.747 504.27L180.515 503.712L175.659 487.91Z" fill="#1C5F9A"></path><path d="M342.326 520.75L456.777 521.989L461.425 537.08L347.2 536.54L342.326 520.75Z" fill="#1C5F9A"></path><path d="M208.827 454.265L424.046 456.49L428.701 471.576L213.681 470.068L208.827 454.265Z" fill="#1C5F9A"></path><path d="M236.887 388.975L351.317 390.227L355.967 405.323L241.747 404.773L236.887 388.975Z" fill="#1C5F9A"></path><path d="M78.2267 421.127L145.324 421.484L149.974 436.587L83.0959 436.92L78.2267 421.127Z" fill="#F4A949"></path><path d="M156.512 420.877L317.531 421.363L322.181 436.463L161.364 436.688L156.512 420.877Z" fill="#9C27B0"></path><path d="M433.682 456.113L745.839 455.683L750.486 470.793L438.556 471.918L433.682 456.113Z" fill="#9C27B0"></path><path d="M131.938 454.719L199.041 455.071L203.696 470.177L136.815 470.523L131.938 454.719Z" fill="#F4A949"></path><path d="M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z" fill="#9C27B0"></path><path d="M275.51 520.95L324.298 521.124L328.953 536.228L280.376 536.745L275.51 520.95Z" fill="#9C27B0"></path><path d="M109.231 521.806L254.295 520.887L258.947 535.998L114.098 537.606L109.231 521.806Z" fill="#1C5F9A"></path></svg>
  </div>
</section>

<style>
  .bg-code-decor {
    transform: rotate(180deg);
  }

  h2 {
    margin: .75rem 0 1.5rem;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 300;
    opacity: .7;
    margin-bottom: 0;
    font-size: 18px;
  }

  p {
    max-width: 700px;
    text-align: left;
    margin-top: 0;
  }

  @media (min-width: 990px) {
    p {
      text-align:center;
    }
  }

  a {
    color: #f4a949;
    display: inline;
  }

  ul {
    list-style: none;
    padding: 0;;
    max-width: 1330px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4rem;
  }

  ul li {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 30px 3rem;
    text-align: left;
  }

  @media (min-width: 990px) {
    ul li {
      justify-content: center;
      text-align: center;
    }
  }

  .icon {
    font-size: 4rem;
  }

  .label {
    margin-top: .5rem;
  }

  .section-content {
    flex-direction: column;
  }

  @media (min-width: 990px) {
    /* .section-content {
      flex-direction: row;
    } */
  }
</style>