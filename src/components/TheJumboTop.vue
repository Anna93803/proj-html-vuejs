<template>
    <div class="jumbo">
        <div class="jumbo-top" id="change" >
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="certified">
                            <h5>Certified fitness professional</h5>
                            <h1>Take Control of your health</h1>
                            <img class="img-svg" src="/img/sep.svg" alt="linea">
                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>
                            <div class="buttons">
                                <button class="btn btn-secondary">
                                    <i class="fa-brands fa-youtube"></i> Visit my YouTube channel
                                </button>
                                <button class="btn btn-dark">
                                    Buy Avada Today <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="circle" @click="change()">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="square-jumbo">
                    <div class="demos square">
                        <i class="fa-brands fa-atlassian"></i>
                        <div class="text">Demos</div>
                    </div>
                    <div class="sale square">
                        <div><span>$</span>39</div>
                        <div class="text">On Sale</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-jumbo-top">
            <div class="container">
                <div class="col-cards">
                    <div class="cards overlay" v-for="(card, i) in cards" :key="i">
                        <img :src="card.src" :alt="card.title">
                        <div class="title-cards">
                            <img class="img-svg" src="/img/sep-white.svg" alt="linea">
                            <p>{{card.title}}</p>
                            <p>{{card.subTitle}}</p>
                        </div>
                    </div>
                </div>
                <div class="row-testimonial">
                    <div class="testimonial">
                        <p>"How you respond to che chellange in the second <br>half will determine what yuo become after the game, whether you are a winner or a loser."</p>
                    </div>
                    <img class="img-svg" src="/img/sep.svg" alt="linea">
                    <div class="user-testimonial">
                        <div class="col">
                            <div class="image">
                                <img src="/img/avatar-1-2x.jpg" alt="profile">
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

    data() {
        return {
            cards: [
                {
                    src: "/img/service6-2x.jpg",
                    title: "Crossfit workout",
                    subTitle: "Push your limits"
                },
                {
                    src: "/img/box1-2x.jpg",
                    title: "New gym apparel",
                    subTitle: "Look good, feel good"
                },
                {
                    src: "/img/box3-2x.jpg",
                    title: "Team training",
                    subTitle: "Find a partner"
                }
            ]
        }
    },
    methods: {
        change() {
            const img = document.getElementById('change');
            img.classList.toggle('change-img');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';

.jumbo {
    padding-top: 4rem;
    .jumbo-top {
        position: relative;
        background: linear-gradient(90deg, #060606, #060606, rgba(0, 0, 0, 0.2), transparent), url("/public/img/slider82x-scaled.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        height: 39.0625rem;
        background-position: top center right;


        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $ColorLight;
            padding-top: 9.0625rem;

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
                        padding-top: .9375rem;
                    }
                }

                .buttons {
                    padding-top: 1.875rem;

                    .btn-secondary {
                        margin-right: .9375rem;
                    }
                }

            }
            .col {
                .circle {
                    background-color: $ColorLight;
                    height: 5rem;
                    width: 5rem;
                    border-radius: 50%;
                    position: relative;

                    .fa-play {
                        color: $ColorSecondary;
                        position: absolute;
                        left: 2.0625rem;
                        bottom: 1.9375rem;
                        font-size: 1.25rem;
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
                        top: .1875rem;
                        left: .625rem;
                        font-size: .75rem;
                    }
                    
                }
            }
            .text {
                font-size: .8125rem;
            }
            
        }
    }

    .bg-jumbo-top {
        background: linear-gradient(139deg, rgba(47,18,184,1) 0%, rgba(126,9,100,1) 48%, rgba(197,1,25,1) 84%); 
        padding-bottom: 7.75rem;

        .col-cards {
            display: flex;
            justify-content: center;
            gap: 2.1875rem;

            .overlay {
                position: relative;

                &::after {
                    content: "";
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    position: absolute;
                    background: linear-gradient(transparent, #171717);
                }
            }
            .cards {
                border-bottom-right-radius: 2.1875rem;
                overflow: hidden;
                position: relative;
                bottom: 3.125rem;
                transition: 0.5s;


                img {
                    height: 100%;
                }

                .title-cards {
                    position: absolute;
                    color: $ColorLight;
                    bottom: 1.5625rem;
                    left: 1.25rem;
                    z-index: 8;

                    p {
                        font-weight: 700;
                        font-size: 1.50rem;
                        padding-top: .375rem;
                    }

                    p:last-child {
                        color: $ColorGold;
                        font-size: .9375rem;
                    }
                }

                &:hover {
                    transform: scale(1.1)
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
                width: 68%;
                padding: 3.125rem 0;
            }
            .user-testimonial {
                display: flex;
                align-items: center;
                gap: .9375rem;

                .image {
                    width: 3.125rem;

                    img {
                        border-radius: 50%;
                    }
                }

                span:last-child {
                    color: $ColorText;
                    font-size: .8125rem;
                }
            }
        }

    }

    .change-img {
        background:linear-gradient(90deg, #060606, #060606, rgba(0, 0, 0, 0.2), transparent), url('/public/img/66-664544_sports-fitness-images-hd.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
}

</style>