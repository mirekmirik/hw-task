import { RootState } from "../../store";

export const selectEvents = (state: RootState) => state.events;
export const selectEventsList = (state: RootState) => state.events.events;
export const selectEventsError = (state: RootState) => state.events.error;
export const selectEventsStatus = (state: RootState) => state.events.status;
export const selectEventsCurrentEvent = (state: RootState) =>
  state.events.currentEvent;
