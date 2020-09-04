<template>
	<div>
		<v-window
			v-model="model"
			hide-delimiters
			dark
		>
			<v-window-item
				v-for="(page,i) in pages"
				:key="i"
				:src="page.src"
				:class="page.class"
			>
			<v-row
				class="fill-height"
				align="center"
				justify="center"
			>
				<v-img ref="carousel-image" contain :min-height="pictureMinHeight" :max-height="pictureMaxHeight" :src="page.src" :lazy-src="page.lazySrc">
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
				<v-col cols="12" md="4"></v-col>
				<v-col cols="12" md="8" :class="dayLinkClasses">
					<!-- here, not sure about this -->
					<!-- <a style="font-size: 1.2em; text-decoration: underline; font-weight: bold;" class="text-center" v-if="model === 2" @click="tabMethod(pages[model].index + 1)" color="#287ace">
						{{pages[model].dayLink}}
					</a> -->
					<v-btn v-if="model === 2" block @click="tabMethod(pages[model].index + 1)" tile x-large color="#287ace" icon
						style="font-size: .9em;"
					>
						{{pages[model].dayLink}}
						<v-icon>mdi-chevron-right</v-icon>
					</v-btn>
					<v-btn v-if="model < 8 && model > 2" block @click="tabMethod(pages[model].index + 1)" tile x-large :color="pages[model].color" icon>
						{{pages[model].dayLink}}
						<v-icon>mdi-chevron-right</v-icon>
					</v-btn>
				</v-col>
				<v-col cols="6">
					<v-row v-if="pages[model].title !== 'Home'" justify="start">
						<v-btn @click="itrModel(model - 1)" class="mx-5" fab dark :color="currentColor">
							<v-icon dark>mdi-minus</v-icon>
						</v-btn>
					</v-row>
				</v-col>
				<v-col cols="6">
					<v-row v-if="pages[model].title !== 'Home'" justify="end">
						<v-btn @click="itrModel(model + 1)" class="mx-5" fab dark :color="currentColor">
							<v-icon dark>mdi-plus</v-icon>
						</v-btn>
					</v-row>
				</v-col>

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
				<v-row :color="pages[model].color" cols="12" class="text-center small-text"
					style="
						font-size: 1.5em;
					"
				>
					<v-col cols="4" md="3" :color="pages[model].color" @click="tabMethod(3)">
						<v-btn block @click="tabMethod(3)" tile small :color="pages[model].color" icon>
							Day 1 - Tennesee
						</v-btn>
					</v-col>
					<v-col cols="4" md="3" :color="pages[model].color" @click="tabMethod(4)">
						<v-btn block @click="tabMethod(4)" tile small :color="pages[model].color" icon>
							Day 2 - Washington D.C.
						</v-btn>
					</v-col>
					<v-col cols="4" md="3" :color="pages[model].color" @click="tabMethod(5)">
						<v-btn block @click="tabMethod(5)" tile small :color="pages[model].color" icon>
							Day 3 - Missouri
						</v-btn>
					</v-col>
					<v-col cols="4" md="3" :color="pages[model].color" @click="tabMethod(6)">
						<v-btn block @click="tabMethod(6)" tile small :color="pages[model].color" icon>
							Day 4 - South Pacific
						</v-btn>
					</v-col>
					<v-col v-if="$vuetify.breakpoint.md" md="3"></v-col>
					<v-col cols="4" md="3" :color="pages[model].color" @click="tabMethod(7)">
						<v-btn block @click="tabMethod(7)" tile small :color="pages[model].color" icon>
							Day 5 - Rome, Italy
						</v-btn>
					</v-col>
					<v-col cols="4" md="3" :color="pages[model].color" @click="tabMethod(8)">
						<v-btn block @click="tabMethod(8)" tile small :color="pages[model].color" icon>
							Day 6 - Los Angeles
						</v-btn>
					</v-col>
					<v-col v-if="$vuetify.breakpoint.md" md="3"></v-col>
				</v-row>
			</v-row>
		</v-container>
	</div>
</template>

