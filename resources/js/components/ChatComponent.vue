<template>
  <div>
    <table>
      <tr>
        <td>Notification</td>

      </tr>
      <tr>
        <td>{{ notfy }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ChatComponent",
  data() {
    return {
      notfy: "",
    };
  },
  mounted() {
    //
  },
  mounted() {
    window.Echo.channel("Notification").listen(
      "NotificationRecieved",
      (event) => {
        this.notfy = event.notification;
      }
    );
  },
};
</script>
