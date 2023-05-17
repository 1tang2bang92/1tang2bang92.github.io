import { useRecoilValueLoadable } from "recoil"
import { Suspense } from 'react'

import { Paper, styled } from "@mui/material"

import { profileSelector } from "../recoil/selector/profile.selector" 

const IntroductionComp = () => {

    const profile = useRecoilValueLoadable(profileSelector);

    return (
        <MainFrame elevation={10}>
            <Suspense fallback={<b> Loading... </b>}>
                <img src={ profile.contents.img } height={100}/>
                <p> {profile.contents.txt.username} </p>
                <p> {JSON.stringify(profile.contents.txt)} </p>
            </Suspense>
        </MainFrame>
    )
}

const MainFrame = styled(Paper)`
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
`

export default IntroductionComp