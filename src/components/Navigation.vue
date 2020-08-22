<template>
	<v-container fluid>
		<v-row dense>

				<img
					src="../assets/home/cabin-cool.jpg"
					style="
						max-width: 100%;
						object-fit: cover;
					"
				/>

		</v-row>
		<v-row dense>

				<v-navigation-drawer
					expand-on-hover
					permanent
				>
					<v-list
						dense
						nav
						class="py-0"
					>
						<v-list-item class="px-0">
							<v-list-item-avatar>
								<img src="https://randomuser.me/api/portraits/women/10.jpg">
							</v-list-item-avatar>

							<v-list-item-content>
								<v-list-item-title>Application</v-list-item-title>
								<v-list-item-subtitle>Subtext</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-divider></v-divider>

						<v-list-item
							v-for="item in items"
							:key="item.title"
							link
						>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-navigation-drawer>

		</v-row>

		<!-- <v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar> -->
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			drawer: false,
      pages: [
        {
          src: '../assets/home/cabin-cool.jpg',
          title: 'Home',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Legacy Letter',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Intro',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Day One',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Day Two',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Day Three',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Day Four',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Day Five',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Day Six',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Time Line',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Help Lines',
        },
        {
          src: '"../assets/home/cabin-cool.jpg"',
          title: 'Contact',
        },
      ],
    }),
	}
</script>

<style scoped>

</style>