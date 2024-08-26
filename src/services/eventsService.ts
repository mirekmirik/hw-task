// Types
import { API_URL } from "../config";
import { EventItem } from "../types/types";

// Utils
import { fetchApi } from "../utils";

export type FetchEventsParams = {
  sort: string;
  filters: string | null;
};

// GET
export const fetchEvents = ({
  sort,
  filters,
}: FetchEventsParams): Promise<EventItem[]> => {
  let query = "";
  if (sort) {
    query += `?_sort=${sort}`;
  }
  if (filters) {
    query += `&${filters}`;
  }

  return fetchApi<EventItem[]>(`${API_URL}/events${query}`);
};

// GET By ID
export const fetchEventById = (id: string): Promise<EventItem> => {
  return fetchApi<EventItem>(`${API_URL}/events/${id}`);
};

// POST
export const postEvent = (event: EventItem): Promise<EventItem> => {
  return fetchApi<EventItem>(`${API_URL}/events`, {
    method: "POST",
    body: JSON.stringify(event),
  });
};

// PUT
export const putEvent = async (event: EventItem): Promise<EventItem> => {
  return fetchApi<EventItem>(`${API_URL}/events/${event.id}`, {
    method: "PUT",
    body: JSON.stringify(event),
  });
};

// DELETE
export const deleteEvent = (id: string): Promise<EventItem> => {
  return fetchApi<EventItem>(`${API_URL}/events/${id}`, {
    method: "DELETE",
  });
};
