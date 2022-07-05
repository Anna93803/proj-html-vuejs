<template>
    <div>
        <div class="jumbo-center" id="services">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="form-sale">
                            <h5>Join our mailing list today</h5>
                            <h2>Insider offerts & flash sales in your inbox every weel.</h2>
                            <img class="img-svg" src="/img/sep.svg" alt="linea">
                            <div class="form">
                                <input type="email" placeholder="Insert your email..*">
                                <button class="btn btn-secondary">Subscribe</button>
                                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet,consectetur adipiscing elit send portitor lectus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-jumbo-center">
            <div class="container">
                <div class="col-cards">
                    <div class="cards" v-for="(card, i) in cards" :key="i">
                        <img class="card-svg" :src="card.src" :alt="card.alt">
                        <div class="description-card">
                            <h5>{{ card.title }}</h5>
                            <small>{{ card.subtitle }}</small>
                            <p>{{ card.paragraph }}</p>
                            <a href="#">{{ card.link }}<i class="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheJumboCenter',
    data() {
        return {
            cards: [
                {
                    src: "/img/sport-watch.svg",
                    alt: "Img Watch",
                    title: "Team training",
                    subtitle: "Find a partner",
                    paragraph: "Vestibulum,curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus aget sed duis vehicula. Tristiqua.",
                    link: "Find a partner"
                },
                {
                    src: "/img/crossfit.svg",
                    alt: "Img Crossift",
                    title: "Crossfit workout",
                    subtitle: "Push your limits",
                    paragraph: "Vestibulum,curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus aget sed duis vehicula. Tristiqua.",
                    link: "Learn about Crossifit"
                },
                {
                    src: "/img/weight-loss.svg",
                    alt: "Img Loss plane",
                    title: "Weight loss plan",
                    subtitle: "Shed those pounds",
                    paragraph: "Vestibulum,curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus aget sed duis vehicula. Tristiqua.",
                    link: "Schedule a workout"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';

.jumbo-center {
    background: linear-gradient(90deg, #060606, #060606, rgba(0, 0, 0, 0.4), transparent), url("/public/img/banner1-2x.jpg");
    height: 39.0625rem;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $ColorLight;
        padding-top: 9.0625rem;

        .col {
            width: 50%;
            .form-sale {

                h5 {
                    color: $ColorTerzary;
                    font-weight: 500;
                    font-size: .9375rem;
                }

                h2 {
                    font-size: 2.5rem;
                    padding: .625rem 0;
                }

                p {
                    color: $ColorText;
                    padding-top: 1.875rem;
                }

                .form {
                    padding-top: 1.875rem;

                    input {
                        border-radius: 1rem;
                        padding: .5rem 1.25rem;
                        margin-right: 1.25rem;
                        width: 65%;
                        font-size: .75rem;
                    }

                    .btn {
                        width: 30%;
                    }
                }
            }
        }
    }
}

.bg-jumbo-center {
    background-color: $ColorPrimary;
    padding: 7.1875rem 0;

    .col-cards {
        display: flex;
        justify-content: center;
        gap: 4.0625rem;
        .cards {
            color: $ColorLight;
            border: .125rem solid $ColorSecondary;
            text-align: center;
            padding: 3.125rem .625rem;
            transition: 0.5s;
            cursor: pointer;
            .card-svg {
                width: 3.125rem;
            }

            .description-card {
                padding-top: 1.25rem;

                h5 {
                    font-size: 1.375rem;
                    padding-bottom: .5rem;
                }

                small {
                    font-size: 1rem;
                }

                small {
                    color: $ColorGold;
                }

                p {
                    padding: 1.875rem 0;
                    width: 80%;
                    margin: 0 auto;
                    line-height: 1.6;
                    color: $ColorText;
                }
                .fa-angle-right {
                    font-size: .8125rem;
                    padding-left: .3125rem;
                }
            }

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}

</style>