<template>
  <div class="honeymoon-contribution">
    <h2>¡SI QUIERES TENER UN DETALLE CON NOSOTROS!</h2>
    <p class="p-subt">Aunque lo que más valoramos es tu
      presencia, si quieres tener un detalle
      con nosotros, puedes hacernos una
      transferencia a la siguiente cuenta
      bancaria. O de otro modo un aporte en
      efectivo el día de la boda.

      ¡Muchas gracias!

    </p>

    <!-- Información de la cuenta bancaria -->
    <div class="bank-info">
      <div class="bank-icon">
        <img src="@/assets/images/bbva-2019.svg" alt="BBVA Icon">
      </div>
      <div class="account-details">
        <div class="image">
          <img src="../assets/images/chipcard.png" alt="chipcard">
        </div>
        <div class="card-details">
          <p class="details-bank">1234-5678-9012-3456</p>
          <p class="details-bank">Victor Ramirez</p>
        </div>
      </div>
    </div>

    <div class="amazon-text">
      <p class="p-subt">También puedes tener un detalle con
        nosotros comprando algo de nuestra
        lista de regalos en Amazon.</p>
    </div>
    <!-- Botón para ver la lista de compras en Amazon -->
    <a href="https://www.amazon.com.mx/hz/wishlist/ls/1388ANAKFYUQ2?ref_=wl_share" target="_blank" class="amazon-button">
      <img src="@/assets/images/amazon-2.svg" alt="Amazon Icon">
      <span class="amazon-details">Ver lista de compras en amazon</span>
    </a>

    <div class="divide-line"></div>
  </div>
</template>

<script>
export default {
  name: 'HoneymoonContribution',
};
</script>

<style scoped>
.bank-info {
  position: relative;
  width: 100%;
  max-width: 450px;
  padding: 20px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}

.bank-info:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.bank-icon img {
  width: 80px;
  height: auto;
  opacity: 0.8;
}

.account-details {
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
  /* Espacio para el icono del banco */
}

.account-details p {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}

/* Estilos responsive */
@media (max-width: 768px) {
  .bank-info {
    width: 90%;
    padding: 15px;
    margin-bottom: 40px;
  }

  .account-details {
    margin-left: 0;
    text-align: center;
  }

  .bank-icon img {
    width: 60px;
  }

  h2 {
    font-size: 1.7rem;
    padding: 5px;

  }

  .p-subt {
    font-size: 1.2rem;
    padding: 5px;
    margin: 4px 4px 4px 4px;
    margin-bottom: 40px;
  }
}

.divide-line {
  width: 100%;
  background-color: #ffff;
  margin: 3rem 3rem;
  border: 0.7px solid rgb(218, 218, 218);
}

.honeymoon-contribution {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: 0;

}

h2 {
  font-size: 2.3rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
  letter-spacing: 0.7rem;
  color: #B4D2ACFF;
}

p {
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
  letter-spacing: 0.3rem;
  color: #ffff;
  font-weight: bold;
  text-transform: uppercase;

}

.amazon-button {
  display: inline-block;
  background-color: #FF9900;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.amazon-details {
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
  color: #ffff;
}

.amazon-button:hover {
  background-color: #FF6600;
}

.amazon-button img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>
