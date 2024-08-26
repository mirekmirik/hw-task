import { useCallback } from "react";

// Store
import {
  deleteEventThunk,
  fetchEventByIdThunk,
  fetchEventsThunk,
  postEventThunk,
  putEventThunk,
} from "../store/slices/events";
import { resetState, selectEvents } from "../store/slices/events";
import { useAppDispatch, useAppSelector } from "../store";

// Services
import { FetchEventsParams } from "../services";

// Types
import { EventItem } from "../types";

const useEvents = () => {
  const dispatch = useAppDispatch();

  const { error, events, status, currentEvent } = useAppSelector(selectEvents);

  const isLoading = status === "pending";
  
  const isEmpty = events.length === 0 && !isLoading;

  const fetchEvents = useCallback(
    ({ sort, filters }: FetchEventsParams) => {
      dispatch(fetchEventsThunk({ sort, filters }));
    },
    [dispatch]
  );

  const fetchEvent = useCallback(
    (id: string) => {
      dispatch(fetchEventByIdThunk(id));
    },
    [dispatch]
  );

  const putEvent = useCallback(
    (event: EventItem) => {
      dispatch(putEventThunk(event));
    },
    [dispatch]
  );

  const postEvent = useCallback(
    (event: EventItem) => {
      dispatch(postEventThunk(event));
    },
    [dispatch]
  );

  const deleteEvent = useCallback(
    (id: string) => {
      dispatch(deleteEventThunk(id));
    },
    [dispatch]
  );

  const resetEventsState = useCallback(() => {
    dispatch(resetState());
  }, [dispatch]);

  return {
    events,
    status,
    error,
    currentEvent,
    isEmpty,
    isLoading,
    resetEventsState,
    fetchEvents,
    fetchEvent,
    putEvent,
    postEvent,
    deleteEvent,
  };
};

export default useEvents;
