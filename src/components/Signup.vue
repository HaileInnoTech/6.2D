<template>
  <div class="container mx-auto">
    <div class="col-6 mx-auto bg-main height">

      <div class="row">
        <img src="../images/Screenshot_2023-06-23_115513-transformed.png" style="width: 50%; height: auto"
          class="rounded mx-auto d-block" alt="..." />
      </div>

      <div class="row">
        <p class="text-center mb-4">Best way to save your money</p>
      </div>

      <div class="row">
        <form>
          <div class="mb-3 px-5">
            <label for="fullname" class="form-label">Full name</label>
            <input type="fullname" class="form-control" id="fullname" v-model="fullname" />
          </div>
          <div class="mb-3 px-5">
            <label for="email" class="form-label">Email </label>
            <input type="text" class="form-control" id="email" v-model="email" />
          </div>
          <div class="mb-3 px-5">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwork" v-model="password" />
          </div>
          <div class="position-relative mt-5">
            <button type="submit" class="btn btn-primary btn-lg position-absolute top-50 start-50 translate-middle">
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div class="row mt-5 text-center">
        <p>I'm already a member</p>
        <span>Sign In</span> // router link
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      email: '',
      password: ''
    }
  }
};
</script>

<style>
.bg-main {
  background-color: #edf9ff;
}

.height {
  height: 700px;
}
</style>
