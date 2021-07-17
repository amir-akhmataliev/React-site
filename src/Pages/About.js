import React, { Component} from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'
import ProgressBar from "../Components/Progress"
import fileSaver from 'file-saver';

const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "../assets/resume.pdf",
      "resume.pdf"
    );
}

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Образование </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Хобби </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Программирование </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="mt-2" src="https://avatars.mds.yandex.net/get-zen_doc/18497/pub_5d13677b04ea7a00af9be3d5_5d13680c9af86f00b699b8fb/scale_1200"  height="500" width="800" />
                                    <p className="text mt-2">
                                        Студент 3 курса факультета информатики направления "Прикладная математика и информатика" СНИУ им академика С.П.Королёва
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="mt-2" src="https://cdn.pixabay.com/photo/2015/01/21/00/56/football-606235_1280.jpg" height="500" width="800"/>
                                    <p className="text mt-2">
                                        Люблю иногда поиграть с друзьями в футбол, также занимался волейболом
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="mt-2" src="https://blog.rsisecurity.com/wp-content/uploads/2020/08/Cloud.jpg" height="500" width="800"/>
                                    <p className="text mt-2">
                                    Есть опыт в написании небольших программ на различных языках программирования (C\C++, PHP, JavaScript и др.). Также имеется опыт в дизайне в figma и создании БД сайтов.
                                    В данное время занимаюсь разработкой личного сайта блога на React.js и Bootstrap
                                    </p>
                                    <h1> Навыки </h1>
                                    <p className="text"> C++/Java/Python/HTML/CSS/Unix </p>
                                    <ProgressBar value={25} max={100} />
                                    <p> Начальный </p>
                                    <p className="text"> React.js/Bootstrap </p>
                                    <ProgressBar value={50} max={100} />
                                    <p> Базовый </p>
                                    <p className="text"> SQL/Figma/Photoshop </p>
                                    <ProgressBar value={75} max={100} />
                                    <p> Опытный </p>
                                    <a className="text mt-2" href="https://samara.hh.ru/resume_converter/%D0%90%D1%85%D0%BC%D0%B0%D1%82%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%20%D0%90%D0%BC%D0%B8%D1%80.pdf?hash=6991042eff09127bbf0039ed1f6f366b6f4b75&type=pdf&hhtmSource=resume_view&hhtmFrom=resume_list" download> Скачать моё резюме</a>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}