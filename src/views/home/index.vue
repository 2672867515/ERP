<template>
  <div>
    home
    <div class="a" @click="aa">aaa</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    aa() {
      this.$router.push({ path: '/layout/department' })
    }
  }
}
</script>

<style>

</style>