<script>
// colors:
// 	brown: #202408, #946523
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
		},
		dayLinkClasses() {
			if (this.$vuetify.breakpoint.md) {
				return 'text-center day-link-md'
			} else {
				return 'text-center day-link-sm'
			}
		},
		pictureMaxHeight() {
			return this.windowHeight - 200
		},
		pictureMinHeight() {
			if (this.$vuetify.breakpoint.md) {
				return this.windowHeight/3
			} else {
				return this.windowHeight/5
			}
		},
		homeTitlePosition() {
			if(this.$vuetify.breakpoint.xs) {
				return 'home-title-position-xs'
			} else if (this.$vuetify.breakpoint.sm) {
				return 'home-title-position-sm'
			} else if (this.$vuetify.breakpoint.md) {
				return 'home-title-position'
			} else {
				return 'home-title-position-lg'
			}
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
		},
		onResize() {
      this.windowHeight = window.innerHeight
    }
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize)
		})
	},
	beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
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
		windowHeight: window.innerHeight,
		drawer: false,
		model: 0,
		color: '#14143a',
		brown: '#202408',
		blue: '#14143a',
		pages: [
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/home_final.jpg?alt=media&token=57982954-1dcf-448d-a55d-f247acf60c21',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/home_final_lazy.jpg?alt=media&token=103815fa-2c3d-4a18-9c50-b35589962a5d",
				name: 'Home',
				path: '/',
				title: 'Home',
				text: 'An Ode to Martha Mitchell',
				subtitle: 'Headwaters to COVID-19, Impeachment and Murder',
				index: 0,
				color: '#14143a',
				class: 'blue-background',
				minHeight: 732,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/legacy_letter_final_cropped.jpg?alt=media&token=d80a5f70-f086-4b62-90b0-754b4bdbf318',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/legacy_letter_final_lazy_cropped.jpg?alt=media&token=f2bf5619-6468-4822-b52c-b93b6c1605e6",
				name: 'LegacyLetter',
				path: '/legacy-letter',
				title: 'Legacy Letter',
				index: 1,
				color: '#202408',
				class: 'brown-background',
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
				class: 'blue-background',
				minHeight: 595,
				dayLink: 'Begin The Interview: Day 1 - Tennesee',
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day1_final.jpg?alt=media&token=31505349-7d43-4621-8efc-3e216c49b12d',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day1_final_lazy.jpg?alt=media&token=51875c17-e455-433d-9db2-6a27542549ca",
				name: 'DayOne',
				path: '/day-one',
				title: 'Day One',
				index: 3,
				color: '#202408',
				class: 'brown-background',
				minHeight: 732,
				dayLink: 'Continue to Day 2 - Washington D.C.',
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day2_final.jpg?alt=media&token=8807a0c8-ad11-4b0f-a297-802279914849',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day2_final_lazy.jpg?alt=media&token=4f38b818-5339-445e-aea1-128dcc4a0817",
				name: 'DayTwo',
				path: '/day-two',
				title: 'Day Two',
				index: 4,
				color: '#14143a',
				class: 'blue-background',
				minHeight: 596,
				dayLink: 'Continue to Day 3 - Missouri',
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day3_final.jpg?alt=media&token=c484bbf2-b4e0-4ac2-97df-d32987879e13',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day3_final_lazy.jpg?alt=media&token=767cd3f9-9b40-4e4f-8fd5-d970005bc5ca",
				name: 'DayThree',
				path: '/day-three',
				title: 'Day Three',
				index: 5,
				color: '#14143a',
				class: 'blue-background',
				minHeight: 595,
				dayLink: 'Continue to Day 4 - The South Pacific',
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day4_final.jpg?alt=media&token=4ac6110c-faf9-4f3e-8e5d-230dd2e4c9e7',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day4_final_lazy.jpg?alt=media&token=604dbe96-a7a8-45f6-b707-6943b624b33c",
				name: 'DayFour',
				path: '/day-four',
				title: 'Day Four',
				index: 6,
				color: '#202408',
				class: 'brown-background',
				minHeight: 670,
				dayLink: 'Continue to Day 5 - Rome, Italy - Vincit Qui Patitur',
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day5_final.jpg?alt=media&token=31058251-7d0d-49a3-81ed-5831e5051c2f',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day5_final_lazy.jpg?alt=media&token=fff364df-95be-4593-9f15-1fad4bbb7d7f",
				name: 'DayFive',
				path: '/day-five',
				title: 'Day Five',
				index: 7,
				color: '#14143a',
				class: 'blue-background',
				minHeight: 495,
				dayLink: 'Continue to Day 6 - Los Angeles',
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day6_upsidedown_final.jpg?alt=media&token=cfe5fe59-6add-40b4-8848-666dac41c909',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/Day6_upsidedown_final.jpg?alt=media&token=bfa6858f-68ed-452e-b2fc-687c32e5e29c",
				name: 'DaySix',
				path: '/day-six',
				title: 'Day Six',
				index: 8,
				color: '#202408',
				class: 'brown-background',
				minHeight: 530,
			},
			{
				src: 'https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/timeline_final.jpg?alt=media&token=f2a3d3b2-0502-4059-b72a-9c8d321a251d',
				lazySrc: "https://firebasestorage.googleapis.com/v0/b/an-ode.appspot.com/o/timeline_final_lazy.jpg?alt=media&token=73658143-3972-4025-9a5c-25abd5ca7a9e",
				name: 'TimeLine',
				path: '/time-line',
				title: 'Time Line',
				index: 9,
				color: '#202408',
				class: 'brown-background',
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
				class: 'blue-background',
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
				class: 'blue-background',
				minHeight: 595,
			},
		],
	}),
}
</script>

<style>
.blue-background {
	background-color: #0a0b1f;
}
.brown-background {
	background-color: #0a0c02;
}
.day-link-md {
	font-size: 2em;
}
.day-link-sm {
	font-size: 1.2em;
}
.home-title-position-xs {
	position: absolute;
	margin-top: 20vh;
	margin-left: 35vw;
}
.home-title-position-sm {
	position: absolute;
	margin-top: 25vh;
	margin-left: 35vw;
}
.home-title-position {
	position: absolute;
	margin-top: 30vh;
	margin-left: 35vw;
}
.home-title-position-lg {
	position: absolute;
	margin-top: 40vh;
	margin-left: 35vw;
}
.home-title-text-xs {
	font-family: Lamplighter Script Regular;
	font-size: 2.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-title-text-sm {
	font-family: Lamplighter Script Regular;
	font-size: 3.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-title-text-md {
	font-family: Lamplighter Script Regular;
	font-size: 5.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-title-text-lg {
	font-family: Lamplighter Script Regular;
	font-size: 7.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-subtitle-text-xs {
	font-family: Lamplighter Script Regular;
	font-size: 1.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-subtitle-text-sm {
	font-family: Lamplighter Script Regular;
	font-size: 2em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-subtitle-text-md {
	font-family: Lamplighter Script Regular;
	font-size: 2.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
.home-subtitle-text-lg {
	font-family: Lamplighter Script Regular;
	font-size: 4.5em;
	color: #fbfe2e;
	text-shadow: 0 0 5px #ff3503;
}
</style>