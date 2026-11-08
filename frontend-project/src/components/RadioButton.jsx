import React from 'react'

const RadioButton = ({ children }) => {
  return (
     <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="role"
        value={children}
        className="h-4 w-4 accent-[#7B51F1]"
      />
      <span className="text-sm text-gray-700 font-semibold">{children}</span>
    </label>
  )
}

export default RadioButton
