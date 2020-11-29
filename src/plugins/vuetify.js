import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#144552', //bleu
                secondary: '#144552', //jaune
                accent: '#144552', //bleu
                warning: '#FF3636', //orange
            },
        },
    },
})
export default vuetify