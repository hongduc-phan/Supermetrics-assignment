import React, { ReactNode } from "react"
import Typo, { TypoAlignment, TypoVariants, TypoColors } from "../Typo"

import "./Modal.css"

interface IModalProps {
  children: ReactNode,
  title: string,
  buttonName: string,
  onOk: () => void
}

export default function Modal({
  title = "",
  children,
  buttonName = "",
  onOk
}: IModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <Typo variant={TypoVariants.h4} color={TypoColors.black} className="modal-title">{title}</Typo>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <Typo variant={TypoVariants.button} color={TypoColors.black} align={TypoAlignment.middle} className="modal-button">
            <button onClick={onOk}>
              {buttonName}
            </button>
          </Typo>
        </div>
      </div>
    </div>
  )
}
