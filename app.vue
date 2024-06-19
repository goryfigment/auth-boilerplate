<script setup>

const { toast, message, color, showToast } = useToast()

provide('toast', toast)
provide('message', message)
provide('color', color)
provide('showToast', showToast)
</script>

<template>
  <v-snackbar v-model="toast" :color="color" :timeout="3000" location="top">
    {{ message }}
  </v-snackbar>
  <NuxtPage />
</template>
