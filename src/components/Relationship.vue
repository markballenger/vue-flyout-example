<template>
<div>
    <h1>Relationship</h1>
    <v-btn @click="go()">Open Flyout </v-btn>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Hello from '@/components/Hello'
export default { 
    
    data () {
        return { }
    },
    methods: {
        ...mapActions([
            'setVisible',
            'addFlyout',
            'toggle'
        ]),
        go () {
            this.addFlyout(Hello)
        }
    },
    computed: {
        ...mapGetters(['visible'])
    }
}
</script>

<style>
</style>