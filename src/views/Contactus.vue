<script>
import headerVue from '@/components/header.vue';
import FooterView from '../components/footer.vue';
export default{
    components: {
      headerVue,
      FooterView}
}
</script>
<template>
        <headerVue/>
        <div
        class="
          absolute
          text-white
        
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
  <div class="contact">
    <div class="container">
      <div class="left" style="width: 50%">
        <form action="">
          <h1 class="font-semibold text-2xl">Contact Form</h1>
          <label for="fname">Name</label>
          <input type="text" id="fname" name="name" placeholder="" />

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="" />

          <label for="phonenumber">Phone Number</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder=""
          />
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <div class="right pt-6">
        <form>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style="height: 200px"
          ></textarea>
        </form>
      </div>
    </div>

    <div class="midscreen text-center">
      <div>
        <h2 class="font-semibold text-2xl mx-auto">Follow us on</h2>
      </div>

      <div class="flex gap-5 justify-center">
        <img
          alt="twitter"
          class="w-14"
          src="https://cdn.icon-icons.com/icons2/1143/PNG/512/twitterlogooutline_80724.png"
        />
        <img
          alt="ig"
          class="w-14"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuKIrTQghpwXheT_CtAAPYdmHUc3AjowkHw&usqp=CAU"
        />
        <img
          alt="fb"
          class="w-14"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThdCXh-OpTAy284cSLacDpwXrz3AdqA8-GfJl8qrPlvyKOAGNw"
        />
      </div>
    </div>
    <br />
    <br />

        <div class="lastscreen grid grid-cols-3 justify-around">
                <div class="">
                        <div>
                                <img alt="phone" src="@/assets/css/images/contact/phone.svg" />
                        </div>
                        <div >
                                <br />
                                <h2>Tell us</h2>
                                <p>017425306</p>
                        </div>     
                </div>
                
                <div class="">
                        <div>
                                <img alt="message" src="@/assets/css/images/contact/message.svg" class=""/>
                        </div>
                        <div >
                                <br />
                                <h2>Drop Mail</h2>
                                <p>hemahiko@gmail.com</p>
                                <p>kemasam2001@gmail.com</p>
                        </div>
                </div>
                
                <div class="">
                        <div>
                        <img alt="location" src="@/assets/css/images/contact/location.svg" class=""/>
                        </div>
                        <div>
                                <br />
                                <h2>Location</h2>
                                <p>#963, Teuk Thla, Sen Sok</p>
                        </div>
                </div>
        </div>
        <FooterView />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    background-color: #e6e5ff;
    padding-top: 50px;
    /* height: 500px; */
  }
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type="submit"] {
    background-color: #656ed3;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #656ed3;
  }

  .container {
    width: 80%;
    margin: auto;
    border-radius: 5px;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
  .lascreen {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    /* gap:200px; */
  }

  .lastscreen {
    row-gap: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    padding-left: 160px;
  }
  
}
</style>
