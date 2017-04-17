<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Address Book</div>

                    <div class="panel-body">
                        <button class="btn btn-primary" @click="showNewPersonForm()">
                            New
                        </button>
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
            }
        },

        methods: {
            showNewPersonForm() {
                window.location.pathname = '/myBook/new';
            }
        },

        mounted() {
        }
    }
</script>
