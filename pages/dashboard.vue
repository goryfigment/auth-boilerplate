<template>
  <h1>Dashboard</h1>

  <p>Hello {{data.user.username}}</p>

  <button @click="signOut({ callbackUrl: '/login' })">Logout</button>
</template>

<script setup>
const { data, signOut } = useAuth()
</script>