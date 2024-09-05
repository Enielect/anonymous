import InboxHeader from "@/components/Inbox/InboxHeader";
import InboxList from "@/components/Inbox/InboxList";
import RenderModal from "@/components/modal/RenderModal";
import { InboxData } from "@/utils/DummyData";
import React from "react";

const InboxHome = () => {
  {
    /* <RenderModal /> */
  }
  return (
    <>
      <div className="fixed w-full px-6 pr-[5.3rem] py-4 bg-[#151515]">
        <InboxHeader />
        {InboxData.length > 0 && <InboxListHeader />}
      </div>
      <section className="w-full py-4 pt-[110px]  h-full">
        <div className=" flex items-center">
          {/* if there is no inbox */}
          {/* if there is an inbox */}
          {InboxData.length > 0 && (
            <div className="w-full ">
              <InboxList />
            </div>
          )}
        </div>
      </section>
      {InboxData.length === 0 && <NoInbox />}
    </>
  );
};

export default InboxHome;

function InboxListHeader() {
  return (
    <div className="grid bg-[#151515] grid-cols-4 py-[12px] px-[20px] w-full justify-between">
      <div>Inbox name</div>
      <div>Total messages</div>
      <div>Date Created</div>
      <div></div>
    </div>
  );
}

function NoInbox() {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="max-w-[300px] overflow-y-hidden  flex flex-col gap-4 justify-center items-center text-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[85px] h-[85px]"
        >
          <path
            d="M8.3335 191.667L24.5835 135.833C21.9446 130.139 19.9654 124.306 18.646 118.333C17.3266 112.361 16.6668 106.25 16.6668 100C16.6668 88.4722 18.8543 77.6389 23.2293 67.5C27.6043 57.3611 33.5418 48.5417 41.0418 41.0417C48.5418 33.5417 57.3613 27.6042 67.5002 23.2292C77.6391 18.8542 88.4724 16.6667 100 16.6667C111.528 16.6667 122.361 18.8542 132.5 23.2292C142.639 27.6042 151.458 33.5417 158.958 41.0417C166.458 48.5417 172.396 57.3611 176.771 67.5C181.146 77.6389 183.333 88.4722 183.333 100C183.333 111.528 181.146 122.361 176.771 132.5C172.396 142.639 166.458 151.458 158.958 158.958C151.458 166.458 142.639 172.396 132.5 176.771C122.361 181.146 111.528 183.333 100 183.333C93.7502 183.333 87.6391 182.674 81.6668 181.354C75.6946 180.035 69.8613 178.056 64.1668 175.417L8.3335 191.667ZM32.9168 167.083L59.5835 159.167C61.5279 158.611 63.5071 158.403 65.521 158.542C67.5349 158.681 69.4446 159.167 71.2502 160C75.6946 162.222 80.3474 163.889 85.2085 165C90.0696 166.111 95.0002 166.667 100 166.667C118.611 166.667 134.375 160.208 147.292 147.292C160.208 134.375 166.667 118.611 166.667 100C166.667 81.3889 160.208 65.625 147.292 52.7083C134.375 39.7917 118.611 33.3333 100 33.3333C81.389 33.3333 65.6252 39.7917 52.7085 52.7083C39.7918 65.625 33.3335 81.3889 33.3335 100C33.3335 105 33.8891 109.931 35.0002 114.792C36.1113 119.653 37.7779 124.306 40.0002 128.75C40.9724 130.556 41.4932 132.465 41.5627 134.479C41.6321 136.493 41.389 138.472 40.8335 140.417L32.9168 167.083ZM91.6668 133.333H108.333V108.333H133.333V91.6667H108.333V66.6667H91.6668V91.6667H66.6668V108.333H91.6668V133.333Z"
            fill="#FEFEFE"
            fill-opacity="0.7"
          />
        </svg>
        <span className="text-[12px]">
          Hi! Welcome to our platform. Get started by creating a new inbox.
        </span>
      </div>
    </div>
  );
}
