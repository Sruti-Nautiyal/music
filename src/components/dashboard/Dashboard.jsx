import React, { useState, useEffect } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip } from "recharts";
import "./dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const navi = useNavigate();
  const [opt, setOpt] = useState(true);
  const [custom, setCustom] = useState(99);
  const [category1, setCategory1] = useState(99);
  const [category2, setCategory2] = useState(59);
  const [category3, setCategory3] = useState(39);
  const [category4, setCategory4] = useState(19);
  const [info, setInfo] = useState({});
  const id = localStorage.getItem("id");

  //if not logged in
  useEffect(() => {
    if (!sessionStorage.getItem("id")) {
      navi("/");
    }
  });

  const clickCustom = (d) => {
    axios
      .put(`https://stg.dhunjam.in/account/admin/${id}`, {
        amount: { category_6: d },
      })
      .then((res) => {
        console.log(res.data.data);
        // setCustom(e.target.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clickCatergory1 = (d) => {
    axios
      .put(`https://stg.dhunjam.in/account/admin/${id}`, {
        amount: { category_7: d },
      })
      .then((res) => {
        console.log(res.data.data);
        // setCustom(e.target.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clickCatergory2 = (d) => {
    axios
      .put(`https://stg.dhunjam.in/account/admin/${id}`, {
        amount: { category_8: d },
      })
      .then((res) => {
        console.log(res.data.data);
        // setCustom(e.target.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clickCatergory3 = (d) => {
    axios
      .put(`https://stg.dhunjam.in/account/admin/${id}`, {
        amount: { category_9: d },
      })
      .then((res) => {
        console.log(res.data.data);
        // setCustom(e.target.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clickCatergory4 = (d) => {
    axios
      .put(`https://stg.dhunjam.in/account/admin/${id}`, {
        amount: { category_10: d },
      })
      .then((res) => {
        console.log(res.data.data);
        // setCustom(e.target.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCustom = (e) => {
    console.log(e.target.value);
    setCustom(e.target.value);
    clickCustom(e.target.value);
  };
  const handleCategory1 = (e) => {
    setCategory1(e.target.value);
    clickCatergory1(e.target.value);
  };
  const handleCategory2 = (e) => {
    setCategory2(e.target.value);
    clickCatergory2(e.target.value);
  };
  const handleCategory3 = (e) => {
    setCategory3(e.target.value);
    clickCatergory3(e.target.value);
  };
  const handleCategory4 = (e) => {
    setCategory4(e.target.value);
    clickCatergory4(e.target.value);
  };
  //Radio Button
  const handleYes = (e) => {
    setOpt(false);
    console.log(e.target.value);
  };
  const handleNo = (e) => {
    setOpt(true);
    console.log(e.target.value);
  };

  //get data
  const handleSave = () => {
    const res = axios
      .get(`https://stg.dhunjam.in/account/admin/${id}`)
      .then((response) => {
        setInfo(response.data);
        console.log(response.data.data, "hello");
      })
      .catch((error) => {
        //   console.log(error);
      });
  };
  const data = [
    { name: "custom", value: custom },
    { name: "category1", value: category1 },
    { name: "category2", value: category2 },
    { name: "category3", value: category3 },
    { name: "category4", value: category4 },
  ];

  return (
    <>
      <div className="container2">
        <h2>
          {props.location}, {props.name} on Dhun Jam
        </h2>
        <div className="box box1">
          <div className="que" style={{ width: "40%" }}>
            Do you want to charge your customers for requesting songs?
          </div>
          <div className="item1" style={{ width: "60%" }}>
            <input
              type="radio"
              name="opt"
              id="yes"
              value={opt}
              onChange={handleYes}
            />
            Yes
            <input
              type="radio"
              name="opt"
              id="no"
              value={opt}
              onChange={handleNo}
            />
            No
          </div>
        </div>
        <div className="box box2">
          <div className="que" style={{ width: "40%" }}>
            Custom song request amount-
          </div>
          <div className="item2" style={{ width: "60%" }}>
            {/* <div className={opt?"num-disable":"num-able"}>444</div> */}
            {opt ? (
              <input
                type="number"
                name="custom"
                className="num-disable"
                placeholder="disabled"
                disabled
              />
            ) : (
              <input
                type="number"
                name="custom"
                className="num-able"
                min="99"
                placeholder="99"
                value={custom}
                onChange={handleCustom}
                onClick={clickCustom}
                required
              />
            )}
          </div>
        </div>
        <div className="box box3">
          <div className="que" style={{ width: "40%" }}>
            Regular song request amounts,from high to low-
          </div>
          <div className="item3" style={{ width: "60%" }}>
            {opt ? (
              <>
                <input
                  type="number"
                  name="req1"
                  className="text-disable"
                  placeholder="99"
                  disabled
                />
                <input
                  type="number"
                  name="req2"
                  className="text-disable"
                  placeholder="59"
                  disabled
                />
                <input
                  type="number"
                  name="req3"
                  className="text-disable"
                  placeholder="39"
                  disabled
                />
                <input
                  type="number"
                  name="req4"
                  className="text-disable"
                  placeholder="19"
                  disabled
                />
              </>
            ) : (
              <>
                <input
                  type="number"
                  name="req1"
                  className="text-able"
                  min="79"
                  value={category1}
                  onChange={handleCategory1}
                  //   onClick={clickCatergory1}
                  required
                />
                <input
                  type="number"
                  name="req2"
                  className="text-able"
                  min="59"
                  value={category2}
                  onChange={handleCategory2}
                  //   onClick={clickCatergory2}
                  required
                />
                <input
                  type="number"
                  name="req3"
                  className="text-able"
                  min="39"
                  value={category3}
                  onChange={handleCategory3}
                  //   onClick={clickCatergory3}
                  required
                />
                <input
                  type="number"
                  name="req4"
                  className="text-able"
                  min="19"
                  value={category4}
                  onChange={handleCategory4}
                  //   onClick={clickCatergory4}
                  required
                />
              </>
            )}
          </div>
        </div>
        {!opt && (
          <div className="chart">
            <BarChart
              width={600}
              height={400}
              data={data}
              margin={{ top: 20, right: 20, left: -30, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis dataKey="value" domain={[0, "custom" + 200]} />
              {/* <Tooltip wrapperStyle={{ width: 90, backgroundColor: '#030303' }} /> */}
              <Bar dataKey="value" fill="#F0C3F1" barSize={28} />
            </BarChart>
          </div>
        )}
        {opt ? (
          <button className="btn-disable" disabled>
            Save
          </button>
        ) : (
          <button className="btn-able" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </>
  );
}

export default Dashboard;
