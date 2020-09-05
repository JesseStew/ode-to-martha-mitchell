<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 v-if="$vuetify.breakpoint.smAndUp" class="band-color-blue interview-title">
					World Suicide Hotlines
				</h1>
				<h1 v-else class="band-color-blue interview-title-sm">
					World Suicide Hotlines
				</h1>
			</v-col>
			<v-col cols="6">
				<p>
					<span class="bold">Australia</span><br />
					Lifeline <a target="_blank" href="https://www.lifeline.org.au/">www.lifeline.org.au</a><br />
					Tel 13 11 14
				</p>
				<p>
					<span class="bold">Belgium Centre de Prevention de Suicide</span><br />
					<a target="_blank" href="https://www.preventionsuicide.be/">www.preventionsuicide.be</a><br />
					Hotline 0800 32 123
				</p>
				<p>
					<span class="bold">Brazil CVV Org</span><br />
					<a target="_blank" href="https://www.cvv.org.br/">www.cvv.org.br</a><br />
					Tel 188
				</p>
				<p>
					<span class="bold">Canada</span><br />
					Crisis Services Canada<br />
					Tel 1 833 456 4566<br />
					<a target="_blank" href="https://www.crisisservicescanada.ca/en/">www.crisisservicescanada.ca</a><br />
					Distress Centres <a target="_blank" href="http://www.dcontario.org/">www.dcontario.org</a><br />
					Suicide Action Montreal<br />
					Tel 514 723 4000
				</p>
				<p>
					<span class="bold">China Beijing</span><br />
					Suicide Research and Prevention Hotline Tel Free 0800 810 1117<br />
					Cell Users 010 8295 1332<br />
					<!-- here, not working correctly -->
					<a target="_blank" href="www.crisis.org.cn">www.crisis.org.cn</a><br />
					Lifeline Shanghai (0433) 273 9595<br />
					<a target="_blank" href="www.lifelineshanghai.org">www.lifelineshanghai.org</a>
				</p>
				<p>
					<span class="bold">England</span><br />
					Samaritans<br />
					<a target="_blank" href="https://www.samaritans.org/">www.samaritans.org</a>/<br />
					Tel 116.123 National Helpline Tel 111 (Option 2)
				</p>
				<p>
					<span class="bold">France</span><br />
					SOS Help<br />
					Hotline 01 46 21 46 46<br />
					Suicide Ecoute<br />
					<a target="_blank" href="https://suicideecoute.pads.fr/accueil">suicideecoute.pads.fr/accueil</a> Hotline 01 45 39 40 00
				</p>
				<p>
					<span class="bold">Germany</span><br />
					International Website Helpline Telefonseelsorge<br />
					Deutschland National Hotline 0800 1110 111 or 0800 1110 222<br />
					<a target="_blank" href="https://www.telefonseelsorge.de/">www.Telefonseelsorge.org</a>
				</p>
				<p>
					<span class="bold">Ireland</span><br />
					Mental Health Ireland<br />
					<a target="_blank" href="https://www.mentalhealthireland.ie/">www.mentalhealthireland.ie</a><br />
					Tel 01 284 1166
				</p>
				<p>
					<span class="bold">Israel</span><br />
					Tel 1201<br />
					<a target="_blank" href="http://www.1201.org.il/">www.1201.org.il</a> <br /> <a target="_blank" href="https://www.eran.org.il/">www.Eran.org.il</a><br />
					Tel 972-98891333
				</p>
				<p>
					<span class="bold">Italy</span><br />
					Pevenire il Suicido<br />
					<a target="_blank" href="https://www.preveniresuicid.eu/home/">https://www.preveniresuicid.eu</a> <br />Samartans ONLUS<br />
					Tel 800 86 00 22
				</p>
				<p>
					<span class="bold">Japan</span><br />
					Befrienders Worldwide Osaka Suicide Prevent Center<br />
					<a target="_blank" href="http://www.spc-osaka.org/">www.spc-osaka.org</a><br /> 06-6260-4343
				</p>
			</v-col>
			<v-col cols="6">
				<p>
					<span class="bold">Hong Kong</span><br />
					Samaritans Hong Kong<br />
					<a target="_blank" href="https://samaritans.org.hk/">www.samaritans.org.hk</a><br />
					Tel 2896 0000
				</p>
				<p>
					<span class="bold">Kenya</span><br />
					Befrienders Kenya<br />
					<a target="_blank" href="http://www.befrienderskenya.org/">www.befrienderskenya.org</a><br />
					Tel 254722178177
				</p>
				<p>
					<span class="bold">Netherlands</span><br />
					113 Online<br />
					<a target="_blank" href="https://www.113.nl/">www.113.nl</a><br />
					Tel 113 or 0800 0113
				</p>
				<p>
					<span class="bold">Nigeria</span><br />
					Nigerian Suicide Prevention initiative Counseling Centers<br />
					Tel 234 806 210 6493<br />
					Tel 234 809 210 6493
				</p>
				<p>
					<span class="bold">Norway</span><br />
					Kirkens SOS<br />
					Tel 22 40 00 40<br />
					<a target="_blank" href="https://www.kirkens-sos.no/">www.kirkens-sos.no</a>
				</p>
				<p>
					<span class="bold">Russia</span><br />
					Samaritans-Cherepovets<br />
					Tel 007 (8202) 577 577
				</p>
				<p>
					<span class="bold">Scotland</span><br />
					Samaritans<br />
					Tel 116 123<br />
				</p>
				<p>
					<span class="bold">South Africa</span><br />
					Befrienders South Africa<br />
					Tel 51 444 5691<br />
				</p>
				<p>
					<span class="bold">Sweden</span><br />
					National Helpline<br />
					Tel 0771 220060<br />
					Tel 020 22 00 60<br />
					Tel (46) 31 711 2400
				</p>
				<p>
					<span class="bold">Switzerland</span><br />
					Parspas Hotline 027 321 21 21<br />
					<a target="_blank" href="www.parspas.ch">www.parspas.ch</a><br />
				</p>
				<p>
					<span class="bold">United States of America</span><br />
					National Suicide Prevention Lifeline<br />
					Tel 1 800 273 8255 Tel 1 800 784 2433<br />
					<a target="_blank" href="https://suicidepreventionlifeline.org/">www.suicidepreventionlifeline.org</a>
				</p>
				<p>
					<span class="bold">Ukraine</span><br />
					Lifeline Ukraine<br />
					Tel 7333<br />
					<a target="_blank" href="https://lifelineukraine.com/">lifelineukraine.com</a><br />
				</p>
			</v-col>
			<v-col class="12">
				<p class="bold">
					<span
						style="
							font-size: 1.3em;
						">Note:</span> All phone numbers are within country calling, unless otherwise specified. If you have another country, resource number or Site not listed please inform us and we will do the best we can to add it in a timely manner. The same with corrections: email <a target="_blank" href="mailto:Suicidelines@thetheorem.org">Suicidelines@thetheorem.org</a> Special thank you to all the giving souls who work the hotlines worldwide; truly, you are our heroes.
				</p>
				<p class="bold">
					<span
						style="
							font-size: 1.3em;
						">Disclaimer:</span> This list is only a general guide and not intended as a substitute for your local suicide prevention resource.
				</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {

	}
</script>

<style scoped>

</style>