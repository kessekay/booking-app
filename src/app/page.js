"use client";
import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Summary from "./components/Summary";
import Image from "next/image";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    booking: {
      date: "",
      time: "",
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (input, value) => {
    setFormData((prevState) => ({
      ...prevState,
      ...input,
    }));
  };

  const handlePersonalInfoChange = (input, value) => {
    setFormData((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [input]: value,
      },
    }));
  };

  const handleBookingChange = (input, value) => {
    setFormData((prevState) => ({
      ...prevState,
      booking: {
        ...prevState.booking,
        [input]: value,
      },
    }));
  };
  return (
    <main className="h-screen bg-white text-gray-900 overflow-hidden">
      <div className="h-screen grid grid-cols-6 gap-6 p-8">
        <div className="relative col-span-2 bg-stone-200 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center gap-2 mt-12">
            <Image alt="" src="/logo.png" width={40} height={40} />
            <h1 className="text-green-900 font-bold text-xl">
              The Chiropractic Booking Form
            </h1>
          </div>
          <div className="m-14 bg-slate-40 ">
            {step === 1 && (
              <Step1
                nextStep={nextStep}
                handleChange={handleChange}
                formData={formData}
              />
            )}
            {step === 2 && (
              <Step2
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handlePersonalInfoChange}
                formData={formData}
              />
            )}
            {step === 3 && (
              <Step3
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleBookingChange}
                formData={formData}
              />
            )}
            {step === 4 && <Summary prevStep={prevStep} formData={formData} />}
          </div>
        </div>

        <div className="col-span-3 w-full h-full overflow-hidden">
          <Image
            src="/img4.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-2xl w-[100%] h-[100%] object-cover shadow-lg"
          />
        </div>
        <div className="col-span-1 bg-gradient-to-r from-green-500 via-green-10 to-lime-600 rounded-2xl">
          <Image
            src="/img3.jpeg"
            alt=""
            width={900}
            height={1000}
            className="rounded-2xl object-cover w-[100%] h-[100%] shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
