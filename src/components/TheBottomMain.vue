<template>
    <div>
        <div class="container py">
            <div class="article">
                <h5>Latest articles</h5>
                <h6>Read all articles <i class="fa-solid fa-angle-right"></i></h6>
            </div>
            <div class="col-article">
                <div class="box-article" v-for="(article, i) in articles" :key="i">
                    <img :src="article.src" :alt="article.alt">
                    <div class="text-article">
                        <h5>{{ article.title }}</h5>
                        <small>{{ article.paragraph }}</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="jumbo-bottom">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>"I've failed over and over again in my life. And that is why I succeed."</h3>
                        <img class="img-svg" src="/img/sep.svg" alt="">
                        <p>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros,tristique.Gravida suspendisse etiam in laculis</p>
                        <button class="btn btn-secondary"><a href="#">Buy Avada today <i class="fa-solid fa-angle-right"></i></a></button>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row-sponsor">
                <div class="col-sponsor">
                    <div class="card-sponsor" v-for="(card, i) in cardSponsor" :key="i">
                        <div class="img-sponsor">
                            <img :src="card.src" :alt="card.alt">
                        </div>
                        <img class="img-svg" :src="card.svg" alt="line">
                        <p>{{ card.paragraph }}</p>
                        <a href="#">{{ card.link }}<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheBottomMain',
    data() {
        return {
            articles: [
                {
                    src: "/img/blog4-2x-600x386.jpg",
                    alt: "img protein",
                    title: "The best protein shake",
                    paragraph: "By admin | November 26th,2019 | Gym"
                },
                {
                    src: "/img/blog1-2x-600x386.jpg",
                    alt: "img cardio workout",
                    title: "Ultimate cardio workout",
                    paragraph: "By admin | November 26th,2019 | Gym"
                },
                {
                    src: "/img/blog3-2x-600x386.jpg",
                    alt: "img juices",
                    title: "New juices available now",
                    paragraph: "By admin | November 26th,2019 | Gym"
                }
            ],
            cardSponsor: [
                {
                    src: "/img/sponsor-1-2x.png",
                    alt: "Yoga Studio",
                    svg: "/img/sep-blue.svg",
                    paragraph: "Trestique aliquam in nullam habitasse nunc,amet vel consectetur.Nulla in suspendisse dolor, aliquet.",
                    link: "Visit Yoga Studio"
                },
                {
                    src: "/img/sponsor-2-2x.png",
                    alt: "Fitness center",
                    svg: "/img/sep-blue.svg",
                    paragraph: "Trestique aliquam in nullam habitasse nunc,amet vel consectetur.Nulla in suspendisse dolor, aliquet.",
                    link: "Join Fitness Center"
                },
                {
                    src: "/img/sponsor-3-2x.png",
                    alt: "Fitness Club",
                    svg: "/img/sep-blue.svg",
                    paragraph: "Trestique aliquam in nullam habitasse nunc,amet vel consectetur.Nulla in suspendisse dolor, aliquet.",
                    link: "Leaner about FC"
                },
                {
                    src: "/img/sponsor-4-2x.png",
                    alt: "pOWER gYM",
                    svg: "/img/sep-blue.svg",
                    paragraph: "Trestique aliquam in nullam habitasse nunc,amet vel consectetur.Nulla in suspendisse dolor, aliquet.",
                    link: "Visit Power Gym"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';

.py {
    padding: 6.25rem 0;
    .article {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1.875rem;

        h5 {
            font-size: 1.1875rem;
            font-weight: 400;
        }

        h6 {
            font-size: .75rem;
            font-weight: 600;

            .fa-angle-right {
                font-size: .625rem;
                padding-left: .3125rem;
            }
        }
    }
    .col-article {
        display: flex;
        gap: 2.8125rem;

        .text-article {
            padding-top: .9375rem;
            padding-left: .9375rem;

            h5 {
                font-size: 1.25rem;
                font-weight: 400;
            }

            small {
                color: $ColorText;
            }
        }
    }
}
.jumbo-bottom {
    background: linear-gradient(360deg, #060606, #060606, rgba(0, 0, 0, 0.2), transparent) , url("/public/img/banner2-2x.jpg");
    height: 39.0625rem;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $ColorLight;

    .row {
        display: flex;
        justify-content: center;
        padding-top: 10.3125rem;

        .col {
            width: 50%;
            text-align: center;

            h3 {
                font-size: 2.5rem;
                line-height: 1.5;
                text-align: center;
            }

            .img-svg {
                padding: 1.5625rem 0;
            }

            p {
                padding-bottom: 1.5625rem;
                line-height: 1.5;
                font-weight: 700;
            }
        }
    }
}

.row-sponsor {
    padding: 5rem 0;
    .col-sponsor {
        display: flex;
        gap: 3.125rem;

        .card-sponsor {
            text-align: center;
            .img-sponsor {
                width: 9.375rem;
                margin: 0 auto;
            }

            p {
                padding: 1.5625rem 0;
            }

            a {
                color: $ColorPrimary;
                font-weight: 600;
                font-size: .875rem;

                .fa-angle-right {
                    padding-left: .5rem;
                }
            }
        }
    }
}
</style>