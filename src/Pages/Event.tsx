import React, {useEffect, useState} from 'react';
import {Button, Calendar, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests} = useActions()
    const {guests} = useTypedSelector(state => state.event)
    useEffect(() => {
        fetchGuests()
    }, [])
    return (
        <Layout>
            <EventCalendar events={[]}/>

            <Calendar/>
            <Row justify='center'>
                <Button
                    onClick={() => setModalVisible(true)}
                >Add an event</Button>
            </Row>
            <Modal
                title='Add an event'
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                />
            </Modal>

        </Layout>
    );
};

export default Event;