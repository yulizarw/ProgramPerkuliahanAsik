import React, { useState, useEffect } from "react";


export const CardProgramUnggulan = () => {

  const cardData = [
    {
      cardTitle: "Kursus Bahasa",
      cardSubtitle: "",
      cardText: "Menyediakan Kursus Bahasa Inggris GRATIS Khusus mahasiswa yang terdaftar dalam program perkuliahan ASIK sampai LULUS"
    },
    {
      cardTitle: "Kelas MC & Public Speaking",
      cardSubtitle: "",
      cardText: "Menyediakan kelas MC & Public Speaking GRATIS khusus untuk mahasiswa yang terdaftar dalam program Perkuliahan Asik sampai lulus"
    },
    {
      cardTitle: "Pendampingan",
      cardSubtitle: "",
      cardText: "Mendapatkan pendampingan penulisan tugas akhir Skripsi atau Tesis "
    },
    {
      cardTitle: "Sertifikasi",
      cardSubtitle: "",
      cardText: "Mendapatkan sertifikat pendamping ijazah berlisensi BNSP dengan biaya terjangkau"
    },
  ]
  return (
    <>
      <center>
        <div class="card-columns car-col-2">
          {cardData.map((data, i) => (
            <div class="card customCard">
              <img ></img>
              <div class="card-body cardBodyCustom">
                <h5 class="card-title customCardTitle">{data.cardTitle}</h5>
                <h6 class="card-subtitle  text-muted customCardSub">{data.cardSubtitle}</h6>
                <p class="card-tex customCardText">{data.cardText}</p>
                <a href="#" class="btn btn-primary btnCustom">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  )
}