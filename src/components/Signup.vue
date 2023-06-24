<template>
  <div class="container mx-auto">
    <div class="col-6 mx-auto bg-main height">
      <div class="row">
        <img
          src="../images/Screenshot_2023-06-23_115513-transformed.png"
          style="width: 65%; height: auto"
          class="rounded mx-auto d-block"
          alt="..."
        />
      </div>

      <div class="row">
        <p class="text-center mb-4">Best way to save your money</p>
      </div>

      <div class="row">
        <form>
          <div class="mb-3 px-5">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 px-5">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 px-5">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
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
      <span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-main {
  background-color: #edf9ff;
}
.height {
  height: 650px;
}
</style>
