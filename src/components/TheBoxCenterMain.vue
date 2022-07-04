<template>
    <div>
        <div class="box-video">
            <div class="box-img">
                <img :src="src" alt="logo palestra">
                <div class="circle">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="text-video">
                <h5>{{title}}</h5>
                <small>{{subTitle}}</small>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'TheBoxCenterMain',
    props: {
        src: String,
        title: String,
        subTitle: String
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';

.box-img {
    border-bottom-right-radius: 2.1875rem;
    overflow: hidden;
    position: relative;

    .circle {
        background-color: $ColorLight;
        height: 3.125rem;
        width: 3.125rem;
        position: absolute;
        .fa-play {
            font-size: .9375rem;
            left: 1.25rem;
            bottom: 1.25rem;
        }
    }

}
.text-video {
    text-align: center;
    padding-top: .9375rem;

    h5 {
        font-size: 1rem;
        font-weight: 400;
        padding-bottom: .3125rem;
    }

    small {
        color: $ColorSecondary;
    }
}

</style>