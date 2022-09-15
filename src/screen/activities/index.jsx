import React from 'react'
import { Card, Stack, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import { StyledTitle, StyledDescription } from './styles'

const Activities = () => {
  const { activities } = useSelector(state => state.activities)
  return (
    <>
      <StyledTitle className='fs-2 my-4 fw-semibold text-center'>
        Actividades
      </StyledTitle>
      <Stack className='mx-auto w-75'>
        <Row as='ul' className='ps-0 justify-content-center'>
          {activities.length > 0 ? (
            activities.map(({ id, title, description }) => {
              return (
                <Col
                  as='li'
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={3}
                  className='mb-3'
                  key={id}
                >
                  <Card>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <StyledDescription>{description}</StyledDescription>
                      <LinkContainer to={`${id}`}>
                        <Card.Link href='#'>Ver más</Card.Link>
                      </LinkContainer>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          ) : (
            <p>No hay actividades</p>
          )}
        </Row>
      </Stack>
    </>
  )
}

export default Activities
