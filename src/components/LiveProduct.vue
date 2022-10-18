<template>
    <div>
        <div class="live__product">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8">
                                    <div class="section-title">
                                        <h4>Live Action</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="btn__all">
                                        <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6" v-for="(item,index) in LiveAction" :key="index">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" :data-setbg ="img/live/item.img">
                                            <div class="ep">18 / 18</div>
                                            <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                            <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                        </div>
                                        <div class="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">{{item.name}}</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

    </div>
</template>

<script>
export default{
    data(){
        return{
            LiveAction:[
                {
                    img: "live-1.jpg",
                    name: "Shouwa Genroku Rakugo Shinjuu"
                },
                {
                    img: "live-2.jpg",
                    name: "Mushishi Zoku Shou 2nd Season"
                },
                {
                    img: "live-3.jpg",
                    name: "Mushishi Zoku Shou: Suzu no Shizuku"
                },
                {
                    img: "live-4.jpg",
                    name: "The Seven Deadly Sins: Wrath of the Gods"
                },
                {
                    img: "live-5.jpg",
                    name: "Fate/stay night Movie: Heaven's Feel - II. Lost"
                },
                {
                    img: "live-6.jpg",
                    name: "Kizumonogatari II: Nekketsu-hen"
                }
            ]
        }
    }
}
</script>

<style>

</style>