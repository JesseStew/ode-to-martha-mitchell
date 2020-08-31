<template>
	<div>
		<v-window
			v-model="model"
			hide-delimiters
		>
			<v-window-item
				v-for="(page,i) in pages"
				:key="i"
				:src="page.src"
			>
			<v-row
				class="fill-height"
				align="center"
				justify="center"
			>
				<v-img contain :min-height="500" max-height="850" :src="page.src" :lazy-src="page.lazySrc">
					<template v-slot:placeholder>
						<v-row
							class="fill-height ma-0"
							align="center"
							justify="center"
						>
							<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
						</v-row>
					</template>
				</v-img>
				<div
					style="
						position: absolute;
						top: 50%;
						left: 3%;
						opacity: .7;
					">
					<v-btn @click="itrModel(model - 1)" :color="currentColor" fab small dark>
						<v-icon>mdi-chevron-left</v-icon>
					</v-btn>
				</div>
				<div
					style="
						position: absolute;
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
					<!-- <br />
					<span
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
				<div
					style="
						position: absolute;
						top: 50%;
						right: 3%;
						opacity: .7;
					">
					<v-btn @click="itrModel(model + 1)" :color="currentColor" fab small dark>
						<v-icon>mdi-chevron-right</v-icon>
					</v-btn>
				</div>

			</v-row>
			</v-window-item>
		</v-window>
		<v-tabs
			sticky
			:background-color="currentColor"
			centered
      center-active
      dark
    >
			<v-tab @click="tabMethod(page.index)" :to="page.path" v-for="page in pages" :key="page.id">
				{{ page.title }}
			</v-tab>
    </v-tabs>
		<v-container fluid>
			<v-row>
				<v-col cols="12">
					<slot></slot>
				</v-col>
				<v-row v-if="pages[model].title !== 'Home'" justify="start">
					<v-btn @click="itrModel(model - 1)" class="mx-5" fab dark :color="currentColor">
						<v-icon dark>mdi-minus</v-icon>
					</v-btn>
				</v-row>
				<v-row v-if="pages[model].title !== 'Home'" justify="end">
					<v-btn @click="itrModel(model + 1)" class="mx-5" fab dark :color="currentColor">
						<v-icon dark>mdi-plus</v-icon>
					</v-btn>
				</v-row>

				<v-row v-if="pages[model].title === 'Home'" justify="start">
					<v-btn block @click="tabMethod(2)" x-large dark :color="currentColor">
						Go to The Interview
						<!-- here, Going to Intro confirm -->
					</v-btn>
				</v-row>
				<v-row v-if="pages[model].title === 'Home'" justify="end">
					<v-btn block @click="tabMethod(1)" x-large dark :color="currentColor">
						Go to The Legacy Letter
					</v-btn>
				</v-row>
				<v-col class="martha-mitchell" v-if="pages[model].title === 'Home'" cols="12">
					<p class="ma-3">
            *Martha Mitchell (1918-1975) was A Washington D.C. socialite and wife of John Mitchell, U.S. Attorney General under Richard Nixon. John Mitchell also served as chairman of Richard Nixon’s 1972 reelection campaign. He was ultimately convicted of conspiracy, obstruction of justice and perjury in relation to events surrounding the Watergate Scandal.
					</p>
					<p class="ma-3">
						The Martha Mitchell effect is a term utilized in psychiatry in relation to a patient being misdiagnosed as being delusional, when in fact the content of their misinterpreted delusions are an actual representation of events experienced by them. The origin of this term references events that occurred to Martha Mitchell in 1972, when she claimed that White House officials were engaging in illegal activities. Mitchell also claimed she was drugged, beaten and forced under guard to remain in hotel room in California to prevent her from further contacting the press about Watergate break-in and ensuing scandal. Aides of President Nixon informed the media that she was ‘resting’ in a psychiatric hospital; the intent of this statement was to discount the validity of her credibility and therefore observations. A substantial proportion of Martha Mitchells’ claims were later validated.
          </p>
				</v-col>
				<v-col cols="12" class="text-center small-text"
					style="
						font-size: 1.5em;
					"
				>
					<a class="pa-2" @click="tabMethod(3)">
						Day 1 - Tennesee
					</a>
					<a class="pa-2" @click="tabMethod(4)">
						Day 2 - Washington D.C.
					</a>
					<a class="pa-2" @click="tabMethod(5)">
						Day 3 - Missouri
					</a>
					<a class="pa-2" @click="tabMethod(6)">
						Day 4 - South Pacific
					</a>
					<a class="pa-2" @click="tabMethod(7)">
						Day 5 - Rome, Italy
					</a>
					<a class="pa-2" @click="tabMethod(8)">
						Day 6 - Los Angeles
					</a>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
