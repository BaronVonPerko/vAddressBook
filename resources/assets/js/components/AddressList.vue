<template>
    <div>
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
                    <td>{{person.firstName}}</td>
                    <td>{{person.lastName}}</td>
                    <td>{{person.phone}}</td>
                    <td>{{person.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                people: [
                    {firstName: 'Chris', lastName: 'Perko', phone: '828.776.9320', email: 'chris@chrisperko.net'},
                    {firstName: 'Veronica', lastName: 'Perko', phone: '864.541.1059', email: 'roni835@gmail.com'},                
                ]
            };
        },

        mounted() {
        }
    }
</script>
