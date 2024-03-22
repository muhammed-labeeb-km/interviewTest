import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
import { itemView } from '../API/appAPI';

function Items() {
    const [datas, setDatas] = useState([]);

    const getDatas = async () => {
        try {
            const result = await itemView();
            if (result.status === 200) {
                setDatas(result.data);
                console.log(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDatas();
    }, []);

    return (
        <div className="p-5">
            <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4} className='g-4'>
                {datas.length > 0 && datas.map((i, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Img variant="top" src={i.image} height='200px' />
                            <hr />
                            <Card.Body>
                                <Card.Title>{i.title <10? i.title : `${i.title.slice(0,10)}...`}</Card.Title>
                                <Card.Text>
                                {i.description.length < 20 ? i.description : `${i.description.slice(0, 20)}...`}
                                </Card.Text>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Items;
