import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef } from "react";

const EventsFilterForm = () => {
  const router = useRouter();
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const filterEvents = (e) => {
    e.preventDefault();
    router.push(`/events/${monthRef.current.value}/${yearRef.current.value}`);
  };
  return (
    <form onSubmit={filterEvents}>
      <div
        style={{
          display: "flex",
          padding: "15px",
          boxShadow:
            "0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <label style={{ marginRight: "5px" }}>Year</label>
          <select ref={yearRef}>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
            <option value={"2023"}>2023</option>
          </select>
        </div>
        <div>
          <label style={{ marginRight: "5px" }}>Month</label>
          <select ref={monthRef}>
            <option value={"1"}>January</option>
            <option value={"2"}>Feburary</option>
            <option value={"3"}>March</option>
            <option value={"4"}>April</option>
            <option value={"5"}>May</option>
            <option value={"6"}>June</option>
            <option value={"7"}>July</option>
            <option value={"8"}>August</option>
            <option value={"9"}>September</option>
            <option value={"10"}>October</option>
            <option value={"11"}>November</option>
            <option value={"12"}>December</option>
          </select>
        </div>
        <div>
          <input value={"Filter Event"} type={"submit"} />
        </div>
      </div>
    </form>
  );
};

export default EventsFilterForm;
