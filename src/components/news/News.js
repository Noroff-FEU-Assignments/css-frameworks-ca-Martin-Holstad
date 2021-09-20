import React from 'react'
import Cards from "./Cards"
import Container from "react-bootstrap/Container"
import NewsPagination from "./Pagination"

function News() {
  return (
    <main className="news-main">
      <Container>
        <h1 className="news-header">News</h1>
      </Container>
      <NewsPagination />
      < Cards />
      <NewsPagination />
    </main>
  )
}

export default News
