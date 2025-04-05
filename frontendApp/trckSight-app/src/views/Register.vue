<template>
  <v-container class="d-flex justify-end align-center" style="height: 100vh;">
    <v-row justify="end" align="center" style="width: 100%">
      <!-- Left side card with an image -->
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card class="pa-4">
          <v-img src="https://via.placeholder.com/400" alt="App Image" height="100%" contain />
          <!-- You can replace the above URL with the actual image you want to display -->
        </v-card>
      </v-col>

      <!-- Right side register form -->
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card class="pa-4" max-width="400px">
          <v-card-title class="headline">Register</v-card-title>
          <v-form>
            <v-text-field label="Email" v-model="email" type="email" outlined />
            <v-text-field label="Password" v-model="password" type="password" outlined />
            <v-text-field label="Confirm Password" v-model="confirmPassword" type="password" outlined />

            <v-btn color="primary" @click="register">Register</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Register',
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const register = () => {
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
      } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
      }
    };

    return { email, password, confirmPassword, register };
  },
});
</script>
