import Image from "next/image";

const announcements = [
  {
    id: 1,
    title: "Lorem, ipsum dolor",
    date: "2024-12-25",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, totam.",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor",
    date: "2024-12-25",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, totam.",
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor",
    date: "2024-12-25",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, totam.",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((announcement) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 odd:bg-lamaYellowLight even:bg-lamaPurpleLight"
            key={announcement.id}
          >
            <div
              className="flex items-center justify-between"
              key={announcement.id}
            >
              <h1 className="font-medium">{announcement.title}</h1>
              <span className="text-gray-400 text-xs bg-white rounded-md p-1">
                {announcement.date}
              </span>
            </div>
            <p className="mt-1 text-gray-400 text-sm">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
