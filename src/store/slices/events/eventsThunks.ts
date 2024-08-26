import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { EventItem } from "../../../types/types";

// Services
import {
  deleteEvent,
  fetchEventById,
  fetchEvents,
  FetchEventsParams,
  postEvent,
  putEvent,
} from "../../../services/eventsService";

// Utils
import { handleApiError } from "../../../utils";

// GET /events;
export const fetchEventsThunk = createAsyncThunk<
  EventItem[],
  FetchEventsParams
>("events/fetchEvents", async ({ sort, filters }, { rejectWithValue }) => {
  try {
    return await fetchEvents({ sort, filters });
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// GET /events/:id
export const fetchEventByIdThunk = createAsyncThunk<EventItem, string>(
  "events/fetchEventById",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchEventById(id);
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

// POST /event
export const postEventThunk = createAsyncThunk<EventItem, EventItem>(
  "events/postEvent",
  async (event, { rejectWithValue }) => {
    try {
      return await postEvent(event);
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

// PUT /event
export const putEventThunk = createAsyncThunk<EventItem, EventItem>(
  "events/putEvent",
  async (event, { rejectWithValue }) => {
    try {
      return await putEvent(event);
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

// DELETE /event
export const deleteEventThunk = createAsyncThunk<EventItem, string>(
  "events/deleteEvent",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteEvent(id);
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
