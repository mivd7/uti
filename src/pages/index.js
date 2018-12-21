import React from 'react'
import Layout from '../components/Layout'
import LettersBar from '../components/LettersBar'
// import {alphabet} from '../utils/alphabet'
import { Link, graphql } from "gatsby"


export default ({ data }) => {
  const edges = data.allAcclaimedmusicAlbumsCsv.edges
  console.log(edges)

  // function loadLetters(arr) {
  //   for (var i = 0; i < arr.length; i++) {
  //     return arr.slice(i)
  //   }
  // }
  
  // const letters = loadLetters(alphabet)
  // console.log(letters)
  return (
      <div>
        <Layout/>
        <h1>Artist Alphabet</h1>
        <LettersBar />
        <h1>Albums</h1>
       {edges.map(({ node }) => (
          <div key={node.id}>
              {node.PLACE_2018_JUL_15}.  
              <Link to={node.id} path={node.id}>{node.Album}</Link> by 
              <i> {node.Artist}</i> in {node.Year}      
          </div>
        ))}
      </div>
  )
}

export const query = graphql`
query {
  allAcclaimedmusicAlbumsCsv {
    edges {
      node {
        id
        Year
        Artist
        Album
        PLACE_2018_JUL_15
      }
    }
  }
}`
