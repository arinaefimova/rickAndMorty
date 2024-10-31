
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Character, CharacterResponse, Episode, EpisodeResponse, Location, LocationResponse, QueryParamsCharacters, QueryParamsEpisodes, QueryParamsLocations } from '../../types'



export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterResponse, QueryParamsCharacters>({
        query: ({ name = '', species = '' , gender='', status='', page=1}) => 
          `character/?&name=${name.toLowerCase()}&species=${species.toLowerCase()}&gender=${gender.toLowerCase()}&status=${status.toLowerCase()}&page=${page}`,
      }),
    getAllLocations: builder.query<LocationResponse, QueryParamsLocations>({
        query: ({name='', type='', dimension='', page=1}) => `location/?name=${name.toLowerCase()}&type=${type.toLowerCase()}&dimension=${dimension.toLowerCase()}&page=${page}`,
    }),
    getAllEpisodes: builder.query<EpisodeResponse, QueryParamsEpisodes>({
        query: ({name='', page=1}) => `episode/?name=${name.toLocaleLowerCase()}&page=${page}`,
    }),
    getCharacterById: builder.query<Character, number>({
        query: (id) => `character/${id}`,
      }),
    getEpisodeById: builder.query<Episode, number>({
        query: (id) => `episode/${id}`,
      }),
    getLocationById: builder.query<Location, number>({
        query: (id) => `location/${id}`,
      }),
  }),
})

export const { useGetAllCharactersQuery, useGetAllLocationsQuery,  useGetAllEpisodesQuery,  useGetCharacterByIdQuery, useGetEpisodeByIdQuery, useGetLocationByIdQuery} = characterApi
