<template>
  <div>
    <info-player></info-player>
    <random-num></random-num>
    <event-action></event-action>
    <add-name></add-name>
    <alert></alert>
    <player-list></player-list>
    <div class ="app-container">
      <ul>
        <resource-item
            v-for="res in storageResource"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
        ></resource-item>
      </ul>
    </div>
    <the-form></the-form>
    <ul>
      <friend-list
          name="Antonio Nidelea"
          phone-number="012 3456 7890"
          email-address="antonio@gmail.com"
          address="Lincon Street"
          is-favorite="0"
      ></friend-list>
      <friend-list
          name="Antony Remold"
          phone-number="098 7654 321"
          email-address="antony@gmail.com"
          address="Adam Street"
          is-favorite="0"
      ></friend-list>
    </ul>
    <modal-dialog></modal-dialog>
  </div>
</template>

<script>
import ResourceItem from "@/components/ResourceItem.vue";

export default {
  components: {
    ResourceItem: ResourceItem
  },
  data() {
    return {
      storageResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official guide of VUE',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The best browser',
          link: 'https://google.com',
        }
      ]
    }
  }
}

</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  margin: 20px auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>



