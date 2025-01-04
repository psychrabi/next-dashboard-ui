import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const Announcements = async () => {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const roleConditions = {
    teacher: { lessons: { some: { teacherId: userId! } } },
    student: { students: { some: { id: userId! } } },
    parent: { students: { some: { parentId: userId! } } },
  };

  const data = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: "desc" },
    where: {
      ...(role !== "admin" && {
        OR: [
          { classId: null },
          {
            class: roleConditions[role as keyof typeof roleConditions] || {},
          },
        ],
      }),
    },
  });

  console.log(data);
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {data.map((announcement) => (
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
                {new Intl.DateTimeFormat("en-US").format(announcement.date)}
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
