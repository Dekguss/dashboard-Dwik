"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/api/axios";
import Card from "@/app/Components/Card/Card";

export default function MotorList() {
  const [motorbikes, setMotorbikes] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/motors")
      .then((response) => {
        setMotorbikes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching motorbikes:", error);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="motor-list grid grid-cols-4 gap-4">
      {motorbikes.map((motorbike) => (
        <Card
          key={motorbike.id}
          brand={motorbike.brand}
          gambar={motorbike.gambar}
          harga={motorbike.harga}
          model={motorbike.model}
          tahun={motorbike.tahun}
        />
      ))}
    </div>
  );
}
