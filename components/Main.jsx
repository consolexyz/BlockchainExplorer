import React from "react";



function Main() {
    return (
        <div className="flex justify-center">
   <table className="table-auto shadow-lg bg-white w-4/5 text-center" >
  <thead className=" bg-gray-800 border-b">
    <tr >
      <th scope="col" className="text-center  px-8 py-4 font-medium text-white">#</th>
      <th scope="col" className="text-center  px-8 py-4 font-medium text-white">hash </th>
      <th scope="col" className="text-center px-8 py-4 font-medium text-white">timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b">
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td >Malcolm Lockyer</td>
      <td >1961</td>
    </tr>
    <tr className="border-b">
      <td  >Witchy Woman</td>
      <td >The Eagles</td>
      <td >1972</td>
    </tr>
    <tr className="border-b">
      <td >Shining Star</td>
      <td >Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Main;