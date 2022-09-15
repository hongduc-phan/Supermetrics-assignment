import React from "react"
import Typo, { TypoVariants } from "../Typo";

import "./UserBox.css"

interface IUserBoxProps {
  userName: string, 
  value: number,
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function UserBox({
  userName, 
  value,
  onClick
}: IUserBoxProps) {
  return (
    <div className="box" onClick={onClick}>
      <div className="box-wrapper">
        <Typo variant={TypoVariants.h3}>{userName}</Typo>
        <div className="value-wrapper">
          <Typo variant={TypoVariants.body1} className="box-value">{value}</Typo>
        </div>
      </div>

    </div>
  )
}