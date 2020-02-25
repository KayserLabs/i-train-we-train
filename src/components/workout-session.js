import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import JSONData from "../content/workout-five-by-five.json"
import Img from "gatsby-image"

const WorkoutSession = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  {JSONData.Sessions.map((workout) => {
      return `${workout.title}`;
  })}
  <ul>

  </ul>
</div>)
}

export default WorkoutSession
