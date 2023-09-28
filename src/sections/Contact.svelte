<script>
  import { onMount } from "svelte";
	import MediaQuery from "$lib/util/Breakpoint.svelte";

  let el;
  async function initGlobe() {
    const Globe = (await import('globe.gl')).default 
    const myGlobe = Globe();
    myGlobe(el)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundColor('rgba(0,0,0,0)')

    myGlobe.pointLightColor = '#1C5F9A';
    myGlobe.pointLightIntensity = 4;
    myGlobe.pointLightPositionRadiusScales = [4, 1, -1];
    myGlobe.controls().enabled = false;
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 0.5;

    setTimeout(() => { // wait for scene to be populated (asynchronously)
      const directionalLight = myGlobe.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
      const globeModel = myGlobe.scene().children.find(obj3d => obj3d.type === 'Mesh');
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
      directionalLight.position.copy(myGlobe.camera().position);
    }, 1);
  }

  onMount(async() => {
    await new Promise(initGlobe => setTimeout(initGlobe, 1000));
  })
</script>

<section class="section section-contact fp-auto-height-responsive">
  <div class="section-content">
    <MediaQuery query="(max-width: 992px)" let:matches>
      <div class="globe-container" bind:this={el}></div>
      <div class="copy-content">
        <p>What would you do if you had a software expert available at your fingertips?</p>
        <p>Want to start new project? Or just say hey. You can also follow me on Instagram.</p>
        <h3>tdrdimov@gmail.com</h3>
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

  .globe-container {
    margin-left: -5%;
  }

  @media (min-width: 990px) {
    .globe-container {
      margin-left: -50%;
    }
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