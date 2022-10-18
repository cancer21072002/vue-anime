<template>
  <div>
    <Header />
    <router-view />
    <Footer />
    <SearchModel />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SearchModel from "./components/SearchModel.vue";
export default {
  components: {
    Header,
    Footer,
    SearchModel
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
