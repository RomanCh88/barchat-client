<template>
  <!-- Login section -->
  <div class="login mt-5">
    <h3 class="mt-5">Join Chat</h3>
    <label for="username">userName</label>
    <br />
    <input class="mb-3" type="text" v-model="userName" />
    <br />
    <button class="btn btn-primary" @click="updateUsername">Join Chat</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      name: null,
    };
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
      this.$router.push({ name: "Chatroom", params: { name: this.name } });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.login {
  background: #fff;
  width: 40%;
  height: 50vh;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  padding-left: 2px;
  padding-right: 2px;
}
</style>
