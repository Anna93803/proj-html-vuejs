<template>
    <div class="bg-footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="img-logo">
                        <img src="/img/logo.png" alt="">
                    </div>
                    <p>Aci aliquam neque sagitis diam faucibus vitae purus turpis phasellus.Pellentesque consectetur amet purus ultricesmauris.</p>
                    <div class="social">
                        <ul>
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <h4>Recent post</h4>
                    <ul>
                        <li v-for="(link, i) in linkPost" :key="i">
                            <i class="fa-solid fa-angle-right"></i>
                            {{ link.link }}
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Contact information</h4>
                    <small>4746 Tipple Road Michigan 48449</small>
                    <a href="#">Mobile: 1.800.000.000</a>
                    <a href="#">Email: info@your-company.com</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>©Copiright 2012 - 2020| Avada theme by <span>Theme Fusion</span>| All rights reserved | Powered by <span>WordPress</span></p>
                <div class="square">
                    <i class="fa-solid fa-angle-up"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFooter',
    data() {
        return {
            linkPost:[
                {
                    link: "The best protein shake",
                },
                {
                    link: "Ultimate cardio workout"
                },
                {
                    link: "New juices available now"
                },
                {
                    link: "Tips to find training partners"
                },
                {
                    link: "20 best healthy recipes"
                }
            ]
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.bg-footer {
    background-color: $ColorPrimary;
    color: $ColorLight;

    .row {
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 5rem 0;
        gap: 1.25rem;

        .col {
            width: calc(100% / 3);
            .img-logo {
                width: 12.5rem;
                margin: 0 auto;
            }

            h4 {
                font-size: 1.25rem;
                text-transform: uppercase;
                font-weight: 500;
                padding-bottom: 1.25rem;
            }

            p {
                color: $ColorText;
                padding: 1.25rem 0;
            }
        }
        .social {
            
            ul {
                display: flex;
                justify-content: center;

            }

            i {
                padding-right: .75rem;
                color: $ColorTerzary;
                transition: all 0.4s;

                &:hover {
                    color: $ColorSecondary;
                }
            }
        }

    }
    ul {

        li {
            padding-bottom: .9375rem;
            cursor: pointer;
            
            .fa-angle-right {
                padding-right: .375rem;
            }

            &:hover {
                color: $ColorText;
            }
        }
    }

    small {
        padding-bottom: .9375rem;
        display: block;
        font-size: 1rem;
        color: $ColorText;

        &:hover {
            color: $ColorLight;
        }
    }

    a:hover {
        color: $ColorText;
        text-decoration: underline;
    }

    .footer-bottom {
        text-align: center;
        padding: 2.8125rem 0;
        color: $ColorText;
        position: relative;
        border-top: .0625rem solid #5d5d5e;

        span {
            color: $ColorLight;
        }

        .square {
            background-color: #353535;
            color: $ColorLight;
            height: 1.875rem;
            width: 2.1875rem;
            position: absolute;
            bottom: 0;
            right: 3.125rem;

            i {
                padding-top: .4375rem;
                font-size: .875rem;
            }
        }
    }
}

</style>