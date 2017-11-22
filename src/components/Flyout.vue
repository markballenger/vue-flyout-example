<template>
    <v-navigation-drawer
      temporary
      
      v-model="drawer"
      light
      permanent
    >
      <v-card>
          <slot></slot>
      </v-card>
      
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'flyout',
    data () {
        return {
            drawer: true
        }
    }
}
</script>
