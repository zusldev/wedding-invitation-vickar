<template>
	<div class="container">
		<div class="main-picture">
			<div>
				<img class="image" src="@/assets/images/wedding-portrait.webp" alt="Imagen principal" />
				<div class="logo">
					<img src="@/assets/images/vandk-removebg-preview.png" alt="Logo" />
				</div>
			</div>
			<div class="rippedpaper">
				<img src="https://files.rb.gd/atlanticimpact/ripped-paper-n.png" alt="Ripped paper" />
			</div>
			<div class="rippedpaper-top">
				<img src="https://files.rb.gd/atlanticimpact/ripped-paper-n.png" alt="Ripped paper" />
			</div>
			<div class="names">
				<p class="boy">VICTOR <br> <span class="names-bride">& KARLA</span></p>
			</div>
		</div>
		<div class="divide-line"></div>
		<div class="main-greeting">
			<div class="main-greeting-title">
				NOS ENCANTARÍA CELEBRAR ESTE DÍA
				TAN ESPECIAL JUNTO A TI
			</div>
			<div class="main-greeting-text">
				CON LA BENDICIÓN DE DIOS Y
				NUESTROS PADRES
			</div>
			<div id="padres">
				<p>José Manuel Pacheco</p>
				<p>María Elena Padilla</p>
				<p>&</p>
				<p>Victor Manuel Ramirez</p>
				<p>Trinidad Lourdes Rosas</p>
			</div>
		</div>

		<div class="">
			<img class="second-image" id="sec-img" src="https://ik.imagekit.io/uvhv6hndt/2.webp?updatedAt=1696295146984" />
		</div>

		<div class="divide-line"></div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#sec-img {
	width: 100%;
	object-fit: cover;
	height: 500px;
	display: block;
	border-radius: 50%;
	transition: transform 0.5s ease-in-out;

}

#padres {
	font-family: "Alex Brush", cursive;
	margin-top: 100px;
	text-align: center;
	color: #ffff;
	font-size: 6rem;
	line-height: 0.6;
}

.rippedpaper-top {
	text-align: center;
	position: relative;
	margin-top: -20px;
	/* Ajusta este valor según tu diseño */
	z-index: 1;
	transform: scaleX(-1);
	/* Voltea horizontalmente la imagen */
}

.rippedpaper-top img {
	max-width: 100%;
	height: auto;
	display: block;
	transform: scaleY(-1);
	/* Voltea verticalmente la imagen */
}

.rippedpaper img {
	max-width: 100%;
	height: auto;
	display: block;
	position: absolute;
	z-index: 1;
}

.container {
	max-width: 768px;
	width: 100%;
	margin: 0 auto;
	padding: 0;
}

.image {
	width: 100%;
	object-fit: cover;
	height: 900px;
	display: block;
	transition: transform 0.5s ease-in-out;
}

.main-picture {
	position: relative;
	margin: 0 0;
	overflow: hidden;
}

.main-picture::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%);
	z-index: 1;
	pointer-events: none;
	/* Evita que el pseudo-elemento sea interactivo */
}

.logo {
	position: absolute;
	top: 70px;
	/* Ajusta la posición vertical del logo */
	left: 50px;
	/* Ajusta la posición horizontal del logo */
	z-index: 2;
	/* Para que el logo esté sobre el pseudo-elemento */
}

.logo img {
	width: 100px;
	/* Ajusta el tamaño del logo según tus preferencias */
	height: auto;
	scale: 3;

}

.names {
	text-align: center;
	font-size: 9rem;
	/* Tamaño del texto de los nombres */
	font-family: 'Times New Roman', cursive;
	color: #fff;
	/* Color del texto */
	position: relative;

}

/* Estilos para los nombres */

.names p span {
	background-size: 50px 50px;
	background-color: #b4d2ac;
	/* Cambiado a un tono similar a #B4D2ACFF */
	background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
			transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
			transparent 75%, transparent);
	background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
			transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
			transparent 75%, transparent);
	background-image: linear-gradient(135deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
			transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
			transparent 75%, transparent);
	-webkit-background-clip: text;
	background-clip: text;

	/* Animate Background Image */

	-webkit-text-fill-color: transparent;
	-webkit-animation: aitf 10s linear infinite;
	animation: aitf 10s linear infinite;

	/* Activate hardware acceleration for smoother animations */

	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);

	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}


/* Animate Background Image */

@keyframes aitf {
	0% {
		background-position: 0% 50%;
	}

	100% {
		background-position: 100% 50%;
	}
}

/* Estilos para los nombres */


.names-bride {
	margin-left: 150px;
}

.boy {
	margin-right: 90px;
}

