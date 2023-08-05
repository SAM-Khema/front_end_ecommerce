<script>
export default {
  // components: {
  //   TheWelcome,
  // },
  setup() {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  async mounted() {
    console.log("hello world");
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:3001/auth/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:3000",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
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
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<template>
  <section class="gradient-form h-full dark:bg-neutral-700">
    <div class="container h-full p-10 mx-auto">
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
      >
        <div class="w-full">
          <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div class="g-0 lg:flex lg:flex-wrap">
              <!-- Left column container-->
              <div class="px-4 md:px-0 lg:w-8/12">
                <div class="md:mx-6 md:p-12">
                  <!--Logo-->
                  <div class="pl-24">
                    <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                      Welcome Back!
                    </h4>
                  </div>

                  <form class="lg:items-center" @submit="onSubmit">
                    <!-- <p class="mb-4"></p> -->
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <label>Email</label>
                      <input
                        type="text"
                        v-model="email"
                        class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>

                    <!--Password input-->
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <label>Password</label>
                      <input
                        type="password"
                        v-model="password"
                        class="peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder="Password"
                      />
                    </div>

                    <!--Submit button-->
                    <div class="mb-12 pb-1 pt-1">
                      <button
                        class="mb-3 inline-block w-6/12 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="background: #656ed3"
                      >
                        Log in
                      </button>
                    </div>
                    <!--Register button-->
                    <div class="flex items-center pb-6">
                      <p class="mb-0">Don't have an account?</p>
                      <router-link
                        type="button"
                        class="font-bold"
                        to="/register"
                        >Register</router-link
                      >
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
              <!-- Right column container with background and description-->
              <div
                class="flex items-center rounded-b-lg lg:w-4/12 lg:rounded-r-lg lg:rounded-bl-none"
                style="background: #afb3ff"
              >
                <img
                  src="@/assets/css/images/login.svg"
                  class="grid grid-cols-2 items-center"
                />
                <div class="px-4 py-6 md:mx-6 md:p-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
