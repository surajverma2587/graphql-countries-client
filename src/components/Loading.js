import React from 'react'
import { ClipLoader } from "react-spinners"

const Loading = ({ loading }) => {
  return (
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <ClipLoader color={"#4d4d4d"} loading={loading} />
    </div>
  )
}

export default Loading