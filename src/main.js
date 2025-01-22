import { createApp } from "vue";
import App from "./App.vue";
import InfoPlayer from "./components/InfoPlayer.vue";
import RandomNum from "./components/RandomNum.vue";
import EventAction from "./components/EventAction.vue";
import AddName from "./components/AddName.vue";
import Alert from "./components/Alert.vue";
import PlayerList from "./components/PlayerList.vue";
import FriendList from "./components/FriendList.vue";
import TheForm from "./components/TheForm.vue";
import ModalDialog from "./components/Ui/ModalDialog.vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";

// PRIMEVUE IMPORTS
import Checkbox from "primevue/checkbox";
import Dialog from "primevue/dialog";

const app = createApp(App);

// PRIMEVUE COMPONENTS
app.component("Checkbox", Checkbox);
app.component("Dialog", Dialog);

app.component("info-player", InfoPlayer);
app.component("random-num", RandomNum);
app.component("event-action", EventAction);
app.component("add-name", AddName);
app.component("alert", Alert);
app.component("player-list", PlayerList);
app.component("friend-list", FriendList);
app.component("the-form", TheForm);
app.component("modal-dialog", ModalDialog);


app.use(PrimeVue);

app.mount("#app");
