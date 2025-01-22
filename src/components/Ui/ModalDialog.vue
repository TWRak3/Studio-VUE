<template>
    <div class="container">
        <button @click="isModalVisible = true" class="open-modal-btn">Register</button>
    </div>

    <Dialog v-model:visible="isModalVisible" dismissable-mask modal header="Enter your details" :style="{ width: '25rem' }">
        <div class="flex align-items-center gap-3 mb-3">
            <div>
                <label for="name">Your name</label>
                <input id=name type="text" v-model.trim="formData.name" required />
                <label for="email">Your email</label>
                <input id="email" type="text" v-model.trim="formData.email"  required />
                <label for="password">Your password</label>
                <input id="password" type="password" v-model.trim="formData.password" required />
            </div>
        </div>

        <div class="flex justify-content-end gap-2">
            <div class="form-buttons">
                <button @click="submitButton">Register</button>
                <button @click="closeButton">Close</button>
                <button @click="clearFields">PULISCI</button>
            </div>
        </div>

    </Dialog>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
      formData: {
        name: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
	  clearFields() {
		 for(const [key,val] of Object.entries(this.formData)) {
             this.formData[key] = null;
         }
		  console.log(this.formData)

	  },
    closeButton() {
      this.isModalVisible = false;
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
button:active {
    background-color: #27642a;
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
