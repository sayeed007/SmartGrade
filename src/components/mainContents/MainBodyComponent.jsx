import React from 'react';
import DemoData from '../../assets/data/DemoData';
import HeroSection from './HeroSection';
import SearchIcon from '../../assets/icons/searchIcon.svg';


// STUDENTS IMAGE
import one from '../../assets/studentsImage/1.png';
import two from '../../assets/studentsImage/2.png';
import three from '../../assets/studentsImage/3.png';
import four from '../../assets/studentsImage/4.png';
import five from '../../assets/studentsImage/5.png';
import six from '../../assets/studentsImage/6.png';
import seven from '../../assets/studentsImage/7.png';
import eight from '../../assets/studentsImage/8.png';
import nine from '../../assets/studentsImage/9.png';
import ten from '../../assets/studentsImage/10.png';

const numberMap = {
    "01": one,
    "02": two,
    "03": three,
    "04": four,
    "05": five,
    "06": six,
    "07": seven,
    "08": eight,
    "09": nine,
    "10": ten,
};

const MainBodyComponent = () => {


    return (
        <div>

            <HeroSection />



            {/* Begin Students table  */}
            <section className="py-24 lg:pt-[120px] lg:pb-28">
                <div className="container">
                    <div className="mb-16 flex flex-col items-center">
                        <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                            <span className="text-[#00CC8C]">Students</span> of the Year
                        </h2>
                        {/* Search Box  */}
                        <form>
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]"
                                >
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                                        placeholder="Search by Student "
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                                    >
                                        <img
                                            className="w-4 h-4"
                                            style={{ maxWidth: '1rem' }}
                                            src={SearchIcon}
                                            alt="Search"
                                        />
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Search Box Ends  */}
                    </div>
                    <div className="max-w-[848px] mx-auto overflow-auto">

                        <table className="w-full">

                            <thead>
                                <tr className="border-b border-[#FFFFFF0D]">
                                    <th
                                        className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left"
                                    >
                                        ID
                                    </th>
                                    <th
                                        className="p-5 text-sm md:text-xl font-semibold text-left"
                                    >
                                        Name
                                    </th>
                                    <th
                                        className="p-5 text-sm md:text-xl font-semibold"
                                    >
                                        Scores
                                    </th>
                                    <th
                                        className="p-5 text-sm md:text-xl font-semibold"
                                    >
                                        Percentage
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                {Object.entries(DemoData?.studentData).map(([classNameName, eachclassNameData]) => (
                                    <>
                                        <tr className="bg-white/5" >
                                            <td className="p-5 text-sm md:text-xl" colSpan="4">
                                                {classNameName}
                                            </td>
                                        </tr>
                                        {
                                            eachclassNameData?.map((eachStudent) => {
                                                return (
                                                    <tr className="border-b border-[#7ECEB529]">
                                                        <td className="p-5 text-sm md:text-xl">
                                                            {eachStudent?.SN}
                                                        </td>
                                                        <td className="p-5 text-sm md:text-xl">
                                                            <div className="flex space-x-3 items-center">
                                                                <img
                                                                    className="w-8 h-8"
                                                                    src={numberMap?.[eachStudent?.SN]}
                                                                    alt={eachStudent?.Name}
                                                                />
                                                                <span className="whitespace-nowrap">
                                                                    {eachStudent?.Name}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="p-5 text-sm md:text-xl text-center">
                                                            {eachStudent?.Scores}
                                                        </td>
                                                        <td className="p-5 text-sm md:text-xl text-center">
                                                            {eachStudent?.Percentage}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default MainBodyComponent;
