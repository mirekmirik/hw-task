import { useEffect } from "react";

// Components"
import FilterBox from "../../components/FilterBox/FilterBox";
import { Error, EventList, SortDropdown, SortOptions } from "../../components";

// Types
import { EventItem } from "../../types";

// UI
import { Card, Heading, Loader } from "../../ui";

// Utils
import { serializeFilters } from "../../utils";

// Hooks
import { useEvents, useUrlParams } from "../../hooks";

// Styles
import "./Events.scss";

const SORT_OPTIONS: SortOptions<EventItem> = {
  date_asc: {
    label: "Planned date - asc",
    value: "date,time",
  },
  date_desc: {
    label: "Planned date - desc",
    value: "-date,-time",
  },
  name_asc: {
    label: "Name - asc",
    value: "name",
  },
  name_desc: {
    label: "Name - desc",
    value: "-name",
  },
};

const Events = () => {
  const { searchParams, updateParams } = useUrlParams();

  const sortParam = searchParams.get("sort") || "date,time";
  const filterParam = searchParams.get("filter");

  const { events, fetchEvents, isEmpty, isLoading, deleteEvent, error } =
    useEvents();

  useEffect(() => {
    fetchEvents({ sort: sortParam, filters: filterParam });
  }, [sortParam, filterParam, fetchEvents]);

  const handleSortChange = (value: string) => {
    updateParams("sort", value);
  };

  const handleSubmitFilter = (filters: { [key: string]: string }) => {
    const serializedFilters = serializeFilters(filters);
    updateParams("filter", serializedFilters);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error text={error} />;

  return (
    <div className="events">
      <div className="events__backside">
        <Card className="events__filter-box">
          <FilterBox onSubmit={handleSubmitFilter} value={filterParam} />
        </Card>
        <div className="events__sort-dropdown">
          <SortDropdown
            defaultOption={sortParam}
            sortOptions={SORT_OPTIONS}
            onChange={handleSortChange}
          />
        </div>
      </div>
      {isEmpty ? (
        <Heading level={1} className="events__empty">
          There are no events
        </Heading>
      ) : (
        <EventList list={events} onDelete={deleteEvent} />
      )}
    </div>
  );
};

export default Events;
