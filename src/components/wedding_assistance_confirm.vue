<template>
  <div class="whatsapp-buttons">
    <!-- <p class="introduction">
      ¡SERÁ UN PLACER CONTAR CON TU PRESENCIA EN NUESTRA BODA!
    </p> -->
    <p class="introduction-subt">
      POR FAVOR, CONFIRMA TU ASISTENCIA CON LA NOVIA O EL NOVIO.
    </p>
    <div class="button-container">
      <div class="novia-container">
        <div>
          <p>CONFIRMAR CON LA NOVIA</p>
        </div>
        <div class="button" @click="sendMessageGuest">
          <img src="../assets/images/whatsapp-svgrepo-com.svg" alt="">
        </div>
      </div>
      <div class="novia-container">
        <div>
          <p>CONFIRMAR CON EL NOVIO</p>
        </div>
        <div class="button" @click="sendMessageGuest">
          <img src="../assets/images/whatsapp-svgrepo-com.svg" alt="">
        </div>
      </div>
    </div>
    <p class="introduction">
      ¡SERÁ UN PLACER CONTAR CON TU PRESENCIA EN NUESTRA BODA!
    </p>
    <div class="divide-line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessageGuest() {
      const phoneNumber = '526421185155'; // Reemplaza con el número de WhatsApp de la novia
      const message = '¡Hola! Estoy emocionado/a por la boda. Confirmo mi asistencia contigo. Nos vemos pronto.'; // Personaliza el mensaje
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    },
    sendMessageRSVP() {
      const phoneNumber = '526421510254'; // Reemplaza con el número de WhatsApp del novio
      const message = '¡Hola! Estoy emocionado/a por la boda. Confirmo mi asistencia contigo. Nos vemos pronto.'; // Personaliza el mensaje
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .introduction {
    font-size: 1.7rem;
    padding: 5px;
    
  }

  .introduction-subt {
    font-size: 1.2rem;
    padding: 5px;
    margin: 4px 4px 4px 4px;
    margin-bottom: 40px;
  }

  .novia-container div p {
    font-size: 1.4rem;
    padding: 5px;
    margin-bottom: 20px;
    letter-spacing: 0.3rem;
  }

}

.button {
  border-radius: 50%;
  width: 67px;
  /* Tamaño del botón para pantallas grandes */
  height: 67px;
  /* Tamaño del botón para pantallas grandes */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.button:hover {
  animation: glowing 1.5s infinite;
  box-shadow: 0 0 10px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.5);
}

@keyframes glowing {
  0% {
    box-shadow: 0 0 10px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.5);
  }

  50% {
    box-shadow: 0 0 20px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.5), 0 0 40px rgba(37, 211, 102, 0.5);
  }

  100% {
    box-shadow: 0 0 10px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.5);
  }
}

.button img {
  width: 70px;
  /* Tamaño del icono para pantallas grandes */
  height: 70px;
  /* Tamaño del icono para pantallas grandes */
}

.novia-container {
  display: grid;
  padding: 0;
  max-width: 768px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  place-items: center;
  place-content: center;
}

.novia-container p {
  font-size: 1.5rem;
  text-align: center;
  margin: 30px auto;
  padding-bottom: 2rem;
  letter-spacing: 0.8rem;
  color: #fff;
  /* Texto blanco */
}

.whatsapp-buttons {
  max-width: 768px;
  width: 100%;
  padding: 0;
}

.introduction {
  font-size: 2.3rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
  letter-spacing: 0.7rem;
  color: #B4D2ACFF;
  font-weight: bold;
  margin-top: 60px;
}

.introduction-subt {
  font-size: 1.4rem;
  text-align: center;
  margin: 4px 4px 4px 4px;
  padding-bottom: 2rem;
  letter-spacing: 0.3rem;
  color: #ffff;
  font-weight: bold;
}
</style>
