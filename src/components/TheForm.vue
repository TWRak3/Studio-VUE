<template>
  <form @submit.prevent="submitForm">
    <div class="container">
      <h1>Form function</h1>
      <div class="">
        <label for="user-name">Your Name</label>
        <input id="user-name" name="user-name" type="text" v-model="userName" />     <!-- "for" e "id" devono essere uguali se no "for" non avrà nessuna funzione -->
      </div>
      <div class="">
        <label for="user-age">Your Age (Years)</label>
        <input id="user-age" name="user-age" type="number" v-model="userAge" />
      </div>
      <div class="">
        <label for="information">How did you hear about us?</label>
        <select id="information" name="information" v-model="information">
          <option value="google">Google</option>
          <option value="social-media">Social media</option>
          <option value="sponsor">Sponsor</option>
        </select>
      </div>
      <div class="">
        <h2>What are you interested in?</h2>
        <div>
          <input id="news" name="what" type="checkbox" value="news" v-model="what" />
          <label for="news">News</label>
        </div>
        <div>
          <input id="tutorials" name="what" type="checkbox" value="tutorials" v-model="what" />
          <label for="tutorials">Tutorials</label>
        </div>
        <div>
          <input id="gaming" name="what" type="checkbox" value="gaming" v-model="what" />
          <label for="gaming">Gaming</label>
        </div>
      </div>
      <div class="">
        <h2>How do you learn?</h2>
        <div>
          <input id="video-courses" name="learn" type="radio" value="video" v-model="learn" />
          <label for="video-courses">Video Courses</label>
        </div>
        <div>
          <input id="blogs" name="learn" type="radio" value="blogs" v-model="learn" />
          <label for="blogs">Blogs</label>
        </div>
        <div>
          <input id="other" name="learn" type="radio" value="other" v-model="learn" />
          <label for="other">Other</label>
        </div>
      </div>
      <div>
        <button @click="showError" >Save Data</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: '',
      userName: '',
      userAge: '',
      information: '',
      what: [],
      learn: [],
    }
  },
  methods: {
    submitForm() {
      console.log('Username: ' + this.userName);
      this.userName = '';
      console.log('User age: ' + this.userAge);
      this.userAge = '';
      console.log('Information: ' + this.information);
      this.information = '';
      console.log('What are you interested in: ' + this.what);
      this.what = [];
      console.log('How do you learn: ' + this.learn);
      this.learn = [];
    },
    confirmForm(){
      console.log('Username: ' + this.userName);
      this.userName = '';
      console.log('User age: ' + this.userAge);
      this.userAge = '';
      console.log('Information: ' + this.information);
      this.information = '';
      console.log('What are you interested in: ' + this.what);
      this.what = [];
      console.log('How do you learn: ' + this.learn);
      this.learn = [];
    },
    showError() {
      if (this.userName === '' || this.userAge === '' || this.information === '' || this.what === '' || this.learn === '' ) {
        alert("Please compile the module!")
        this.submitForm="";
      } else {
        this.confirmForm();
      }
      /*if (this.userName === '' || this.userAge === '' || this.information === '' || this.what === '' || this.learn === '' ) {
        alert("Please compile the module!")
        this.submitForm="";
        if (this.submitForm) {
          this.submitForm();
        } else {
          this.submitForm=false;
        }
      } else {
        alert("Data saved successfully!")
      }*/
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