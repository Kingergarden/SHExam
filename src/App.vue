<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>

  <div class="my-2">
            <v-btn
              v-on:click="changeDirection()"
              color="warning"
              dark
              >
                 {{}}
            </v-btn>
          </div>
    </v-app-bar>

    <v-main>
    </v-main>
<router-view></router-view>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    number: 1,
    changedDirections: false
  }),

  methods: {
      changeDirection(){

        debugger
          console.log (this.$router.components);

                if(!this.changedDirections)
                {
                  this.changedDirections = 1;
                  this.$router.push('/tvshows/');
                }

                else
                {
                    this.changedDirections = 0;
                    this.$router.push('/movies/')

                }

      }


  }
};
</script>
