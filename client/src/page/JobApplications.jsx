import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllApplicaitons } from "../api/applicationApi";
import Card from "../component/Card";

function JobApplications() {
  const token = useSelector((state) => state.auth.user);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const applicationsApi = async () => {
      const resData = await getAllApplicaitons(token);
      if(resData?.response?.status === 401){
        navigate("/forbidden")
      }
      setData(resData.data)
    };
    if(token){
        applicationsApi();
    }
  }, [token, navigate]);
  return(
    <div className="grid xl:grid-cols-2 w-[90vw] m-auto">
        {data && data.map(el => {
            return <Card data={el.jobId} key={el._id} />
        })}
    </div>
  )
}

export default JobApplications;
