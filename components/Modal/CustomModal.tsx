import styled from "@emotion/styled"
import { Modal } from "@mui/material"
import React from "react"

interface ModalProps {
    children : React.ReactElement,
    open: boolean,
}


const StyledModal = styled(Modal)`
    
`
export default function CustomModal({children, open } :ModalProps) {
    return (
        <Modal open = {open} >
            {children}
        </Modal>
    )
}