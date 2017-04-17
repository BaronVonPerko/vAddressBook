<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-heading">New Person</div>

                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" class="form-control" id="firstName">
                            </div>

                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" class="form-control" id="lastName">
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="text" class="form-control" id="phone">
                            </div>

                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                        </form>

                        <button class="btn btn-primary">Save</button>
                        <button class="btn" @click="showAddressBook()">Cancel</button>
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
            showAddressBook() {
                window.location.pathname = '/myBook';
            }
        },

        mounted() {
        }
    }
</script>
