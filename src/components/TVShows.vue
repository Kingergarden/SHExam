<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="imagePath + item.poster_path"
            aspect-ratio="1"
          ></v-img>
<v-card-title primary-title>
            <div>
              <h2>{{item.title}}</h2>
              <div>Rank: {{item.vote_average}}</div>
            </div>
          </v-card-title>
 <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          View
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Description
          <br>
        </v-card-title>

        <v-card-text>
                {{item.overview}}
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>

  </div>
  
</v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>



<script>

import axios from 'axios'
import strings from './helpers/strings'


  /* arhitektura primanja api poziva iz kontrolera


  import {mapGetters} from 'vuex'

  export default {
  data () {
    return {
      //wholeResponse: [],
      imagePath : "https://image.tmdb.org/t/p/original/",
      loading: true,
    }
  },

  updated(){},

  components: {},

  computed: {
    ...mapGetters({

          response: "tvshowsAPI/getShowsResponses"

      }
    ), 

        responseAPI: {
            get(){
                
                return this.response;
            },

          set(value){
              return value;
          }

        }

  },

  mounted () {

              this.$store.dispatch("tvshowsAPI/fetchApiData");          

  }, 

  methods: {



  }
}
*/ 

export default {


  
  data () {
    return {
      wholeResponse: [],
      imagePath : "https://image.tmdb.org/t/p/original/",
      loading: true,
    }
  },
  mounted () {
  axios
    .get(strings.API_URL)
    .then(response => {
     this.wholeResponse = response.data.results;
     
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  }, 
  methods: {
  }
}


</script>