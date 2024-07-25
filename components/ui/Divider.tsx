import React from "react"
import Image from "next/image";

const Divider = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/icons/divider.svg" alt="" width={80} height={13}  />
    </div>
  )
}

export default Divider;
