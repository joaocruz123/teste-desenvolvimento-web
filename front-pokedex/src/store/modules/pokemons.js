import axios from './../../plugins/axios'
import {Loading} from 'quasar'
//import { Notify } from 'quasar'

import {
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from '../mutation_type'

export default {
    namespaced: true,
    state: {
        isLoading: false,
        pokemons:[]
    },
    actions: {
        getPokemons(context) {
            // const obj = JSON.parse(localStorage.access_user)
            // let token = obj.token

            Loading.show()
            axios.request('get', `/pokemons/`, '', { Authorization: '' })
            .then(response => {
                context.commit('GET_DATA_SUCCESS', response.data)
                Loading.hide()
            }).catch(error => {
                context.commit('GET_DATA_FAILURE', response.data)
                this.error = error
            })
        },
        // saveMembro(context, data){
        //     const obj = JSON.parse(localStorage.access_user)
        //     let token = obj.token

        //     Loading.show()
        //     axios.request('post', `/membros/`, data, { Authorization: 'Bearer ' + token })
        //     .then(response => {
        //         context.commit('CREATE_SUCCESS', response.data)
        //         Loading.hide()
        //         Notify.create({
        //             type: 'positive',
        //             message: `Novo membro cadastrado com sucesso.`,
        //             icon: 'done_all'
        //         })
        //     }).catch(error => {
        //         context.commit('GET_DATA_FAILURE', response.data)
        //         this.error = error
        //     })
        // },
        // editMembro(context, params){
        //     const obj = JSON.parse(localStorage.access_user)
        //     let token = obj.token

        //     Loading.show()

        //     let id = params[0]
        //     let data = params[1]

        //     axios.request('put', `/membros/${id}`, data, { Authorization: 'Bearer ' + token })
        //     .then(response => {
        //         context.commit('EDIT_SUCCESS', response.data)
        //         Loading.hide()
        //         Notify.create({
        //             type: 'positive',
        //             message: `Membro editado com sucesso.`,
        //             icon: 'edit'
        //         })
        //     }).catch(error => {
        //         context.commit('GET_DATA_FAILURE', response.data)
        //         this.error = error
        //     })
        // },
        // deleteMembros(context, id){
        //     const obj = JSON.parse(localStorage.access_user)
        //     let token = obj.token

        //     Loading.show()

        //     axios.request('delete', `/membros/${id}`, '', { Authorization: 'Bearer ' + token })
        //     .then(response => {
        //         context.commit('DELETE_SUCCESS', response.data)
        //         Loading.hide()
        //         Notify.create({
        //             type: 'negative',
        //             message: `Membro deletado da base de dados.`,
        //             icon: 'delete_forever'
        //         })
        //     }).catch(error => {
        //         context.commit('GET_DATA_FAILURE', response.data)
        //         this.error = error
        //     })
        // }
    },
    mutations: {
        [GET_DATA_SUCCESS](state, payload) {
            state.pokemons = payload.pokemons
        },
        [GET_DATA_FAILURE](state,payload){

        }
    }
}