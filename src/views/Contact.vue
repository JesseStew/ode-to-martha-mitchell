<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 v-if="$vuetify.breakpoint.smAndUp" class="band-color-blue interview-title">
					Contact &amp; Acknowledgements
				</h1>
				<h1 v-else class="band-color-blue interview-title-sm">
					Contact &amp; Acknowledgements
				</h1>
			</v-col>
			<v-col cols="12" sm="6">
				<h3>The Martha Team is:</h3>
				<p class="px-5">
					<span style="font-weight: bold;">H.L.</span> Interviewer<br />
					<span style="font-weight: bold;">L.A. Sean:</span> Content Editor/General Editor<br />
					<span style="font-weight: bold;">Mountain Crimp Jesse:</span> Lead Developer/ Web and Concept Design/Final Proofread<br />
					<span style="font-weight: bold;">Miss Keli:</span> Lead Graphic Artist/ Assistant Web Developer/Lead Photographer<br />
					<span style="font-weight: bold;">Southpark Mike:</span> Lead Artist/ Graphic Artist/ Original Artwork Creation<br />
					<span style="font-weight: bold;">Pastor Stacey:</span> Secondary Web Development, Conceptualization<br />
					<span style="font-weight: bold;">Expecting Mystica:</span> Editorial Assistant <br />
					<span style="font-weight: bold;">TiTi Tracy:</span> Production Assistant / Photographer<br />
					<span style="font-weight: bold;">Virginia Mollie:</span> Transportation/ Production Assistant<br />
					<span style="font-weight: bold;">Good Matthew:</span> Web Assistant<br />
					<span style="font-weight: bold;">Dealing Dan:</span> Talent Acquisition<br />
					<span style="font-weight: bold;">Radio Dave:</span> Audio Consultant<br />

					<span style="font-weight: bold;">Professor Filip:</span> Languages/ Interpretations<br />
					<span style="font-weight: bold;">Boss Potter:</span> Completion Financing<br />
					<span style="font-weight: bold;">Professor Erna:</span> Languages/ Grammar
				</p>
			</v-col>
			<v-col cols="12" sm="6">
				<p class="pa-5">
					To inquire about any one of these talented individuals above contact
					us directly here at TheTheorem.org through our secure email.
					Also for General Inquiries, Comments, Corrections or Suggestions.
					<!-- here, fix protonmail -->
					<a href="mailto:thetheorem@protonmail.com">thetheorem&#64;&#112;&#114;otonmail&#46;&#99;om</a>
				</p>

				<h3 class="px-5">
					TIPLINE
				</h3>
				<p class="px-5">
					If you feel in any way you have been targeted for your interest in The Theorem or in <span class="italic">The Legacy Letter</span> contact us at the Tipline.
				</p>
				<p class="px-5">
					<a href="mailto:thetheorem@protonmail.com">thetheorem&#64;&#112;&#114;otonmail&#46;&#99;om</a>
				</p>
				<p class="px-5">
					All correspondence will be 100 percent confidential. No Exceptions.
				</p>
				<p class="px-5">
					Or you can contact Douglas directly by phone or text +1.310.427.4896
				</p>
				<p class="px-5">
					Permissions &amp; Legal contact:
					<a href="mailto:thetheorem@protonmail.com">thetheorem&#64;&#112;&#114;otonmail&#46;&#99;om</a>
					Complete Interview and Website:
					<span class="bold">© Copyright 2020 Battle Born/ Maryland Parkway Productions/ All Rights Reserved</span>
				</p>
			</v-col>
			<v-col cols="12">
				<p class="px-5">
					While all team leaders feel their team is special, this group of hard-working, mostly young people were particularly devoted to this work. Many of these brave individuals also put their personal safety at risk to accomplish this project. So proud of them.
				</p>
			</v-col>
			<v-col class="text-h6 text-center" cols="12">
				<p style="
					margin-top: -20px;
					font-size: .9em;
				" class="px-5">
					Thank you so very much;<br />
					Douglas
				</p>
			</v-col>
			<v-col class="text-h5 text-center" cols="12">
				<p class="px-5 bold">
					Dit boek is opgedragen aan Karin en onze kinderen.
				</p>
			</v-col>
			<v-col cols="12">
				<v-img class=".ml-auto" :src="require('../assets/images/headshot.jpg')" :lazy-src="require('../assets/images/headshot_lazy.jpg')">
				</v-img>
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