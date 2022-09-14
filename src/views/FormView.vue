<template>
  <form class="min-h-screen">
    <label for="user">user:</label>
    <input type="text" name="user" id="user" v-model="user" />
    <label for="pass">Pass:</label>
    <input type="text" name="pass" id="pass" v-model="pass" />
    <button v-on:click.prevent="login" class="btn">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      pass: '',
      logged: false
    }
  },
  methods: {
    login() {
      const formdata = new FormData()
      formdata.append('username', this.user)
      formdata.append('password', this.pass)
      formdata.append('request_token', '')

      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      }

      fetch(
        'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=89c13ea7efe0c2c3828bcae47738a4e6',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            this.$router.push({
              name: 'main',
              params: {
                userObject: this.user
              }
            })
          }
        })
        .catch((error) => console.log('error', error))
    }
  }
}
</script>
