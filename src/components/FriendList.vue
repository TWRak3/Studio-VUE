<!-- Per vedere la differenza si deve togliere lo style .container-->

<template>
  <div class="container">
    <h1>Friend List</h1>
    <h2>{{ name }} {{ favoriteFriends === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="showFavorite">Favorite</button>
    <button @click="showDetails">Show list</button>
    <ul v-if="detailsOff">
      <li>
        <strong>Phone</strong>: {{ phoneNumber }}
      </li>
      <li>
        <strong>Email</strong>: {{ emailAddress }}
      </li>
      <li>
        <strong>Address</strong>: {{ address }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
      'name',
      'phoneNumber',
      'emailAddress',
      'address',
      'isFavorite',
  ],
  data() {
    return {
      detailsOff: false,
      friend: {
        name: "Antonio Nidelea",
        phone: "012 3456 7890",
        email: "antonio@gmail.com",
        address: "Lincon Street",
      },
      favoriteFriends: this.isFavorite
    };
  },
  methods: {
    showDetails() {
      this.detailsOff = !this.detailsOff;
    },
    showFavorite() {
      if (this.favoriteFriends === '1') {
        this.favoriteFriends = '0';
      }
      else {
        this.favoriteFriends = '1';
      }
    }

  }
}
</script>

<style scoped>
.container {
  position: relative;
  max-width: 400px;
  margin: 20px auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h1 {
  font-size: 1.8rem;
  color: #4CAF50;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: color 0.3s ease, transform 0.3s ease;
}
h1:hover {
  color: #388e3c;
  transform: scale(1.05);
}
button {
  margin-right: 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #388e3c;
}
ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
}
ul li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  color: #555;
}
ul li:last-child {
  border-bottom: none;
}
ul li strong {
  font-weight: bold;
  color: #333;
}
p {
  font-size: 14px;
  color: #777;
  margin-top: 10px;
}
input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
  margin: 10px 0;
}
</style>