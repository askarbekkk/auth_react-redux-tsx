import {EventActionEnum, SetEventsAction} from "./types";
import {SetGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import axios from 'axios'
import UserService from "../../../api/UserService";
export const EventActionCreators = {
    setGuests: (payload: IUser[]) : SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]) : SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
         dispatch(EventActionCreators.setGuests(response.data))
        } catch(e){
            console.log(e)
        }
    }
}