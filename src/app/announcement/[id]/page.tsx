import DeleteButton from "@/app/components/Button/DeleteButton";
import GoToListButton from "@/app/components/Button/GoToListButton";
import ModifyButton from "@/app/components/Button/ModifyButton";
import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1120px] h-[1156px] flex-shrink-0  ">
          <div className="mt-[60px] text-base font-semibold">공지사항</div>
          <div className="w-[800px] flex pt-[60px] pb-[64px] flex-col items-center ">
            <div className="flex justify-between pb-0 items-center self-stretch pb-6 border-b border-[#EDEDED] ">
              <div className="font-semibold text-[32px] whitespace-pre-wrap ">
                공지사항공백포함 100자 알림 목록에서 알림 제목은 전부 노출하되
                영역을 넘는 경우 다음과 같이 줄 바꿈으로 표현합니다. 알림
                목록에서 알림 제목은 전부 노출하되 영역을 넘는 경우 다음과
                123123123213123123123213123123123213123123123213
              </div>
            </div>
          </div>
          <div className="bg-[#EDEDED] w-[800px] h-px"></div>
          <div className="space-x-3 mt-4">
            <GoToListButton />
            <ModifyButton />
            <DeleteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
