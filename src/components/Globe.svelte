<script>
  import { onMount } from "svelte";

  let el;

  onMount(async() => {
    console.log('component loaded');
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
  })
</script>

<div class="globe-container" bind:this={el}></div>

<style>
  .globe-container {
    margin-left: -5%;
  }

  @media (min-width: 990px) {
    .globe-container {
      margin-left: -50%;
    }
  }
</style>