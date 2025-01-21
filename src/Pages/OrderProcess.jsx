import React, { useState } from 'react';
import { BuyingStep } from '../Components/BuyingStep';
import { Location } from '../Components/Location';
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const OrderProcess = () => {
    const navigate =useNavigate()
    const location = Location
    const [divisionData, setDivisionData] = useState()
    const [distData, setDistData] = useState()
    const [thanaData, setThanaData] = useState()
    const SelectDevision = location?.map((item) => {
        return {
            value: item.division,
            label: item.division
        };
    });
    const handleDivision = (data) => {
     
        setDivisionData(data)
    }
    const handleThana = (data) => {
        console.log(data)
        setThanaData(data)

    }
    const handleDistct = (data) => {
        console.log(data)
        setDistData(data)

    }

// console.log(thanaData)
    const Divisions = Location.map((item) => ({ label: item.division, value: item.division }));

    const Districts = Location.flatMap((item) =>
        item.districts.map((district) => ({
            label: item.name,
            value: district.name,
        }))
    );

    const Thanas = Location.flatMap((item) =>
        item.districts.flatMap((district) =>
            district.thanas.map((thana) => ({
                value: thana.name,
                label: thana.name,

            }))
        )
    );
  
    
    const handleNext = () => {
      if (divisionData && distData && thanaData) {
        navigate('/order-process/second-step'); 
      } else {

        Swal.fire({
          title: "Error",
          text: "Please select all required fields.",
          icon: "warning",
          button: "OK",
        });
      }
    };
    
    return (
        <>
            <div className='flex flex-col items-center '>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center space-x-5 font-bold'>
                        <p className='lg:text-4xl md:text-3xl text-2xl relative text-red-500'>Complete your order process</p>
                        <img className='absolute top-44 w-72' src="/src/assets/Decore.png" alt="" />
                        <img className='w-44' src="/src/assets/order.png" alt="" />
                    </div>
                    <BuyingStep
                        AddressVals={false}
                        emailVals={false}
                        paymentVals={false}
                    />
                </div>
                <section className='my-4 flex items-center flex-col lg:flex-row justify-center w-full lg:space-x-4 space-y-3 lg:space-y-0'>
                    <div>
                        <Select onValueChange={handleDivision}>
                            <SelectAction className="w-[20rem]">
                                <SelectValue placeholder="Select Division" />
                            </SelectAction>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Divisions</SelectLabel>
                                    {Divisions.map((loca) => (
                                        <SelectItem key={loca.label} value={loca.value}>
                                            {loca.value}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={handleDistct}>
                            <SelectAction className="w-[20rem]">
                                <SelectValue placeholder="Select Division" />
                            </SelectAction>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select District</SelectLabel>
                                    {Districts.map((loca) => (
                                        <SelectItem key={loca.label} value={loca.value}>
                                            {loca.value}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={handleThana}>
                            <SelectAction className="w-[20rem]">
                                <SelectValue placeholder="Select Division" />
                            </SelectAction>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Thana</SelectLabel>
                                    {Thanas.map((loca) => (
                                        <SelectItem key={loca.label} value={loca.value}>
                                            {loca.value}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>

                </section>
                <button onClick={handleNext} className='button-52 my-4 w-fit px-5 text-white'>Next</button>
            </div>

        </>
    );
};

export default OrderProcess;