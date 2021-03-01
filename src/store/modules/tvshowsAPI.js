//nacin implementacije apija koji se u ovom slucaju nece koristiti
//htio sam da odvojim script i template

/*
import axios from 'axios'
import router from '@/router'

export default
{

    namespaced: true,

    state: 
    {
            showsResponse: []

    },

    getters: 
    {

            getShowsResponses : state => {return state.showsResponse}


    },

    mutations: {

        setShowsResponses(state, value)
        {
            
                state.showsResponse = value

        }

    },

    actions: {



        fetchApiData(state, value ){

                axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5dc9a3781f42af69c2b5049477186671&language=en-US&page=1')
                .then(response => {
                    


                    state.commit("setShowsResponses", response.data.results)

                
                })
                .catch(error => {
                  console.log(error)
                })


        }

    




    }
    



}

*/