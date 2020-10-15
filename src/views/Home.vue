<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col class="text-center" cols="12">
          <h1 v-if="$vuetify.breakpoint.smAndUp" class="band-color-blue interview-title">
            An Ode to Martha Mitchell*
          </h1>
          <h1 v-else class="band-color-blue interview-title-sm">
            An Ode to Martha Mitchell*
          </h1>
          <h2 style="color: #963027; font-size: 1.6em" class="pb-5 px-5">
            Headwaters to COVID-19, Impeachment and Murder
          </h2>
        </v-col>
        <v-col
          style="color: black;"
         class="home-text" cols="12">
          <p
          style="
            margin-top: 20px;
          " class="px-15">
            What you are about to experience is the disentanglement of one the largest scandals and cover-ups the world has ever known. It is, in fact, so large that all others substantially pale in comparison.
          </p>
          <p class="px-15">
          The cover-up involves three (3) U.S. Presidents, Senators, House Members, Governors, Mayors and hundreds of elected officials. Yet, this is only the beginning, as it encompasses at least 15 leaders of foreign countries, celebrities; actors, musicians, athletes and this again, is only the start.
          </p>
          <p class="px-15">
          Ultimately, the focus of this scandal centers on the wealthy elite; the financial ruling class, the men and women behind the scenes who pull the strings and make our world dance in the name of progress. It involves hundreds of billionaires; countless ultra high-net-worth individuals, thousands of CEOs, board members and chairmen who anchor up the companies that keep our world in motion.
          </p>
          <p class="px-15">
          It is an event so large and so encompassing that mere conventional investigation tactics will not suffice; parochial probes fail to illuminate what we are really attempting to define, as we will only hit dead end after dead end if we attempt them.
          </p>
          <p class="px-15">
          It is a scandal so massive, and of such breadth, yet so deeply hidden below the surface of our current reality that the only way to come to a conclusion, to truly understand the scope of what this is really about, is to cut a few slices out of the cake and examine those slices so thoroughly that it will border on an obsessional devotion to detail. Yes, we have to dive to those depths within the microcosm to understand the macrocosm of this mess that currently defines our world.
          </p>
          <p class="px-15">
          It will be an uneven journey as well, as there will be times throughout this relentless trek when you will be sure what you are reading is irrelevant, but they are mere breaks in this six section symphony to allow your senses to catch up, to allow for the trauma to take hold, the one we will experience together, the one I will re-experience with you.
          </p>
          <p class="px-15">
          My name is Douglas M. Arone and I will be your guide; playing dual roles as victim and vindicator with such exhausted enthusiasms that you will wonder why I even continue. You will often wonder why I do not just quit and die. The reason that I continue of course is because of you, because of us. I feel as hard as it is for all of us to feel this way; somehow it is worth it, the ninety percent of subtle misery for the ten percent of obvious euphoric pleasure. Yes, I have continued for you, so I ask over the next few hours or days, that you do the same for me.
          </p>
          <p class="px-15">
          The source of the scandal has its origins in 2014, with a letter I composed and sent to the thousands of the most powerful and wealthy individuals in the world; the letter was entitled <span class="italic">The Legacy Letter</span>. The purpose of this letter was to obtain funding for my 2006 book entitled, <span class="italic">The Theorem: A Complete Answer to Human Behavior</span>, which itself was based on a discovery made all the way back in 1994.
          </p>
          <p class="px-15">
          While this interview is yours to read in any manner you desire, I would highly recommend that you start with me at the beginning, the cornerstone of the cover-up, with <span class="italic">The Legacy Letter</span>, linked below.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Subtitles :',
          children: [
            { id: 2,
              name: 'Link to Title',
              link: '#linkToTitle'
            },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        }
      ]
    }
  },
  components: {}
}
</script>
