<template>
  <li class="resource-item">
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
        <button class="delete-btn">Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link" class="resource-link">View resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: [
    'link',
    'title',
    'description'
  ]
}
</script>


<style scoped>
.resource-item {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  width: 300px;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  list-style: none;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.delete-btn {
  background-color: #4CAF50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.delete-btn:hover {
  background-color: #388e3c;
}

.resource-link {
  font-size: 1rem;
  color: #388e3c;
  text-decoration: none;
  margin-top: 15px;
  transition: color 0.3s ease;
}

.resource-link:hover {
  color: #4CAF50;
}

p {
  font-size: 1rem;
  color: #777;
  margin: 10px 0;
}
</style>
