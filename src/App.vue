<template>
  <v-app>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>

              <router-view></router-view>

            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


        <v-layout>
          <transition-group name="slide-fade"  > 
          <v-flex xs6  v-for="flyout in flyouts" :key="'name'">
            <v-card>
                <component keep-alive :is="flyout" transition="slide-fade"></component>
            </v-card>
          </v-flex>
          </transition-group>
        </v-layout>



        

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>



  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      window.setInterval(() => {
        this.show = !this.show
      }, 3000)
    }, 
    data () {
      return {
        show: false,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    methods: {
      ...mapActions([
      ])
    }, 
    computed: { 
      ...mapGetters([
        'visible',
        'flyouts'
      ])
    }
  }

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .5s; }

.slide-fade-leave-active {
  transition: all .5s;
  /* cubic-bezier(1.0, 0.5, 0.8, 1.0);*/ }

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(500px);
  opacity: 0; }

.flyout {
  border: 1px solid #000;
}






</style>