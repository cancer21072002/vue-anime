<template>
    <div>
        <!-- Page Preloder -->
        <div id="preloder">
            <div class="loader"></div>
        </div>
    
        <!-- Hero Section Begin -->
        <Slider />
        <!-- Hero Section End -->
    
        <!-- Product Section Begin -->
        <section class="product spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <TrendingProduct />
                       <PopularProduct />
                        <RecentProduct />
                        <LiveProduct />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8">
                        <TopViewAndNewComment />
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Section End -->
    
    </div>
</template>

<script setup>
import TrendingProduct from '../components/TrendingProduct.vue';
import PopularProduct from '../components/PopularProduct.vue';
import RecentProduct from '../components/RecentProduct.vue';
import LiveProduct from '../components/LiveProduct.vue';
import TopViewAndNewComment from '../components/TopViewAndNewComment.vue';
import Slider from '../components/Slider.vue';
export default {
    components: { Slider, TrendingProduct, PopularProduct, RecentProduct, LiveProduct, TopViewAndNewComment },
};
</script>

<style lang="scss" scoped>

</style>