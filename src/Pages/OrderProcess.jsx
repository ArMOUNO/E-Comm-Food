import React from 'react';
import { BuyingStep } from '../Components/BuyingStep';
import { Location } from '../Components/Location';
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'
const OrderProcess = () => {
    const location = Location
    console.log(location)
    // const try=location.map((item))
    // console.log(try)



    const SelectLocation = location?.map((item) => {
        return {
            value: item.division,
            label: item.division
        };
    });
console.log(SelectLocation)
    return (
        <>
            <div>
                <BuyingStep
                    AddressVals={true}
                    emailVals={false}
                    paymentVals={false}
                />
            </div>
            <div>
                <Select>
                    <SelectAction className="w-[20rem]">
                        <SelectValue placeholder="Select Division" />
                    </SelectAction>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Divisions</SelectLabel>
                            {SelectLocation.map((loca) => (
                                <SelectItem key={loca.label} value={loca.value}>
                                    {loca.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </>
    );
};

export default OrderProcess;