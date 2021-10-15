import React, { useState,FC} from 'react';
import {Form, Input, DatePicker, Button, Row, Select} from "antd";
import rules from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";


interface EventFormProps {
    guests : IUser[]
}


const EventForm : FC<EventFormProps>  = (props) => {
const [event, setEvent] = useState<IEvent>({
    author: '',
    date:'',
    description: '',
    guest: ''
} as IEvent)
    console.log(props.guests, '****')
    return (
        <Form>
            <Form.Item
                label="Description of an event"
                name="description"
                rules={[ rules.required('Please write the description of event') ]}
            >
                <Input
                />
            </Form.Item>
            <Form.Item
                label="Date of an event"
                name="date"
                rules={[ rules.required('Please choose the date of event') ]}

            >

                <DatePicker/>
            </Form.Item>
<Form.Item
    label="Choose a guest"
            name="guest"
            rules={[ rules.required('Please choose the guest of event') ]}


>

    <Select  onChange={(guest : string) => setEvent({...event, guest})}>
        {

            props.guests.map(guest =>

                <Select.Option key={guest.username} value={guest.username}>
                    {guest.username}
                    </Select.Option>
            )
        }
    </Select>
</Form.Item>



          <Row justify={'end'}>
              <Form.Item>
                  <Button type="primary" htmlType="submit" >
                      Add
                  </Button>
              </Form.Item>
          </Row>
        </Form>
    );
};

export default EventForm;