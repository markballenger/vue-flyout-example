<template>
<div>
    <h1>Relationship</h1>
    <v-btn @click="go()">Open Flyout </v-btn>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import Hello from '@/components/Hello'
export default { 
    
    data () {
        return { }
    },
    methods: {
        ...mapActions([
            'addFlyout'
        ]),
        go () {
            this.addFlyout(Hello)
        }
    }
}
</script>

<style>
</style>