<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      pwd: "",
      repeatPws: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:3001/auth/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:3000",
          },
          body: JSON.stringify({
            email: this.email,
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.pwd,
            repeat_password: this.repeatPws,
          }),
        });
        const result = await res.json();
        if (!result.success) {
          alert(result.error);
          return;
        }
      } catch (err) {
        console.log(err);
      }
      this.$router.push({ name: "auth/login" });
    },
  },
};
</script>

<template>
  <div class="h-screen">
    <div class="h-full bg-[#EBEFFF]">
      <!-- Left column container with background-->
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between"
      >
        <div
          class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12"
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full"
            alt="Sample image"
          />
        </div>

        <!-- Right column container -->
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form @submit="onSubmit">
            <!--Sign in section-->
            <div
              class="flex flex-row items-center justify-center font-semibold lg:justify-start"
            >
              <p class="mb-0 mr-4 text-lg">Please fill out form to register</p>
            </div>
            <br />

            <!-- Email input -->
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label>First Name</label>
              <br />
              <input
                type="text"
                v-model="firstName"
                class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                required
                placeholder="first name"
              />
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <label>Last Name</label>
              <br />
              <input
                type="text"
                v-model="lastName"
                class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="last name"
                required
              />
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <label>Username</label>
              <br />
              <input
                type="text"
                v-model="username"
                class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                required
                placeholder="username"
              />
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <label>Email</label>
              <br />
              <input
                type="text"
                v-model="email"
                class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="email"
                required
              />
            </div>

            <!-- Password input -->
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label>Password</label>
              <input
                type="password"
                v-model="pwd"
                class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput22"
                placeholder="Password"
              />
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <label>Repeated Password</label>
              <input
                type="password"
                v-model="repeatPws"
                class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput22"
                placeholder="Password"
              />
            </div>

            <div class="text-center lg:text-left">
              <button
                class="mb-3 inline-block w-6/12 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="submit"
                data-te-ripple-init
                data-te-ripple-color="light"
                style="background: #656ed3"
              >
                Register
              </button>

              <!-- Register link -->
              <p class="mb-0 mt-2 pt-1 text-xl pl-12">
                Yes, I have an account
                <router-link
                  class="font-bold transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  to="/login"
                  >Login</router-link
                >
              </p>
            </div>
            <div class="flex gap-10 pl-14">
              <img
                alt="twitter"
                class="w-12"
                src="https://cdn.icon-icons.com/icons2/1143/PNG/512/twitterlogooutline_80724.png"
              />
              <img
                alt="ig"
                class="w-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuKIrTQghpwXheT_CtAAPYdmHUc3AjowkHw&usqp=CAU"
              />
              <img
                alt="fb"
                class="w-12"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThdCXh-OpTAy284cSLacDpwXrz3AdqA8-GfJl8qrPlvyKOAGNw"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
