<template>
	<div>
		<v-app-bar
			src="../assets/home/cabin-cool.jpg"
			height="500"
			dark
			prominent
			shrink-on-scroll
			scroll-target="#scrolling-techniques-2"
		>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<v-toolbar-title class="pa-15">An Ode to Martha Mitchell</v-toolbar-title>

			<template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
					<v-tab>{{imgSrc}}</v-tab>
        </v-tabs>
      </template>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			dark
		>
			<v-list-item-group>
				<v-list-item>
					<v-img :src="imgSrc"></v-img>
					{{imgSrc}}
				</v-list-item>
				<v-list-item :to="page.path" v-for="page in pages" :key="page.id">
					<!-- {{ page }} -->
					<v-list-item-icon>
						<v-icon>
							{{ page.icon }}
						</v-icon>
					</v-list-item-icon>
					<v-list-item-title>
						{{ page.title }}
					</v-list-item-title>
				</v-list-item>
			</v-list-item-group>
		</v-navigation-drawer>
	</div>
</template>

<script>
	export default {
		data: () => ({
			drawer: false,
      pages: {
        Home: {
					src: '../assets/home/cabin-cool.jpg',
					name: 'Home',
					path: '/',
          title: 'Home',
        },
        LegacyLetter: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'LegacyLetter',
					path: '/legacy-letter',
          title: 'Legacy Letter',
        },
        Intro: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'Intro',
					path: '/intro',
          title: 'Intro',
        },
        DayOne: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'DayOne',
					path: '/day-one',
          title: 'Day One',
        },
        DayTwo: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'DayTwo',
					path: '/day-two',
          title: 'Day Two',
        },
        DayThree: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'DayThree',
					path: '/day-three',
          title: 'Day Three',
        },
        DayFour: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'DayFour',
					path: '/day-four',
          title: 'Day Four',
        },
        DayFive: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'DayFive',
					path: '/day-five',
          title: 'Day Five',
        },
        DaySix: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'DaySix',
					path: '/day-six',
          title: 'Day Six',
        },
        TimeLine: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'TimeLine',
					path: '/time-line',
          title: 'Time Line',
        },
        HelpLines: {
					src: '"../assets/home/cabin-cool.jpg"',
					name: 'HelpLines',
					path: '/help-lines',
          title: 'Help Lines',
        },
        Contact: {
					src: '"../assets/home/contact.jpg"',
					name: 'Contact',
					path: '/contact',
          title: 'Contact',
        },
			},
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