<template>
  <h1>Landing Page</h1>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  }
})
</script>