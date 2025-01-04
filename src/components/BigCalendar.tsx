"use client";

import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: {
    title: string;
    start: Date;
    end: Date;
  }[];
}) => {
  const [view, setView] = useState(Views.WORK_WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <div className="h-full">
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2025, 1, 0, 9, 0, 0)}
        max={new Date(2025, 1, 0, 18, 59, 59)}
      />
    </div>
  );
};

export default BigCalendar;
