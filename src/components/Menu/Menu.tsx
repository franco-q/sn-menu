"use client";
import { useState } from "react";

const Menu = ({ sheets }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal((v) => !v);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[9999]">
        <button
          onClick={toggle}
          className="btn btn-circle swap swap-rotate ms-auto"
        >
          <svg
            className={`swap-${modal ? "on" : "off"} fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className={`swap-${modal ? "off" : "on"} fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          modal ? "modal-open" : ""
        } modal modal-bottom sm:modal-middle`}
      >
        <div className="modal-box bg-slate-900">
          {sheets.map((sheet) => (
            <div key={sheet.id}>
              <a
                href={"#" + sheet.id}
                className="py-4 mb-3 font-mono text-3xl font-[900]"
                onClick={toggle}
              >
                {sheet.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
