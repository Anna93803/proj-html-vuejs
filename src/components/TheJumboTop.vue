<template>
    <div>
        <div class="bg-jumbo">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="certified">
                            <h5>Certified fitness professional</h5>
                            <h1>Tke Control of your health</h1>
                            <!-- <i class="fa-solid fa-grip-lines"></i> ci va messo una linea -->
                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>
                            <div class="buttons">
                                <button class="btn btn-secondary">
                                    <a href="#"><i class="fa-brands fa-youtube"></i> Visitcmy YuoTube channel</a>
                                </button>
                                <button class="btn btn-dark">
                                    <a href="#">Buy Avada Today <i class="fa-solid fa-arrow-right"></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="circle">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="square-jumbo">
                    <div class="demos square">
                        <i class="fa-solid fa-file"></i>
                        <div class="text">Demos</div>
                    </div>
                    <div class="sale square">
                        <div><span>$</span>39</div>
                        <div class="text">On Sale</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-color">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="cards">
                            <img src="/img/service6-2x.jpg" alt="">
                            <div class="title-cards">
                                <!-- mettere linea -->
                                <p>Crossfit Workout</p>
                                <p>Push your limits</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="cards">
                            <img src="/img/box1-2x.jpg" alt="">
                            <div class="title-cards">
                                <!-- mettere linea -->
                                <p>Crossfit Workout</p>
                                <p>Push your limits</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="cards">
                            <img src="/img/box3-2x.jpg" alt="">
                            <div class="title-cards">
                                <!-- mettere linea -->
                                <p>Crossfit Workout</p>
                                <p>Push your limits</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-testimonial">
                    <div class="testimonial">
                        <p>"how yuo respond to che chellange in the second half will determine what yuo become after the game, whether yuo ara a winner or a loser."</p>
                    </div>
                    <!-- linea -->
                    <div class="user-testimonial">
                        <div class="col">
                            <div class="image">
                                <img src="/img/avatar-1-2x.jpg" alt="">
                            </div>
                        </div>
                        <span class="name">Brand Johnson</span>
                        <span>Las Vegas</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheJumboTop',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';
.bg-jumbo {

    background-image: url("/public/img/slider82x-scaled.jpg");
    height: 625px;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $ColorLight;
        padding-top: 145px;


        .col {

            .certified {
                

                h5 {
                    color: $ColorTerzary;
                    font-weight: 500;
                    font-size: .9375rem;
                }

                h1 {
                    font-size: 3.75rem;
                    padding: .625rem 0;
                }

                p {
                    color: $ColorText;
                }
            }

            .buttons {
                padding-top: 1.875rem;

                a {
                    color: $ColorLight;
                }

                .btn-secondary {
                    margin-right: .9375rem;
                }
            }

        }

        .col {
            .circle {
                background-color: $ColorLight;
                height: 80px;
                width: 80px;
                border-radius: 50%;
                // left: 33%;
                position: relative;

                .fa-play {
                    color: $ColorSecondary;
                    position: absolute;
                    left: 33px;
                    bottom: 31px;
                    font-size: 20px;
                }
            }

        }   
    }
    .square-jumbo {
        position: absolute;
        top: 3.125rem;
        right: 1.25rem;
        .square {
            background-color: $ColorLight;
            text-align: center;
            border-radius: .25rem;
            padding: .625rem .3125rem;
            
        }
        .demos {
            color: #566777;
            margin-bottom: .625rem;
        }

        .sale {
            position: relative; 

            div:first-child {
                color: #95cda2;
                font-weight: 700;
                font-size: 1.0625rem;

                span {
                    position: absolute;
                    top: 3px;
                    left: 10px;
                    font-size: .75rem;
                }
                
            }
        }

        .text {
            font-size: 13px;
        }
        
    }
}

.bg-color {
    background: linear-gradient(139deg, rgba(47,18,184,1) 0%, rgba(126,9,100,1) 48%, rgba(197,1,25,1) 84%); 
    padding-bottom: 3.75rem;

    .row {
        display: flex;
        justify-content: center;
        gap: 2.1875rem;

        .cards {
            border-bottom-right-radius: 2.1875rem;
            overflow: hidden;
            position: relative;
            bottom: 3.125rem;
            height: 380px;

            img {
                width: 100%;
            }

            .title-cards {
                position: absolute;
                color: $ColorLight;
                bottom: 1.5625rem;
                left: 1.25rem;

                p {
                    font-weight: 700;
                    font-size: 1.50rem;
                }

                p:last-child {
                    color: $ColorGold;
                    font-size: .9375rem;
                }
            }
        }
    }
    .row-testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $ColorLight;
        .testimonial {
            text-align: center;
            font-size: 2.5rem;
            word-break: break-all;
            width: 68%;
            padding: 50px 0;
        }
        .user-testimonial {
            display: flex;
            align-items: center;
            gap: .9375rem;

            .image {
                width: 50px;

                img {
                    border-radius: 50%;
                    width: 100%;
                }
            }


            span:last-child {
                color: $ColorText;
                font-size: .8125rem;
            }
        }
    }

}

</style>