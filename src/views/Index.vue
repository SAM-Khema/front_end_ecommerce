
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/specialoffer">Special Offer</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <!-- <button @click="$emit('checkout')">Go to checkout</button> -->
        <RouterLink to="/contactus">Contact Us</RouterLink>
        <!-- <RouterLink to="/login">login</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>