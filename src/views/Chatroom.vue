<template>
  <div class="message-body mt-3">
    <h3>Chat</h3>
    <h5>Welcome {{ name }}!</h5>
    <div class="card">
      <div class="card-body">
        <div
          class="border pl-2 pt-1 ml-2 message-text mb-2"
          v-for="message in messages"
          :key="message"
        >
          <span class="mg-text">{{ message.username }}</span>
          <p class="message pt-1">{{ message.text }}</p>
        </div>
      </div>
    </div>
    <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
    <button class="btn btn-primary" @click="sendMessage">Send</button>
  </div>
</template>

<script>
import firebase from "./../credentials/firebase";
export default {
  name: "App",
  props: {
    name: String,
  },
  data() {
    return {
      showMessage: "",
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      const message = {
        text: this.showMessage,
        username: this.name,
      };
      firebase.database().ref("messages").push(message);
      this.showMessage = "";
    },
  },
  mounted() {
    let viewMessage = this;
    const itemsRef = firebase.database().ref("messages");
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
        });
      });
      viewMessage.messages = messages;
    });
  },
};
</script>

<style lang="scss" scoped>
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
.message-body {
  width: 40%;
  height: 80vh;
  margin: auto;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}
.message {
  font-size: 14px;
}
.mg-text {
  color: rgb(0, 195, 255);
  font-weight: bolder;
}
.message-body input {
  width: 80%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  height: 6vh;
  padding-left: 2px;
  padding-right: 2px;
}
.card {
  width: 100%;
  height: 75vh;
  margin: auto;
}
.card-body {
  min-height: 50vh;
  overflow-x: scroll;
}
</style>
