<template>
  <div class="container mx-auto" ref="main" :style="{ height: height + 'px' }">
    <div class="col-6 mx-auto bg-main">
      <div class="row">
        <img
          src="../images/Screenshot_2023-06-23_115513-transformed.png"
          style="width: 50%; height: auto"
          class="rounded mx-auto d-block"
          alt="..."
        />
      </div>

      <div class="row">
        <p class="text-center mb-4">Best way to save your money</p>
      </div>

      <div class="row">
        <form @submit.prevent="checkForm" method="post" novalidate>
          <div class="mb-3 px-5">
            <label for="fullname" class="form-label">Full name</label>
            <input
              type="fullname"
              class="form-control"
              name="fullname"
              id="fullname"
              v-model="fullname"
            />
          </div>
          <div class="mb-3 px-5">
            <label for="email" class="form-label">Email </label>
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              v-model="email"
            />
          </div>
          <div class="mb-3 px-5">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <div class="position-relative mt-5">
            <button
              type="submit"
              class="btn btn-primary btn-lg position-absolute top-50 start-50 translate-middle"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div class="row mt-5 text-center">
        <div class="col">
          <div class="d-flex justify-content-center align-items-center">
            <span class="mr-5">Already a member</span>
            <router-link to="/signin" class="ms-2">Sign Up</router-link>
          </div>
        </div>
      </div>
      <br />
      <div v-if="errors.length">
        <p class="ms-5">Please correct the following error(s)</p>
        <ul style="list-style-type: none" class="px-5 pb-4">
          <li
            v-for="(error, index) in errors"
            :key="index"
            class="alert alert-danger"
            role="alert"
          >
            {{ error }}
          </li>
        </ul>
      </div>

      <div v-if="showSuccessNotification" class="px-5 pb-4">
        <p v-if="success" class="alert alert-success" role="alert">
          {{ success }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
export default {
  data() {
    return {
      records: [],
      result: false,
      errors: [],
      height: null,
      fullname: "",
      email: "",
      password: "",
      success: null,
      showSuccessNotification: false,
    };
  },
  mounted() {
    this.setHeight();
    // const jsonData = localStorage.getItem("formRecords");
    // if (jsonData) {
    //   const formRecords = JSON.parse(jsonData);
    //   this.records = formRecords;
    // }
  },
  methods: {
    checkForm: function (e) {
      var result = true;
      this.errors = [];

      if (!this.fullname.trim()) {
        result = false;
        this.errors.push("Please enter the Fullname.");
      } else if (this.fullname.trim().match(/[^a-zA-Z]+$/)) {
        result = false;
        this.errors.push("Full name must contain only letters");
      }
      if (!this.password) {
        result = false;
        this.errors.push("Please enter the Password.");
      } else if (this.password.length < 8) {
        result = false;
        this.errors.push("Password must be at least 8 characters long");
      } else if (!this.password.match(/[^\w\s]|_/g)) {
        result = false;
        this.errors.push(
          "Password must contain at least one special character ($, %, ^, &, or *)"
        );
      }
      if (!this.email.trim()) {
        result = false;
        this.errors.push("Please enter the Email.");
      } else if (
        !this.email.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        result = false;
        this.errors.push("Please enter a valid email address");
      }
      if (result) {
        const formData = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        };
        // this.records.push(formData);
        // // Clear the form fields
        // this.fullname = "";
        // this.email = "";
        // this.password = "";
        // // Save the records array to localStorage
        // const jsonData = JSON.stringify(this.records);
        // localStorage.setItem("formRecords", jsonData);
        this.checkEmailExists(this.email)
          .then((emailExists) => {
            if (emailExists === true) {
              this.errors.push("Email already exists");
              this.showSuccessNotification = false; // Set the flag to display the notification
            } else {
              addDoc(collection(db, "users"), formData)
                .then(() => {
                  this.showSuccessNotification = true; // Set the flag to display the notification
                  this.showSuccess("Successfully signed up!");
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
            }
          })
          .catch((error) => {
            console.error("Error checking email: ", error);
          });
        this.fullname = "";
        this.email = "";
        this.password = "";
      } else {
        this.showSuccessNotification = false; // Set the flag to display the notification
      }
    },

    showSuccess(message) {
      this.success = message;
      setTimeout(() => {
        this.$router.push("/signin");
      }, 2000);
    },

    setHeight() {
      this.height = this.$refs.main.clientHeight;
    },

    async checkEmailExists(inputEmail) {
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      for (const doc of querySnapshot.docs) {
        const email = doc.data().email;
        if (email == inputEmail) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style>
.bg-main {
  background-color: #edf9ff;
}

.height {
  height: 700px;
}

a:hover {
  color: rgb(160, 22, 146);
  text-decoration: none;
  list-style: none;
}
</style>
