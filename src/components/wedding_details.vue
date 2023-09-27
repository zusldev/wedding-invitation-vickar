<template>
  <div class="details-container">
    <div class="details-item">
      <div class="details-main-title">DETALLES</div>
      <div class="details-title">NO NIÑOS</div>
      <div class="details-text">
        AUNQUE NOS GUSTAN LOS NIÑOS,<br />
        ESTA SERÁ UNA CELEBRACIÓN<br />
        SÓLO PARA ADULTOS
      </div>
      <!-- IMage -->
      <div class="img-container">
        <img src="@/assets/images/nochilds.png" alt="no childs" />
      </div>

    </div>
    <div class="details-item">
      <div class="details-title">CEREMONIA RELIGIOSA</div>
      <div class="details-text">
        PARROQUIA DE NUESTRA SEÑORA<br />
        DEL PERPETUO SOCORRO<br />
        AGUA PRIETA #402, COL. SONORA<br />
      </div>
      <p class="hour">6:00 PM</p>
      <div class="img-container">
        <img src="@/assets/images/church.png" alt="Iglesia" />

      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.732591307377!2d-109.4331615238667!3d27.070187476553702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b81b034b5fb245%3A0x9b382b56838b8d9d!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20del%20Perpetuo%20Socorro!5e0!3m2!1ses-419!2smx!4v1695796568270!5m2!1ses-419!2smx"
          width="760" height="450" style="border: 1px transparent; border-radius: 10px; margin-bottom: 50px"
          allowfullscreen="" loading="lazy" id="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="details-item">
      <div class="details-title">RECEPCIÓN</div>
      <div class="details-text">
        SALÓN MONTECARLO<br />
        CALLE GRAL. OTERO NTE. 105,<br />
        CENTRO
      </div>
      <div class="img-container">
        <img src="@/assets/images/wedding-ring.png" alt="wedding ring" />
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.3952235340166!2d-109.44594952386647!3d27.08083147654754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b81b3c1cd5ef6d%3A0xa60e5715884fb059!2sSALON%20MONTECARLO!5e0!3m2!1ses-419!2smx!4v1695620165981!5m2!1ses-419!2smx"
          width="760" height="450" style="border: 1px transparent; border-radius: 10px; margin-bottom: 50px"
          allowfullscreen="" loading="lazy" id="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <div class="details-item">
      <div class="details-title">NUESTRO PRIMER BAILE DE NOVIOS</div>
      <div class="hour">
        9:30 PM
      </div>
      <div class="wedding-dance">
        <img src="@/assets/images/wedding-portrait.jpg" alt="wedding ring" />
      </div>
    </div>
    <div class="divide-line"></div>
  </div>
</template>

<style scoped>
.hour {
  font-size: 2.1rem;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 0.2rem;
  color: #ffff;
  font-weight: bold;
}

.details-main-title {
  font-size: 6rem;
  color: #ffff;
  margin-bottom: 1rem;
  letter-spacing: 1.2rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
}

.map {
  margin-top: 50px;
}

.divide-line {
  width: 100%;
  background-color: #ffff;
  margin: 3rem 3rem;
  border: 0.7px solid rgb(218, 218, 218);
}

.img-container img {
  width: 205px;
  height: 205px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0;
  max-width: 370px;
  max-height: 700px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.wedding-dance img {
  width: 100%;
  object-fit: cover;
  height: 900px;
  display: block;
  transition: transform 0.5s ease-in-out;
  border-radius: 900px;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: center;

}

.details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.details-item {
  text-align: center;
  margin-bottom: 50px;
}

.details-title {
  font-size: 2.3rem;
  color: #B4D2ACFF;
  margin-bottom: 1rem;
  letter-spacing: 0.8rem;
}

.details-text {
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
  letter-spacing: 0.8rem;
  color: #ffff;
  font-weight: bold;
}

@media (max-width: 767px) {
  .details-title {
    font-size: 2rem;
    padding: 5px;
  }

  .details-text {
    font-size: 1.2rem;
    padding: 5px;
    margin: 4px 4px 4px 4px;
    letter-spacing: 0.5rem;
  }

  #map {
    margin: 0 auto;
    padding: 0;
    max-width: 300px;
    max-height: 300px;
  }

  .details-main-title {
    font-size: 3.8rem;
    margin-bottom: 1rem;
    letter-spacing: 0.8rem;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .img-container img {
    width: 185px;
    height: 185px;
  }
}
</style>
<script setup>
</script>