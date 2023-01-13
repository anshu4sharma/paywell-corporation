import { useState } from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate?.toUTCString(), endDate?.toUTCString());

  return (
    <div className="flex flex-col space-y-10 rounded-lg bg-white py-10 px-10 pb-16">
      <div className="space-y-2">
        <p className="text-3xl font-bold text-gray-700">Select Date</p>
        <p className="text-xl text-gray-700">Select date as you require.</p>
      </div>

      <div className="flex flex-row space-x-12">
        <div className="space-y-2">
          <p className="text-lg font-bold text-gray-700">
            Start Date<span className="text-red-500">*</span>
          </p>
          <DatePicker
            onChange={setStartDate}
            value={startDate}
            className="rounded-lg bg-gray-100 text-lg text-gray-700 "
            yearPlaceholder="yyyy"
            monthPlaceholder="mm"
            dayPlaceholder="dd"
          ></DatePicker>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold text-gray-700">
            End Date<span className="text-red-500">*</span>
          </p>
          <DatePicker
            onChange={setEndDate}
            value={endDate}
            className="rounded-lg bg-gray-100 text-lg text-gray-700"
            yearPlaceholder="yyyy"
            monthPlaceholder="mm"
            dayPlaceholder="dd"
          ></DatePicker>
        </div>
      </div>
    </div>
  );
}
