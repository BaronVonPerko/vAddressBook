<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Address Book</div>

                    <div class="panel-body">
                        <top-buttons 
                            :newFormShown="newFormShown" 
                            :showForm="showNewForm"
                            :showAddressBook="showAddressBook"></top-buttons>
                        <new-person-form v-if="newFormShown"></new-person-form>
                        <address-list v-if="!newFormShown"></address-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newFormShown: false
            }
        },

        methods: {
            showNewForm() {
                this.newFormShown = true;
            },

            showAddressBook() {
                this.newFormShown = false;
            }
        },

        mounted() {
        }
    }
</script>
