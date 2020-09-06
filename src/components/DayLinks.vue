<template>
	<v-container class="small-text">
		<v-row>
			<v-col class="text-center">
				<router-link class="pa-2" to="/DayOne">
					Day 1 - Tennessee
				</router-link>
				<router-link class="pa-2" to="/DayTwo">
					Day 2 - Washington D.C.
				</router-link>
				<router-link class="pa-2" to="/DayThree">
					Day 3 - Missouri
				</router-link>
				<router-link class="pa-2" to="/DayFour">
					Day 4 - South Pacific
				</router-link>
				<router-link class="pa-2" to="/DayFive">
					Day 5 - Rome, Italy
				</router-link>
				<router-link class="pa-2" to="/DaySix">
					Day 6 - Los Angeles
				</router-link>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {

	}
</script>

<style scoped>
.small-text {
	font-size: .8em;
}
</style>