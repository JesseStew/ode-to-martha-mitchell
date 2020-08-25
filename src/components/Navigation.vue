<template>
	<div>
		<v-carousel
			v-model="model"
			show-arrows="false"
			hide-delimiters="false"
		>
			<v-carousel-item
				v-for="(page,i) in pages"
				:key="i"
				:src="page.src"
			>
			<v-row
				class="fill-height"
				align="center"
				justify="center"
			>
				<div
					style="
						margin-top: 30%;
						margin-left: 35%;
					">
					<span
					style="
						font-family: Lamplighter Script Regular;
						font-size: 5.5em;
						color: #fbfe2e;
						text-shadow: 0 0 5px #ff3503;
					">
					{{page.text}}
					</span>
					<!-- <br /> -->
					<!-- <span
					style="
						font-family: Lamplighter Script Regular;
						font-size: 2em;
						color: #fbfe2e;
						margin-left: 150px;
						text-shadow: 0 0 5px #ff3503;
					">
					{{page.subtitle}}
					</span> -->
				</div>

			</v-row>
			</v-carousel-item>
		</v-carousel>
		<v-tabs
			sticky
			background-color="#14143a"
			centered
      center-active
      dark
    >
			<v-tab @click="model = page.index" :to="page.path" v-for="page in pages" :key="page.id">
				{{ page.title }}
			</v-tab>
    </v-tabs>
	</div>
</template>

<script>
	export default {
		data: () => ({
			drawer: false,
			model: 0,
      pages: [
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/one.jpg?alt=media&token=3c27091d-a563-48fc-8120-36169b4bb561',
					name: 'Home',
					path: '/',
					title: 'Home',
					text: 'An Ode to Martha Mitchell',
					subtitle: 'Headwaters to COVID-19, Impeachment and Murder',
					index: 0,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/legacy.jpg?alt=media&token=e8decf49-8721-49e7-af09-c92a95593242',
					name: 'LegacyLetter',
					path: '/legacy-letter',
					title: 'Legacy Letter',
					index: 1,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/intro.jpg?alt=media&token=2fa7ae19-e5b3-4532-b71f-9732a0ef8db2',
					name: 'Intro',
					path: '/intro',
					title: 'Intro',
					index: 2,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day1_final.jpg?alt=media&token=83309fb8-5b5e-4c06-baf3-24ba21d86058',
					name: 'DayOne',
					path: '/day-one',
					title: 'Day One',
					index: 3,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/two.jpg?alt=media&token=84711dfd-8352-4d3a-9c2d-ec76debbe8d2',
					name: 'DayTwo',
					path: '/day-two',
					title: 'Day Two',
					index: 4,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/three.jpg?alt=media&token=01469ec1-0e47-4d65-8fe4-520f6945c340',
					name: 'DayThree',
					path: '/day-three',
					title: 'Day Three',
					index: 5,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/four.jpg?alt=media&token=1afb6f39-d0c1-414f-a8c1-041682930897',
					name: 'DayFour',
					path: '/day-four',
					title: 'Day Four',
					index: 6,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/five.jpg?alt=media&token=358f4746-e66d-47dc-8610-2614a22e7730',
					name: 'DayFive',
					path: '/day-five',
					title: 'Day Five',
					index: 7,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/six-2.jpg?alt=media&token=49845f90-038a-47bb-bf07-f456324c4a2e',
					name: 'DaySix',
					path: '/day-six',
					title: 'Day Six',
					index: 8,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/time.jpg?alt=media&token=72d15a0f-81f0-4a1c-b004-8d921b034c96',
					name: 'TimeLine',
					path: '/time-line',
					title: 'Time Line',
					index: 9,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/help.jpg?alt=media&token=1f448e42-f353-4d60-924f-f5c913a5aec5',
					name: 'HelpLines',
					path: '/help-lines',
					title: 'Help Lines',
					index: 10,
        },
        {
					src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/contact.jpg?alt=media&token=49b412eb-ee2b-4e16-9695-89dca2bf4dec',
					name: 'Contact',
					path: '/contact',
					title: 'Contact',
					index: 11,
        },
			],
		}),
		computed: {
			currentRouteName() {
				return this.$route.name
			},
			imgSrc() {
				return this.pages[this.$route.name].src
			}
		}
	}
</script>

<style>

</style>