import React, { ReactNode } from 'react'
import Typo from "../Typo"
import { TypoVariants, TypoColors } from "../Typo"
import { formatPostDay } from '../../utils/datetime'

import './PostBox.css'

interface IPostBoxProps {
  children: ReactNode,
  date: string,
}

export default function PostBox({
  date,
  children
}: IPostBoxProps) {
  return (
    <div className="post-wrapper">
      <div className="post-date">
        <Typo variant={TypoVariants.h4} color={TypoColors.black}>{formatPostDay(date)}</Typo>
      </div>
      <div className="post-description">
        {children}
      </div>
    </div>
  )
}