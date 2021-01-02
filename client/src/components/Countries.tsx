import React from 'react';
///useQuery and gql 
import {useQuery, gql} from '@apollo/client';
//csss
import '../App.css'

const COUNTRIES_DETAIL = gql`
  query CountriesDetail{
      countries{
          id
          country
          population
          growth
          description
          image
      }
  }
`

export const Countries =()=> {
   //useQuery
   const {data,loading,error} = useQuery(COUNTRIES_DETAIL);

   if(loading){
       return <h3>loading ...</h3>
   }
   if(error){
       return<h3>Error</h3>
   }
   const { countries } = data;
    return(
        <div>
           {
              countries.map((count:any) => (
                  <div key={count.id}>
                      <h3 className="headthree">{count.country}</h3>
                      <div className="collection">
                      <img src={count.image} alt="" className="img"/>
                     <p>{count.description}</p>
              </div>
                  </div>
              ))
           }
        </div>
    )
}