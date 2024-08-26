import { createSlice } from "@reduxjs/toolkit";

// Types
import { EventItem } from "../../../types/types";

// Thunks
import {
  deleteEventThunk,
  fetchEventByIdThunk,
  fetchEventsThunk,
  postEventThunk,
  putEventThunk,
} from "./eventsThunks";

export interface EventsState {
  events: EventItem[];
  currentEvent: EventItem | null;
  status: "pending" | "rejected" | "fullfield" | "idle";
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  status: "idle",
  error: null,
  currentEvent: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchEventsThunk.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchEventsThunk.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.events = action.payload;
      })
      .addCase(fetchEventsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      })
      // GET Single
      .addCase(fetchEventByIdThunk.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchEventByIdThunk.fulfilled, (state, action) => {
        state.currentEvent = action.payload;
        state.status = "fullfield";
      })
      .addCase(fetchEventByIdThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      })
      // POST
      .addCase(postEventThunk.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(postEventThunk.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.events.push(action.payload);
      })
      .addCase(postEventThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      })
      // PUT
      .addCase(putEventThunk.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(putEventThunk.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.events = state.events.map((event) => {
          if (event.id === action.payload.id) {
            return action.payload;
          }
          return event;
        });
      })
      // DELETE
      .addCase(putEventThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      })
      .addCase(deleteEventThunk.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(deleteEventThunk.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.events = state.events.filter((event) => {
          return event.id !== action.payload.id;
        });
      })
      .addCase(deleteEventThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = eventsSlice.actions;

export default eventsSlice.reducer;
