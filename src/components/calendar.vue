<template>
	<div class="container">
		<div class="title">
			<p>2023.10.14</p>
			<div class="desc">SÁBADO 14 DE OCTUBRE</div>
		</div>
		<div class="countdown">
			<div class="countdown-item">
				<span id="days" class="countdown-number">{{ countdown.days }}</span>
				<span class="countdown-label">Días</span>
			</div>
			<div class="countdown-item">
				<span id="hours" class="countdown-number">{{ countdown.hours }}</span>
				<span class="countdown-label">Horas</span>
			</div>
			<div class="countdown-item">
				<span id="minutes" class="countdown-number">{{ countdown.minutes }}</span>
				<span class="countdown-label">Minutos</span>
			</div>
			<div class="countdown-item">
				<span id="seconds" class="countdown-number">{{ countdown.seconds }}</span>
				<span class="countdown-label">Segundos</span>
			</div>
		</div>
		<div class="divide-line"></div>

		<div class="day-row">
			<div v-for="(day, index) in days" :key="index" :class="day.style">
				{{ day.name }}
			</div>
		</div>
		<div class="date-column">
			<div class="week1">
				<div v-for="(week, index) in week1" :key="index" :class="week.style" :id="week.id">
					{{ week.date }}
					<div v-if="week.date == 31 || week.date == 2">
						<div id="bar">Fiesta</div>
					</div>
					<div v-if="week.date == 1">
						<div id="bar">Fiesta</div>
					</div>
				</div>
			</div>
			<!-- 1ra semana -->
			<div class="week2">
				<div v-for="(week, index) in week2" :key="index" :class="week.style">
					{{ week.date }}
				</div>
			</div>
			<div class="week3">
				<div v-for="(week, index) in week3" :key="index" :class="week.style">
					{{ week.date }}
					<div v-if="week.date == 14">
						<div id="bar-wedding"></div>
					</div>
				</div>
			</div>
			<div class="week4">
				<div v-for="(week, index) in week4" :key="index" :class="week.style">
					{{ week.date }}
				</div>
			</div>
			<div class="week5">
				<div v-for="(week, index) in week5" :key="index" :class="week.style">
					{{ week.date }}
				</div>
			</div>
			<div class="week6">
				<div v-for="(week, index) in week6" :key="index" :class="week.style">
					{{ week.date }}
				</div>
			</div>
		</div>
		<div class="divide-line"></div>
	</div>
</template>

