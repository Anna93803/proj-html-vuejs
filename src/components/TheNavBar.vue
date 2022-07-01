<template>
    <div class="bg-navbar">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="logo">
                        <img src="/img/logo.png" alt="logo">
                    </div>
                </div>
                <div class="col">
                    <ul>
                        <li v-for="(link, i) in navLinks" :key="i"><a :href=" link.href ">{{ link.name }}</a></li>
                        <li>
                            <a href="#" class="bg-link">new</a>
                        </li>
                        <li><button class="btn btn-secondary">Shedule a Workout</button></li>
                        <li><i class="fa-solid fa-cart-shopping"></i></li>
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheNavBar',
    data() {
        return {
            navLinks: [
                {
                    name: 'Home',
                    href: '#'
                },
                {
                    name: 'Services',
                    href: '#'
                },
                {
                    name: 'About',
                    href: '#'
                },
                {
                    name: 'Videos',
                    href: '#',
                },
                {
                    name: 'Blog',
                    href: '#'
                },
                {
                    name: 'Store',
                    href: '#'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/buttons.scss';

.bg-navbar {
    background-color: $ColorPrimary;
    padding: 1.25rem 0;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .col {
            .logo {
                width: 12.5rem;

                img {
                    width: 100%;
                }
            }

            ul {
                display: flex;
                align-items: center;

                li,
                a {
                    color: $ColorText;

                    &:hover {
                        color: $ColorLight;
                    }
                }

                li {
                    padding-right: 1.5625rem;
                }

                li:last-child {
                    padding-right: 0;
                }
                .bg-link {
                    background-color: $ColorGold;
                    color: $ColorPrimary;
                    padding: .125rem .25rem;
                    border-radius: .125rem;
                    font-size: .8125rem;

                    &:hover {
                        color: $ColorPrimary;
                        font-weight: 700;
                    }
                }
            }
        }
    }


}

</style>