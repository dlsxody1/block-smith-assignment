import React, { useRef } from "react";

const DeleteButton = ({id}: {id : string}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const deleteAnnouncement = async (id: string) => {
    const res = await fetch(
      `http://localhost:3000/api/announcement/${id}/edit`,
      {
        method: "delete",
      }
    );
    const data = await res.json();
    return data.announcement;
  };
  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className="rounded-md bg-[#F00] pt-2 pb-2 pr-3 pl-3 gap-2 text-center h-[38px] text-white"
      >
        삭제
      </button>
      <div>
        <dialog
          ref={modalRef}
          className="w-96 h-96 p-4 bg-white rounded-md shadow-md"
        >
          <p className="text-lg mb-4">정말 삭제하시겠습니까?</p>
          <div className="flex justify-end">
            <button
              onClick={() => {
                deleteAnnouncement;
              }}
              className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              삭제
            </button>
            <button
              onClick={() => {
                modalRef.current?.close();
              }}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              취소
            </button>
          </div>
        </dialog>
        <div />
      </div>
    </>
  );
};

export default DeleteButton;
