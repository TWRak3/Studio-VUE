

import { createApp } from 'vue'
import App from './App.vue'
import InfoPlayer from './components/InfoPlayer.vue';
import RandomNum from './components/RandomNum.vue';
import EventAction from "./components/EventAction.vue";
import AddName from "./components/AddName.vue";
import Alert from "./components/Alert.vue";
import PlayerList from './components/PlayerList.vue'
import FriendList from './components/FriendList.vue'
import TheForm from './components/TheForm.vue'
import ModalDialog from './components/Ui/ModalDialog.vue'

import PrimeVue from "primevue/config";

const app = createApp(App);

app.component('info-player', InfoPlayer);
app.component('random-num', RandomNum);
app.component('event-action', EventAction);
app.component('add-name', AddName);
app.component('alert', Alert);
app.component('player-list', PlayerList);
app.component('friend-list', FriendList);
app.component('the-form', TheForm);
app.component('modal-dialog', ModalDialog);
app.use(PrimeVue);

app.mount('#app')
