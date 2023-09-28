import { UpdateProps } from "@/app/types/AnnouncementTypes";
import React from "react";
import { useRouter } from "next/navigation";

const SaveButton = ({ title, content, id }: UpdateProps) => {
  const router = useRouter();
  const saveAnnouncement = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/announcement/${id}/edit`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json", // JSON 형식의 데이터를 보낼 것이므로 Content-Type을 설정합니다.
          },
          body: JSON.stringify({
            title,
            content,
            id,
            createdAt: new Date(),
          }),
        }
      );
      router.push("/");
      const data = await res.json();
      return data.announcement;
    } catch (err) {
      alert(err);
    }
  };

  return (
    <button
      type="button"
      onClick={() => saveAnnouncement}
      className="rounded-md bg-[#FF5C00] pt-2 pb-2 pr-3 pl-3 gap-2 text-center h-[38px] text-white"
    >
      저장
    </button>
  );
};

export default SaveButton;
