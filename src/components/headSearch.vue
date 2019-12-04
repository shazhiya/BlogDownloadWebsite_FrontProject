<template>
    <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
    ></el-autocomplete>
</template>

<script>
    export default {
        name: "headSearch",
        data() {
            return {
                restaurants: [],
                state: '',
                timeout:  null
            };
        },
        methods: {
            loadAll() {
                return [
                    { "value": "Java"},
                    { "value": "Python"},
                    { "value": "C/C++"},
                    { "value": "Vue/VueCLI" },
                    { "value": "C#"},
                    { "value": "Nodejs" },
                    { "value": "大数据" },
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 500 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                window.console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    };
</script>

<style scoped>

</style>