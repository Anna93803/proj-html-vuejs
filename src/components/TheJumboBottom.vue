<template>
    <div class="bg-jumbo">
        <div class="overlay">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="circle">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <h3>Crossifit workout of the day</h3>
                        <h5>November 15th,2019</h5>
                        <small>View all videos <i class="fa-solid fa-right-long"></i></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheJumboBottom',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.bg-jumbo {
    background: url("/public/img/banner14-2x.jpg");
    height: 39.0625rem;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $ColorLight;
    position: relative;

    .overlay::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        // background: linear-gradient(360deg, #2b38bb, #73388e);
    }
    .row {
        text-align: center;
        padding-top: 10.3125rem;

        .col {
            .circle {
                height: 5rem;
                width: 5rem;
                position: relative;

                .fa-play {
                    left: 2.0625rem;
                    bottom: 1.9375rem;
                    font-size: 1.25rem;
                }
            }

            h3 {
                font-size: 2.5rem;
            }

            h5 {
                font-size: 1.5rem;
                padding: .9375rem 0;
                color: $ColorGold;
            }

            small {
                cursor: pointer;
            }
        }
    }
}

</style>