// colors:
// 	brown: #845a1f, #946523
// 	blue: #14143a
export default {
	computed: {
		imgSrc() {
			return this.pages[this.$route.name].src
		},
		currentRoute() {
			return this.$_.last(this.$_.split(window.location.href, '/'))
		},
		currentColor() {
			return this.pages[this.model].color
		}
	},
	methods: {
		tabMethod(index) {
			this.model = index
		},
		itrModel(modelItr) {
			if (11 < modelItr) {
				this.model = 0
			} else if (modelItr < 0) {
				this.model = 11
			} else {
				this.model = modelItr
			}
		}
	},
	created: function(){
		// this.$router.push({ path: this.currentRoute })
		if (this.currentRoute === 'legacy-letter') {
			this.model = 1
			this.color = this.brown
			// here,
		} else if (this.currentRoute === 'intro') {
			this.model = 2
		} else if (this.currentRoute === 'day-one') {
			this.model = 3
		} else if (this.currentRoute === 'day-two') {
			this.model = 4
		} else if (this.currentRoute === 'day-three') {
			this.model = 5
		} else if (this.currentRoute === 'day-four') {
			this.model = 6
		} else if (this.currentRoute === 'day-five') {
			this.model = 7
		} else if (this.currentRoute === 'day-six') {
			this.model = 8
		} else if (this.currentRoute === 'time-line') {
			this.model = 9
		} else if (this.currentRoute === 'help-lines') {
			this.model = 10
		} else if (this.currentRoute === 'contact') {
			this.model = 11
		} else {
			this.model = 0
		}
	},
	watch: {
		model: function (val) {
			window.scrollTo(0,0)
			let page = this.$_.find(this.pages, { 'index': val })
			if (this.$route.path !== page.path) {
				this.$router.push({ path: page.path })
			}
		},
	},
	data: () => ({
		drawer: false,
		model: 0,
		color: '#14143a',
		brown: '#845a1f',
		blue: '#14143a',
		pages: [
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/home_final.jpg?alt=media&token=1d2811c3-4543-4f32-8568-59bbf0cd2d33',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/home_final_lazy.jpg?alt=media&token=c839d1da-5868-43b0-93b4-5757cef56c54",
				name: 'Home',
				path: '/',
				title: 'Home',
				text: 'An Ode to Martha Mitchell',
				subtitle: 'Headwaters to COVID-19, Impeachment and Murder',
				index: 0,
				color: '#14143a',
				minHeight: 732,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/legacy_letter_final.jpg?alt=media&token=860ca8e9-cc68-43ba-bb7b-42075e79bd6b',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/legacy_letter_final_lazy.jpg?alt=media&token=c0dd025f-42d9-422e-b2ce-1929c757448e",
				name: 'LegacyLetter',
				path: '/legacy-letter',
				title: 'Legacy Letter',
				index: 1,
				color: '#845a1f',
				minHeight: 373,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/intro_final.jpg?alt=media&token=c1ca0db3-a31e-4b28-8418-109570d2c682',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/intro_final_lazy.jpg?alt=media&token=a4044e9f-023d-44d3-a0f7-ea3bc5a06168",
				name: 'Intro',
				path: '/intro',
				title: 'Intro',
				index: 2,
				color: '#14143a',
				minHeight: 595,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day1_final.jpg?alt=media&token=31505349-7d43-4621-8efc-3e216c49b12d',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day1_final_lazy.jpg?alt=media&token=51875c17-e455-433d-9db2-6a27542549ca",
				name: 'DayOne',
				path: '/day-one',
				title: 'Day One',
				index: 3,
				color: '#845a1f',
				minHeight: 732,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day2_final.jpg?alt=media&token=8807a0c8-ad11-4b0f-a297-802279914849',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day2_final_lazy.jpg?alt=media&token=4f38b818-5339-445e-aea1-128dcc4a0817",
				name: 'DayTwo',
				path: '/day-two',
				title: 'Day Two',
				index: 4,
				color: '#14143a',
				minHeight: 596,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day3_final.jpg?alt=media&token=c484bbf2-b4e0-4ac2-97df-d32987879e13',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day3_final_lazy.jpg?alt=media&token=767cd3f9-9b40-4e4f-8fd5-d970005bc5ca",
				name: 'DayThree',
				path: '/day-three',
				title: 'Day Three',
				index: 5,
				color: '#14143a',
				minHeight: 595,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day4_final.jpg?alt=media&token=4ac6110c-faf9-4f3e-8e5d-230dd2e4c9e7',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day4_final_lazy.jpg?alt=media&token=604dbe96-a7a8-45f6-b707-6943b624b33c",
				name: 'DayFour',
				path: '/day-four',
				title: 'Day Four',
				index: 6,
				color: '#845a1f',
				minHeight: 670,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day5_final.jpg?alt=media&token=31058251-7d0d-49a3-81ed-5831e5051c2f',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day5_final_lazy.jpg?alt=media&token=fff364df-95be-4593-9f15-1fad4bbb7d7f",
				name: 'DayFive',
				path: '/day-five',
				title: 'Day Five',
				index: 7,
				color: '#14143a',
				minHeight: 495,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day6_upsidedown_final.jpg?alt=media&token=cfe5fe59-6add-40b4-8848-666dac41c909',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day6_upsidedown_final.jpg?alt=media&token=bfa6858f-68ed-452e-b2fc-687c32e5e29c",
				name: 'DaySix',
				path: '/day-six',
				title: 'Day Six',
				index: 8,
				color: '#845a1f',
				minHeight: 530,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/timeline_final.jpg?alt=media&token=f2a3d3b2-0502-4059-b72a-9c8d321a251d',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/timeline_final_lazy.jpg?alt=media&token=73658143-3972-4025-9a5c-25abd5ca7a9e",
				name: 'TimeLine',
				path: '/time-line',
				title: 'Time Line',
				index: 9,
				color: '#845a1f',
				minHeight: 595,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/help_lines_final.jpg?alt=media&token=f41928bc-d91b-419f-9718-f96c0289d46e',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/help_lines_final_lazy.jpg?alt=media&token=b6ccdf6d-6cab-46c0-84a8-a027afacf643",
				name: 'HelpLines',
				path: '/help-lines',
				title: 'Help Lines',
				index: 10,
				color: '#14143a',
				minHeight: 705,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/contact_final.jpg?alt=media&token=d45f2072-bdf1-4393-8b59-4dde07f564de',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/contact_final_lazy.jpg?alt=media&token=6a95a381-d2b5-4a65-80f8-dc38e0a71ba9",
				name: 'Contact',
				path: '/contact',
				title: 'Contact',
				index: 11,
				color: '#14143a',
				minHeight: 595,
			},
		],
	}),
}
</script>

<style>

</style>