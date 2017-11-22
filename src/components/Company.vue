<template>
    <div>
        <v-layout row>
            <h1>Company</h1>
        </v-layout>
        <v-layout row>
            <v-btn @click="back()">Back</v-btn>
        </v-layout>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default { 
    name: 'company',
    methods: {
        ...mapActions([
            'back'
        ])
    }
}
</script>