<script>
export default {
	computed: {
		getDate() {
			let count = new Date().getTime();
			let dday = new Date("October 14, 2023 15:30:00").getTime();
			let gap = dday - count;
			if (gap < 0) {
				return (
					Math.abs(Math.ceil(gap / (1000 * 60 * 60 * 24))) + " días han pasado."
				);
			}
			return Math.ceil(gap / (1000 * 60 * 60 * 24)) + " días restantes.";
		},
	},
	data() {
		return {
			days: [
				{ name: "Dom", style: "sun" },
				{ name: "Lun", style: null },
				{ name: "Mar", style: null },
				{ name: "Mié", style: null },
				{ name: "Jue", style: null },
				{ name: "Vie", style: null },
				{ name: "Sáb", style: null },
			],
			week1: [
				{ date: 24, style: "box holiday", id: null },
				{ date: 25, style: null, id: null },
				{ date: 26, style: null, id: null },
				{ date: 27, style: null, id: null },
				{ date: 28, style: null, id: null },
				{ date: 29, style: null, id: null },
				{ date: 30, style: null, id: null },
			],
			week2: [
				{ date: 1, style: "sun" },
				{ date: 2, style: null },
				{ date: 3, style: null },
				{ date: 4, style: null },
				{ date: 5, style: null },
				{ date: 6, style: null },
				{ date: 7, style: null },
			],
			week3: [
				{ date: 8, style: "sun" },
				{ date: 9, style: null },
				{ date: 10, style: null },
				{ date: 11, style: null },
				{ date: 12, style: null },
				{ date: 13, style: "event" },
				{ date: 14, style: "num14" }, // Resaltado para el día de la boda
			],
			week4: [
				{ date: 15, style: "sun" },
				{ date: 16, style: null },
				{ date: 17, style: null },
				{ date: 18, style: null },
				{ date: 19, style: null },
				{ date: 20, style: null },
				{ date: 21, style: null },
			],
			week5: [
				{ date: 22, style: "sun" },
				{ date: 23, style: null },
				{ date: 24, style: null },
				{ date: 25, style: null },
				{ date: 26, style: null },
				{ date: 27, style: null },
				{ date: 28, style: null },
			],
			week6: [
				{ date: 29, style: "sun" },
				{ date: 30, style: null },
				{ date: 31, style: null },
			],
			countdown: {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			},
		};
	},
	methods: {
		calculateCountdown() {
			const now = new Date().getTime();
			const weddingDate = new Date("October 14, 2023 15:30:00").getTime();
			const timeRemaining = weddingDate - now;

			if (timeRemaining > 0) {
				this.countdown.days = Math.floor(
					timeRemaining / (1000 * 60 * 60 * 24)
				);
				this.countdown.hours = Math.floor(
					(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				this.countdown.minutes = Math.floor(
					(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
				);
				this.countdown.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
			}
		},
	},
	mounted() {
		// Actualiza el contador cada segundo
		setInterval(() => {
			this.calculateCountdown();
		}, 1000);
	},
};
</script>

<style scoped>
/* Estilos para el contador */
.countdown {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	margin: 2rem 0;
}

.countdown-item {
	text-align: center;
	margin: 0 1rem;
}

.countdown-number {
	font-size: 2rem;
	font-weight: bold;
	color: #B4D2ACFF;
	/* Color rosa */
}

.countdown-label {
	font-size: 1rem;
	color: #777;
	margin-top: 0.5rem;
}

.container {
	max-width: 768px;
	width: 96%;
	margin: 3rem auto auto auto;
}

.divide-line {
	margin: 3rem 3rem;
	border: 0.7px solid rgb(218, 218, 218);
}

.title p {
	font-size: 1.7rem;
	margin: 0 auto;
	padding-left: 1rem;
	padding-bottom: 1rem;
	letter-spacing: 0.8rem;
	text-align: center;
}

.desc {
	width: 100%;
	font-size: 1.7rem;
	text-align: center;
	margin-bottom: 2rem;
}

.day-row {
	display: flex;
	justify-content: space-evenly;
	font-size: 1.4rem;
}

.date-column {
	display: flex;
	flex-direction: column;
	font-size: 1.4rem;
}

#bar {
	position: absolute;
	background: #B4D2ACFF;
	width: 5rem;
	color: white;
	font-size: 1.1rem;
}

.week1,
.week2,
.week3,
.week4,
.week5,
.week6 {
	display: flex;
	justify-content: space-evenly;
	padding-top: 8%;
	flex-wrap: wrap;
}

.week6 {
	margin-right: 31rem;
	/* Ajusta el margen según tus preferencias */
}

.box {
	text-align: center;
}

.num14 {
	background: none;
	/* Quita el fondo rosa */
	color: black;
	font-size: 1.5rem;
	/* Tamaño más grande para el número 14 (ajusta según tu preferencia) */
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	/* Añade esta propiedad */
}

.num14::before {
	content: '♥';
	/* Inserta el carácter de corazón */
	position: absolute;
	top: -1.2rem;
	left: -0.7rem;
	font-size: 3.4rem;
	/* Ajusta el tamaño del corazón según tus preferencias */
	color: #B4D2ACFF;
	z-index: -1;
	/* Coloca el corazón detrás del número 14 */
}

/* Resto de estilos CSS como antes */


.event {
	position: relative;
	text-align: center;
}

.event div {
	position: absolute;
	top: 20px;
	left: 0;
	right: 0;
	background: #ff69b4;
	/* Fondo rosa */
	color: white;
	font-size: 0.9rem;
}

#Dday {
	z-index: -1;
	position: absolute;
	width: 3rem;
	height: 3rem;
	border-radius: 30px;
	transform: translate(-0.7rem, -2.5rem);
	background: #a588bb;
	text-align: center;
}

.holiday {
	color: rgba(255, 103, 57, 0.76);
	font-weight: bold;
}

.sun {
	color: rgba(255, 103, 57, 0.76);
	font-weight: bold;
}

.counting {
	text-align: center;
	font-size: 1.5rem;
}

.counting span {
	color: #c3a0df;
}

#bar-wedding {
	position: relative;
	background: #ff69b4;
	/* Color rosa */
	color: white;
	width: 100%;
	font-size: 2rem;
	text-align: center;
	padding: 1rem 0;
}

@media (max-width: 320px) {
	#bar {
		position: absolute;
		background: #d1b6e6;
		color: white;
		font-size: 1rem;
	}
}

@media (max-width: 420px) {
	.week6 {
		margin-right: 16rem;
		/* Ajusta el margen según tus preferencias */
	}
}
</style>
