<template>
  <h1 class="text-4xl text-center py-20 text-black font-bold">
    Hi! {{ name }}👋
  </h1>
</template>
<script>
export default {
  props: {
    user: String
  },
  setup(props) {
    const name = props.user[0].toUpperCase() + props.user.slice(1, props.user.length)
    return {
      name
    }
  }
}
</script>
