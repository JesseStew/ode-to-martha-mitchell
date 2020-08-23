<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col class="text-center" cols="12">
          <h1 class="pb-10">
            Home
          </h1>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-card-title>
              Index
            </v-card-title>
            <v-treeview
              dense
              :items="items"
              v-model="tree"
              :open="open"
              activatable
              item-key="name"
              open-on-click
            ></v-treeview>
          </v-card>
        </v-col>
        <v-col cols="9">
          <p class="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius morbi. Mollis aliquam ut porttitor leo a diam sollicitudin. Nibh sed pulvinar proin gravida hendrerit lectus. Tincidunt ornare massa eget egestas purus. Praesent semper feugiat nibh sed pulvinar proin. Maecenas ultricies mi eget mauris pharetra et. Diam sollicitudin tempor id eu nisl nunc. Vitae et leo duis ut diam quam nulla porttitor massa. Faucibus et molestie ac feugiat sed lectus vestibulum.
          </p>
          <p class="px-5">
            Sed pulvinar proin gravida hendrerit lectus a. Integer quis auctor elit sed. Blandit libero volutpat sed cras ornare arcu. Non nisi est sit amet facilisis magna etiam tempor. Turpis egestas pretium aenean pharetra. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Ullamcorper malesuada proin libero nunc consequat interdum. Malesuada proin libero nunc consequat interdum. Ullamcorper a lacus vestibulum sed arcu. Sed enim ut sem viverra aliquet eget. Nec ultrices dui sapien eget. Non quam lacus suspendisse faucibus interdum posuere.
          </p>
          <p class="px-5">
            Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Mi bibendum neque egestas congue quisque egestas diam in. Morbi non arcu risus quis varius quam quisque. Sed viverra tellus in hac habitasse platea dictumst. Vel eros donec ac odio tempor orci. Pharetra magna ac placerat vestibulum lectus mauris. Mi eget mauris pharetra et ultrices neque ornare aenean. Semper eget duis at tellus at urna condimentum. Egestas congue quisque egestas diam in arcu. Semper quis lectus nulla at volutpat diam ut venenatis. Egestas erat imperdiet sed euismod. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Pellentesque elit eget gravida cum sociis natoque penatibus. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.
          </p>
          <p class="px-5">
            Porttitor rhoncus dolor purus non enim praesent elementum. Quisque id diam vel quam. Nam libero justo laoreet sit amet cursus sit. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sed nisi lacus sed viverra tellus. Sed odio morbi quis commodo odio aenean sed. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Morbi blandit cursus risus at. Et egestas quis ipsum suspendisse ultrices gravida dictum. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.
          </p>
          <p class="px-5">
            Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Curabitur gravida arcu ac tortor. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. In nisl nisi scelerisque eu. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Morbi tempus iaculis urna id volutpat lacus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Eget dolor morbi non arcu risus quis varius. Amet consectetur adipiscing elit ut aliquam purus. Sed libero enim sed faucibus turpis in eu mi. Phasellus egestas tellus rutrum tellus pellentesque. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Amet tellus cras adipiscing enim eu. Aliquet enim tortor at auctor urna nunc id cursus. Pharetra massa massa ultricies mi quis hendrerit dolor. Ac feugiat sed lectus vestibulum mattis ullamcorper. Nunc faucibus a pellentesque sit. Aliquet enim tortor at auctor urna nunc id cursus metus. Feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <p class="px-5">
            Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Enim nunc faucibus a pellentesque. Lobortis elementum nibh tellus molestie nunc non blandit massa. In nibh mauris cursus mattis molestie a iaculis at erat. Sed euismod nisi porta lorem. Odio ut sem nulla pharetra diam. Non arcu risus quis varius quam. Lectus mauris ultrices eros in cursus turpis. Quisque id diam vel quam elementum pulvinar etiam. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Nibh praesent tristique magna sit amet purus gravida quis blandit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Enim facilisis gravida neque convallis a. Rhoncus urna neque viverra justo nec ultrices dui sapien. Turpis egestas maecenas pharetra convallis posuere. Augue lacus viverra vitae congue eu consequat ac. Nunc non blandit massa enim nec dui nunc. Tristique risus nec feugiat in fermentum posuere urna nec.
          </p>
          <h2 id="linkToTitle">
            Link to Title
          </h2>
          <p class="px-5">
            Viverra orci sagittis eu volutpat odio facilisis. Faucibus pulvinar elementum integer enim. Ac feugiat sed lectus vestibulum mattis ullamcorper. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ullamcorper sit amet risus nullam eget felis eget. Tincidunt dui ut ornare lectus sit amet est. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Blandit aliquam etiam erat velit scelerisque in dictum non. Massa sed elementum tempus egestas sed sed risus pretium. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nisl nunc mi ipsum faucibus vitae aliquet. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Quisque id diam vel quam elementum pulvinar. Curabitur gravida arcu ac tortor dignissim. Sollicitudin nibh sit amet commodo nulla. Quis vel eros donec ac odio tempor.
          </p>
          <p class="px-5">
            Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Velit egestas dui id ornare arcu. Consectetur adipiscing elit duis tristique. Odio facilisis mauris sit amet massa vitae. Quis vel eros donec ac odio tempor orci dapibus ultrices. Habitant morbi tristique senectus et netus et malesuada fames ac. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Purus in mollis nunc sed id semper risus. Egestas diam in arcu cursus euismod quis viverra. Ac odio tempor orci dapibus ultrices in iaculis. Erat imperdiet sed euismod nisi. Aenean et tortor at risus viverra. Facilisis leo vel fringilla est ullamcorper. Aliquet risus feugiat in ante metus dictum. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
          </p>
          <p class="px-5">
            Amet volutpat consequat mauris nunc congue nisi vitae. Elementum eu facilisis sed odio morbi. Arcu odio ut sem nulla pharetra diam sit amet nisl. Augue ut lectus arcu bibendum at varius. Diam maecenas ultricies mi eget mauris. Sit amet venenatis urna cursus eget nunc scelerisque. Maecenas pharetra convallis posuere morbi leo urna. Sed velit dignissim sodales ut eu sem. Sit amet porttitor eget dolor morbi non. Pharetra sit amet aliquam id diam maecenas ultricies mi. Turpis massa tincidunt dui ut. Tortor aliquam nulla facilisi cras fermentum odio. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quisque non tellus orci ac auctor augue mauris. Quis ipsum suspendisse ultrices gravida dictum fusce. Tincidunt id aliquet risus feugiat. Tortor at auctor urna nunc id cursus metus aliquam. Cursus metus aliquam eleifend mi.
          </p>
          <p class="px-5">
            Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Erat imperdiet sed euismod nisi porta. Ut aliquam purus sit amet luctus venenatis lectus magna. Malesuada bibendum arcu vitae elementum curabitur. Ornare massa eget egestas purus viverra. Neque aliquam vestibulum morbi blandit cursus risus at. Risus sed vulputate odio ut enim. Sit amet massa vitae tortor condimentum lacinia quis. Suspendisse sed nisi lacus sed viverra tellus. Vitae aliquet nec ullamcorper sit amet risus nullam. Volutpat sed cras ornare arcu dui vivamus arcu felis. Morbi tristique senectus et netus et. Nibh praesent tristique magna sit amet purus gravida quis blandit. Id nibh tortor id aliquet lectus proin nibh nisl. Mattis nunc sed blandit libero volutpat sed. Metus aliquam eleifend mi in nulla posuere. Mauris in aliquam sem fringilla ut morbi. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ut diam quam nulla porttitor.
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
