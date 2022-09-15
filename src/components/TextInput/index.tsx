import React, { useRef } from "react"

import "./TextInput.css"

interface ITextInputProps {
  label: string,
  name: string,
  placeholder: string,
  hideLabel: boolean,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function TextInput({
  label,
  name,
  placeholder = "",
  hideLabel,
  onChange
}: ITextInputProps) {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="input-wrapper">
      {!hideLabel && <label
        htmlFor={name}
        className="input-label"
      >
        {label}
      </label>}
      <input
        ref={inputRef}
        id={name}
        name={name}
        className="input-text"
        type="text"
        placeholder={placeholder || label}
        onChange={onChange}
      />
    </div>
  )
}
