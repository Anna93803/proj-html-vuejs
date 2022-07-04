import Vue from "vue";

export const state = Vue.observable ({
    videoAll: false,
    videos: [
        {
            src: "/img/video2-2x.jpg",
            title: "Thighs & glute workout",
            subTitle: "Increase your mobility"
        },
        {
            src: "/img/video7-2x.jpg",
            title: "Lift ì, firm & perck up",
            subTitle: "Feel young again"
        },
        {
            src: "/img/video9-2x.jpg",
            title: "Slim & trim your waist",
            subTitle: "Shed those pounds"
        }
    ]
});

export function allVideo(){
    if(state.videoAll) {
        return [...state.videos,...state.videos]

    }
    return state.videos;
}
