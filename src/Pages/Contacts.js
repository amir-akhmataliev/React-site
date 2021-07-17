import React, { Component} from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faVk, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500 px'}}>
                <h1 className="text-center mt-2"> Связаться со мной </h1>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label> Адрес электронной почты </Form.Label>
                        <Form.Control type="email" placeholder="Введите email" />
                        <Form.Text>
                            Ваш email останется конфиденциальным
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Текст сообщения </Form.Label>
                        <Form.Control as="textarea" rows="10" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Проверил перед отправкой" />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Отправить </Button>
                    <div className="text-center" >
                        <h1 className="social-title mt-5"> Мои ссылки </h1>
                        <a href="https://www.youtube.com/channel/UCCHkx-O4rU8oOl4n_9hx2jQ"
                        className="youtube social mt-5"
                        >
                        <FontAwesomeIcon icon={faYoutube} size="3x" />
                        </a>
                        <a href="https://www.instagram.com/awrld.s/"
                        className="instagram social"
                        >
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                        </a>
                        <a href="https://vk.com/awrlds"
                        className="vk social"
                        >
                        <FontAwesomeIcon icon={faVk} size="3x" />
                        </a>
                        <a href="https://tele.click/awrlds"
                        className="tg social"
                        >
                        <FontAwesomeIcon icon={faTelegram} size="3x" />
                        </a>
                    </div>
                </Form>
            </Container>
        )
    }
}