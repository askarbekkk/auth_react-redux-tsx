import React, {FC, useState} from 'react';
import {Calendar, Row, Button, Modal} from "antd";
import {IEvent} from "../models/IEvent";
import EventForm from "./EventForm";
interface EventCalendarProps {
    events : IEvent[],
}

const EventCalendar : FC<EventCalendarProps> = () => {



    return (
        <>


        </>
    );
};

export default EventCalendar;