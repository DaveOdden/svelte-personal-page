<script>

</script>

<div class="logo">
  <a class="logo--anchor" href="#about">
    <div class="blinking-box">
      <svg width="40" height="23" viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="35" height="52" fill="#000000"></rect><path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="aliceblue"></path><rect class="blinkit" x="45" y="44" width="29" height="8" fill="#000000"></rect></svg>
    </div>
    <h1 class="logo--name">DAVE <span class="is-hidden">Odden</span></h1>
  </a>
</div>

<style lang="scss">

.logo {
  left: 1rem;
  margin: 1rem 0;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  @media (min-width: 992px) {
    left: 2.5rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 1440px) {
    left: 3.125rem;
    margin: 3.125rem 0;
  }
}

.logo--anchor {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo--name {
  font-size: 34px;
  line-height: 1;
  margin: 0;
  color: #f0f8ff;
  display: inline;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.blinking-box {
  top: 4px;
  position: relative;
  margin-right: 2px;
}

.blinkit {
  animation: blink 2.6s infinite;
}

@keyframes blink {
	0% {opacity: 0}
	49%{opacity: 0}
	50% {opacity: 1}
}

</style>