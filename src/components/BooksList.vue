<template>
    <div>
        <div class="book" v-for="(book, index) in books" :key="index">
            {{book.title}}
            <span @click="edit(book, index)">Edit</span>
        </div>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        name: "BooksList",
        data() {
            return {
                books: [],
            };
        },
        mounted() {
            axios
                .get('http://localhost:3004/books', {headers: {'x-auth-token': 'bad18eba1ff45jk7858b8ae88a77fa30'}})
                .then(
                    response => (
                        (this.books = response.data)
                    )
                )
                .catch(error => console.log(error));
        },
        methods: {
            edit (book, index) {
                this.$router.push({name: 'Book', params: {id: book.id, book: book}})
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .book {
        text-align: left;
        padding: 10px 25px;
    }
</style>