"use client";

import { deleteSubject } from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  JSX,
  SetStateAction,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

const deleteActionMap = {
  subject: deleteSubject,
  // class: deleteClass,
  // teacher: deleteTeacher,
  // student: deleteStudent,
  // parent: deleteParent,
  // lesson: deleteLesson,
  // exam: deleteExam,
  // assignment: deleteAssignment,
  // result: deleteResult,
  // Event: deleteEvent,
  // announcement: deleteAnnouncement,
};

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <p>Loading...</p>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <p>Loading...</p>,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <p>Loading...</p>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <p>Loading...</p>,
});

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any
  ) => JSX.Element;
} = {
  teacher: (setOpen, type, data) => (
    <TeacherForm type={type} data={data} setOpen={setOpen} />
  ),
  student: (setOpen, type, data) => (
    <StudentForm type={type} data={data} setOpen={setOpen} />
  ),
  parent: (setOpen, type, data) => (
    <ParentForm type={type} data={data} setOpen={setOpen} />
  ),
  subject: (setOpen, type, data) => (
    <SubjectForm type={type} data={data} setOpen={setOpen} />
  ),
};
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "event"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    const [state, formAction] = useActionState(deleteActionMap[table], {
      success: false,
      error: false,
    });

    const router = useRouter();

    useEffect(() => {
      if (state.success) {
        toast.success("Subject has been deleted");
        setOpen(false);
        router.refresh();
      }
    }, [state]);

    return type === "delete" && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="text | number" value={id} hidden name="id" readOnly />
        <span className="text-center font-medium">
          Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data)
    ) : (
      "Forms not found"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} height={16} width={16} alt={`${type}`} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/close.png"
                alt="close button"
                height={14}
                width={14}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
