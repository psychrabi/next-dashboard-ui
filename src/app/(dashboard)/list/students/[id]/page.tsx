import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs-tinysrgb&w=1200"
                }
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Jane Doe</h1>
                <FormModal
                  table="student"
                  type="update"
                  data={{
                    id: 1,
                    username: "1234567890",
                    firstName: "Sriga",
                    lastName: "Shrestha",
                    email: "srigastha@gmail.com",
                    password: "password",
                    photo:
                      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    phone: "+9779860240841",
                    birthday: "1990-11-09",
                    address: "Tokha-11, Mahadevtar, Tokha, Kathmandu, Nepal",
                    bloodType: "A+",
                    sex: "male",
                  }}
                />
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>Nov 9, 2025</span>
                </div>
                <div className="w-full md:1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>john@doe.com</span>
                </div>
                <div className="w-full md:1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>-977 9813065944</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%]">
              <Image
                src={"/singleBranch.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%]">
              <Image
                src="/SingleLesson.png"
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%]">
              <Image
                src={"/singleClass.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 rounded-md h-[800px]">
          <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSky" href={`/`}>
              Student&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href={`/list/teachers?classId=${2}`}
            >
              Student&apos;s Teachers
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSky"
              href={`/list/lessons?classId=${2}`}
            >
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-lamaSky" href={`/list/exams?classId=${2}`} >
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurple" href={`/list/assignments?classId=${2}`} >
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurple" href={`/list/results?studentId=${"student2"}`} >
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
