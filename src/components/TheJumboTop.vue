<template>
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
    height: 500px;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;

    .row {
        display: flex;
        // debbug
        color: $ColorLight;

        .col {

            .certified {
                padding: 130px 0;

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
        
    }
}

</style>