img {
	transition: transform 0.5s ease-in-out;
	/* Agrega la transición en el estado normal */
}

.main-info-location p {
	font-size: 1.5rem;
	text-align: center;
	margin: 0;
	padding: 0;
	letter-spacing: 0.3rem;
	color: #ff69b4;
}

.divide-line {
	margin: 3rem 3rem;
	border: 0.7px solid rgb(218, 218, 218);
}

.main-greeting {
	margin: 0 auto;
	padding: 0 2.3rem;
}

.main-greeting-title {
	font-size: 2.3rem;
	text-align: center;
	margin: 0 auto;
	padding-bottom: 2rem;
	letter-spacing: 0.8rem;
	color: #B4D2ACFF;
}

.main-greeting-title p {
	letter-spacing: 0.3rem;
	font-size: 1.5rem;
	margin: 0.4rem 0;
}

.main-greeting-title p span {
	font-size: 1.2rem;
}

.main-greeting-text p {
	font-size: 1.27rem;
	margin-top: 0.5rem;
	padding: 0.3rem 0;
}

.main-greeting-text {
	font-size: 1.5rem;
	text-align: center;
	margin: 0 auto;
	padding-bottom: 2rem;
	letter-spacing: 0.8rem;
	color: #ffff;
	font-weight: bold;
}

/* Estilos para dispositivos móviles (ancho máximo de 767px) */
@media (max-width: 767px) {

	#padres {
		font-size: 2.8rem;
		line-height: 0.4;
		text-wrap: nowrap;
		padding-bottom: 5rem;
	}

	.main-greeting-title {
		font-size: 1.7rem;
		padding-bottom: 1rem;
		letter-spacing: 0.2rem;
	}

	.main-greeting-text {
		font-size: 1.0rem;
		padding-bottom: 1rem;
		letter-spacing: 0.5rem;
	}

	.image {
		object-fit: cover;
		height: auto;
		/* Cambia la altura para que la imagen se ajuste de manera proporcional */
	}

	.names p span {
		font-size: 5rem;
		/* Ajusta el tamaño del texto de los nombres para dispositivos móviles */
	}

	.names-bride {
		margin-left: 50px;
		/* Ajusta el margen izquierdo para centrar mejor los nombres */
	}

	.boy {
		margin-right: 50px;
		/* Ajusta el margen derecho para centrar mejor los nombres */
	}

	.rippedpaper-top {
		margin-top: -10px;
		/* Ajusta este valor según tu diseño */
	}

	.names {
		font-size: 4rem;
		/* Ajusta el tamaño del texto de los nombres para dispositivos móviles */
	}

	.logo {
		scale: 0.8;
		left: 140px;
	}

	/* Agrega cualquier otro ajuste necesario para dispositivos móviles aquí */
}

/* Resto de tu CSS para tabletas y escritorio */


@media (min-width: 350px) {
	.main-info {
		height: 95rem;
	}

	.main-info-location p {
		font-size: 1.7rem;
	}

	.main-greeting-title {
		padding-bottom: 4rem;
	}

	.main-greeting-title p span {
		font-size: 1.4rem;
	}

	.main-greeting-title p {
		font-size: 1.7rem;
	}

	.main-greeting-text p {
		font-size: 1.4rem;
		margin-top: 0.5rem;
		padding: 0.3rem 0;
	}

	.main-greeting {
		margin: 0 auto;
	}

	.divide-line {
		margin: 3rem 2rem;
	}

	.bottom-img {
		height: 25%;
		overflow: hidden;
	}

	.bottom-img img {
		transform: translate(0, -60%);
	}
}

@media (min-width: 380px) {
	.main-info {
		height: 97rem;
	}

	.main-greeting {
		padding: 0 2.7rem;
	}

	.divide-line {
		margin: 3rem 2.5rem;
	}

	.main-greeting-text p {
		font-size: 1.5rem;
		margin-top: 0.5rem;
		padding: 0.3rem 0;
	}
}

@media (min-width: 420px) {
	.main-info {
		height: 105rem;
	}

	.main-info-title p {
		font-size: 2.3rem;
	}

	.main-info-location p {
		font-size: 1.7rem;
	}

	.main-greeting-title p span {
		font-size: 1.4rem;
	}

	.main-greeting-title p {
		font-size: 1.8rem;
	}

	.main-greeting-text p {
		font-size: 1.6rem;
		margin-top: 0.5rem;
		padding: 0.3rem 0;
	}

	.main-greeting {
		padding: 0 3rem;
	}

	.bottom-img {
		height: 25%;
	}

	.bottom-img img {
		transform: translate(0, -55%);
	}

	.divide-line {
		margin: 3rem 3rem;
	}
}
</style>