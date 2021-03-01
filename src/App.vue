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
                 {{this.btnName}}
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
    btnName: "CHANGE TO TV SHOWS",
    changedDirections: false
  }),

  methods: {
      changeDirection(){

                if(!this.changedDirections)
                {
                  this.changedDirections = 1;
                  this.$router.push('/tvshows/');
                  this.btnName = "CHANGE TO MOVIES"
                }

                else
                {
                    this.changedDirections = 0;
                    this.$router.push('/movies/')
                    this.btnName = "CHANGE TO TV SHOWS"
                }

      }


  }
};
</script>
