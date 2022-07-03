<template>
    <div>
        <div class="container">
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
        <div>
            <!-- Jumbo image -->
            <!-- text, button, icons -->
        </div>
        <div>
            <!-- cards and image -->
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.container {
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
</style>