import React, { Component} from 'react'
import { Container, Media, Row, Col, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width ={300}
                                height={100}
                                className="mr-3"
                                src="https://spb.hh.ru/employer-logo/3317293.jpeg"
                            />
                            <Media.Body>
                                <h5>Пост о практике</h5>
                                <p>
                                    Прохожу производственную практику в компании ООО "Софтлинк"
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5" > Категории </h5>
                        <Card className="m-3">
                            <ListGroup variant="flush">
                                <ListGroup.Item> Учеба </ListGroup.Item>
                                <ListGroup.Item> Внеучебка </ListGroup.Item>
                                <ListGroup.Item> Практика </ListGroup.Item>
                                <ListGroup.Item> Путешествия </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3 m-3" bg="light">
                            <Card.Body>
                                <Card.Title> Актуальное </Card.Title>
                                <Card.Text>
                                    Изучаю React.js
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}