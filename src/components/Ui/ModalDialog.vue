<template>
  <div class="container">
    <h1>Registration</h1>
    <div>
      <button @click="registerButton = true" class="open-modal-btn">Register</button>
      <div v-if="registerButton" class="overlay">
        <div class="modal">
          <h2>Enter your details</h2>
          <form @submit.prevent>
            <label for="name">Your name</label>
            <input id=name type="text" v-model.trim="formData.name" required />
            <label for="email">Your email</label>
            <input id="email" type="text" v-model.trim="formData.email"  required />
            <label for="password">Your password</label>
            <input id="password" type="password" v-model.trim="formData.password" required />
            <div class="form-buttons">
              <button @click="submitButton">Register</button>
              <button @click="closeButton">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerButton: false,
      formData: {
        name: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    closeButton() {
      this.registerButton = false;
    },
    submitButton() {
      if (this.formData.name === "" || this.formData.email === "" || this.formData.password === "") {
        alert("Please enter a credentials");
      } else {
        alert("You are registered now!");
        this.closeButton();
      }
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  animation: fadeIn 0.3s ease-in-out;
}
.modal h2 {
  margin-top: 0;
}
.modal label {
  display: block;
  margin: 10px 0 5px;
}
.modal input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-buttons {
  display: flex;
  justify-content: space-between;
}
.form-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button {
  background-color: #4CAF50;
  color: white;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #388e3c;
}
.open-modal-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.open-modal-btn:hover {
  background-color: #388e3c;
}
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
