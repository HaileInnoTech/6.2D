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
        <form
          @submit="checkForm"
          method="post"
          action="http://mercury.swin.edu.au/it000000/formtest.php"
          novalidate
        >
          <div class="mb-3 px-5">
            <label for="fullname" class="form-label">Full name</label>
            <input
              type="fullname"
              class="form-control"
              v-bind:name="fullname"
              id="fullname"
              v-model="fullname"
            />
          </div>
          <div class="mb-3 px-5">
            <label for="email" class="form-label">Email </label>
            <input
              type="text"
              class="form-control"
              v-bind:name="email"
              id="email"
              v-model="email"
            />
          </div>
          <div class="mb-3 px-5">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              v-bind:name="password"
              id="passwork"
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
        <p>I'm already a member</p>
        <span><a href="/signin">Sign In</a></span>
      </div>
      <br />
      <div v-if="errors.length">
        <p class="ms-5">Please correct the following error(s)</p>
        <ul style="list-style-type: none" class="px-5 pb-4">
          <li
            v-for="(error, index) in errors"
            :key="index"
            class="alert alert-danger"
            role="alear"
          >
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      errors: [],
      height: null,
    };
  },
  mounted() {
    this.setHeight();
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
      if (!result) {
        e.preventDefault();
      }
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
