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
              Sign in
            </button>
          </div>
        </form>
      </div>

      <div class="row mt-5 text-center">
        <div class="col">
          <div class="d-flex justify-content-center align-items-center">
            <span class="mr-5">Not a Member?</span>
            <router-link to="/signup" class="ms-2">Sign Up</router-link>
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
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
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
    };
  },
  mounted() {
    this.setHeight();

    // save to local memory
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

      if (!this.email.trim()) {
        result = false;
        this.errors.push("Please enter the Email.");
      } else if (
        !this.email.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        result = false;
        this.errors.push("Please enter a valid email address");
      } else if (this.password && this.email) {
        // const recordExists = this.records.some((record) => {
        //   return (
        //     record.password === this.password && record.email === this.email
        //   );
        // });
        // if (recordExists) {
        //   this.$router.push("/Homepage");
        // } else {
        //   this.errors.push("Email and password are incorrect");
        // }
        const usersRef = collection(db, "users");
        getDocs(usersRef)
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const { email, password } = doc.data();
              if (email === this.email && password === this.password) {
                // Redirect to the homepage if there is a match
                this.$router.push("/homepage");
              }
            });
            this.errors.push("Email and password do not match");
          })
          .catch((error) => {
            console.error("Error getting documents: ", error);
          });
      }

      if (!this.password) {
        result = false;
        this.errors.push("Please enter the Password.");
      }
      // Get a reference to the collection
      const usersRef = collection(db, "users");

      // Retrieve all documents in the collection
    },
    setHeight() {
      this.height = this.$refs.main.clientHeight;
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
