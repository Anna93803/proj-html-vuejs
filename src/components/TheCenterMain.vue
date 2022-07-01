<template>
    <div class="center-main">
        <div class="row">
            <div class="col">
                <div class="img-service">
                    <img src="/img/service15-2x.jpg" alt="img">
                    <div class="circle">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="col">
                <h6>Tune up your workouts</h6>
                <h3>The best health & fitness advice online</h3>
                <div class="fusion">
                    <div class="img-fusion">
                        <img src="/img/unnamed.jpg" alt="">
                    </div>
                    <div>
                        <small>ThemeFusion</small>
                        <div class="box">
                            <a href="#"><i class="fa-brands fa-youtube"></i> YuoTube </a>
                            <span>999+</span>
                        </div>
                    </div>
                </div>
                <p>Arcu eu facilisi ut quisque placerat nunc habitant.Magna semper mauris,venenatis, leo integer sit pellentesque.</p>
                <button class="btn btn-red"><a href="#"><i class="fa-brands fa-youtube"></i> Visit my YuoTube channel</a></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCenterMain',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';

.center-main {
    .row {
        display: flex;
        align-items: center;
    
        .img-service {
            width: 85%;
            position: relative;
            bottom: 2.5rem;
            border-bottom-right-radius: 2.1875rem;
            overflow: hidden;
    
            img {
                width: 100%;
            }

            .circle {
                background-color: $ColorLight;
                height: 80px;
                width: 80px;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                .fa-play {
                    color: $ColorSecondary;
                    position: absolute;
                    left: 2.0625rem;
                    bottom: 1.9375rem;
                    font-size: 1.25rem;
                }
            }
        }
    
        .col {
            width: 50%;
    
            h6 {
                font-size: 1rem;
                color: $ColorSecondary;
                font-weight: 400;
            }
    
            h3 {
                font-size: 3.1875rem;
                padding: 1.5625rem 0;
                word-break: break-all;
                width: 64%;
                font-weight: 400;
            }
    
            .fusion {
                display: flex;
                gap: 10px;
                align-items: center;
                .img-fusion {
                    width: 45px;
                    height: 45px;
    
                    img {
                        width: 100%;
                    }
                }
    
                .box {
                    display: flex;
    
                    a {
                        color: $ColorLight;
                        background-color: $ColorTerzary;
                        padding: 4px;
                    }
    
                    span {
                        border: 1px solid $ColorText;
                        text-align: center;
                        font-size: 12px;
                        padding: 4px;
                    }
                }
            }
    
            p {
                padding: 25px 0;
                color: $ColorText;
                word-break: break-all;
                width: 64%;
            }
    
            a {
                color: $ColorLight;
            }
        }
    }
}

</style>