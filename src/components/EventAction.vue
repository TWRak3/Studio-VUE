<template>
  <div class="container">
    <h1>Event Action</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="add(1)">Add</button>
    <button id="secondary" @click="reduce(1)">Reduce</button>
    <Checkbox v-model="checked" :binary="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      if (this.counter > 10) {
        this.counter = 10;
      }
    },
    reduce(num) {
      this.counter = this.counter - num;
      if (this.counter < 0) {
        this.counter = 0;
      }
    }
  }
};
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