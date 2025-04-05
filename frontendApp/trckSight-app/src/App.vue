<template>
  <v-app>
    <!-- App Bar with Dynamic Theme and Notifications -->
    <v-app-bar app dark color="primary">
      <v-img
        src="/6611-johnson-control_logo.webp"
        alt="Johnson Control Logo"
        height="60"
        class="mr-2"
      ></v-img>
      <v-spacer></v-spacer>
      <!-- Dropdown Menu -->
      <v-menu bottom left>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="goToLogin">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToRegister">
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Notifications Bell Icon -->
      <v-btn icon @click="openNotifications">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer with Additional Links -->
    <v-footer color="primary" app>
      <v-row justify="center" align="center" class="pa-2">
        <v-img src="/JCI-48affaa2.png" alt="Johnson Control Logo" height="30"></v-img>
        <v-spacer></v-spacer>
        <v-btn text class="white--text">Privacy</v-btn>
        <v-btn text class="white--text">Terms</v-btn>
        <v-btn text class="white--text">Contact</v-btn>
        <span class="ml-2 white--text">© 2025 Johnson Control</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();

    const goToLogin = () => {
      router.push({ name: 'Login' });
    };

    const goToRegister = () => {
      router.push({ name: 'Register' });
    };

    const openNotifications = () => {
      // Trigger notifications logic
    };

    return { goToLogin, goToRegister, openNotifications };
  },
});
</script>

<style scoped>
/* AppBar styling */
.v-app-bar {
  transition: background-color 0.3s ease;
}

/* Footer */
.v-footer {
  background-color: #1e2a3a;
  color: white;
}

/* Styling for rounded buttons with shadow effect */
.rounded-btn {
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.rounded-btn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Elevation and shadow on hover */
.v-btn:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
