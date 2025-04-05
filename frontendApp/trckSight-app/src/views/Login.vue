<template>
  <v-container class="d-flex justify-end align-center" style="height: 100vh;">
    <v-row justify="center">
      <!-- Adjusting the card's max-width to make it larger -->
      <v-col cols="12" sm="8" md="6" lg="4"> <!-- Adjust the column size for responsiveness -->
        <v-card class="pa-4" max-width="500px"> <!-- Change max-width here for medium size -->
          <v-card-title class="headline">Login</v-card-title>
          <v-form>
            <v-text-field label="Email" v-model="email" type="email" outlined />
            <v-text-field label="Password" v-model="password" type="password" outlined />
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');

    const login = () => {
      console.log(`Email: ${email.value}, Password: ${password.value}`);
    };

    return { email, password, login };
  },
});
</script>
