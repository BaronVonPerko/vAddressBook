<template>
    <div>
        <div v-if="loaded">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in people">
                        <td>{{person.first_name}}</td>
                        <td>{{person.last_name}}</td>
                        <td>{{person.phone}}</td>
                        <td>{{person.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="!loaded" class="loading-message">Loading... Please Wait</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                people: [],
                loaded: false
            };
        },

        mounted() {
            this.$http.get('/api/address').then(function(res) {
                this.people = res.body;
                this.loaded = true;
            });
        }
    }
</script>


<style scoped>
.loading-message {
    text-align: center;
    margin: 50px auto;
}
</style>