<template>
    <div>
        <button class="btn btn-primary" @click="showForm()" v-if="!newFormShown">New</button>
        <button class="btn btn-primary" v-if="newFormShown">Save</button>     
        <button class="btn" @click="showAddressBook()" v-if="newFormShown">Cancel</button>                   
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },

        props: ['showForm', 'newFormShown', 'showAddressBook'],

        methods: {
        },

        mounted() {
        }
    }
</script>
