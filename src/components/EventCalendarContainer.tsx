import Image from "next/image";
import EventCalendar from "./EventCalendar";
import EventList from "./EventList";

const EventCalendarContainer = async ({
  searchParams,
}: {
  searchParams: Promise<{ [keys: string]: string | undefined }>;
}) => {
  const { date } = await searchParams;
  return (
    <div className="bg-white p-4 rounded-md">
      <EventCalendar />
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
