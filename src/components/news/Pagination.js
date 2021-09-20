import React from 'react'
import Pagination from "react-bootstrap/Pagination"
import Container from "react-bootstrap/Container"


function NewsPagination() {
  return (
    <Container>
      <Pagination className="mt-5 mb-4" size="lg">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    </Container>
  )
}


export default NewsPagination
