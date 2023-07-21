import Layout from "@/components/Layout"
import { Button, Container } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "./_app"
import Signature from "@/components/images/Signature"
import {motion} from 'framer-motion'

export default function HomePage() {
    const colorMode = useContext(ColorModeContext)
    return <>
        <Layout>
            <Button variant="contained" onClick={() => colorMode.toggleColorMode!()}>hello</Button>
            <Signature/>
        </Layout>
    </>
}