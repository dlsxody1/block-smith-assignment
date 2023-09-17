import React from "react";

const AnnounceArticle = () => {
  const mockArr = Array(10)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        className=" pt-4 pr-6 pb-5 pl-6 items-start gap-3 self-stretch cursor-pointer hover:bg-articleHover"
      >
        <div className="font-normal text-base mb-3">
          공백포함 100자 알림 목록에서 알림 제목은 전부 노출하되 영역을 넘는
          경우 다음과 같이 줄 바꿈으로 표현합니다. 알림 목록에서 알림 제목은
          전부 노출하되 영역을 넘는 경우 다음과
        </div>
        <div className="text-announceTime text-sm font-normal">방금 전</div>
      </div>
    ));
  return mockArr;
};

export default AnnounceArticle;
