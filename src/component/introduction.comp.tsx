import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { Paper } from "@mui/material"
import styled from '@emotion/styled'
import { profileSelector } from "../recoil/selector/profile.selector"
import { useEffect, useState, memo } from "react"
import { getIcons } from "../service/profile"

const IntroductionComp = () => {
  const profile = useRecoilValueLoadable(profileSelector)
  const { contents } = profile
  const { img, icons, msg } = contents
  const [renderedContent, setRenderedContent] = useState(null)

  useEffect(() => {
    const renderContent = (): any => {
        const links = Object.entries(icons).filter(([site]) => site !== "username")
        return (
            <>
                <img src={img} height={100} />
                <Nickanme>{icons.username}</Nickanme>
                <Msg>{ msg }</Msg>
                <IconsWarpper>
                    {links.map(([site, url]: any) => (
                    <Icon key={site} href={url} about={site}>
                        {getIcons(site)}
                    </Icon>
                    ))}
                </IconsWarpper> 
            </>
        )
    }
    
    if (profile.state === "hasValue") {
      setRenderedContent(renderContent())
    }
  }, [profile.state, contents])

  return (
    <MainFrame elevation={10}> {{
            hasValue: renderedContent,
            loading:  <b>Loading...</b>,
            hasError: <b>Error</b>,
        }[profile.state]
    }</MainFrame>
  )
}

const IntroductionCompTest = () => {
  const { img, icons, msg } = useRecoilValue(profileSelector)
    const RenderContent = () => {
        const links = Object.entries(icons).filter(([site]) => site !== "username")
        return (
            <>
                <img src={img} height={100} />
                <Nickanme>{icons.username}</Nickanme>
                <Msg>{ msg }</Msg>
                <IconsWarpper>
                    {links.map(([site, url]: any) => (
                    <Icon key={site} href={url} about={site}>
                        {getIcons(site)}
                    </Icon>
                    ))}
                </IconsWarpper> 
            </>
        )
    }

  return (
    <MainFrame elevation={10}> {{
            hasValue: renderedContent,
            loading:  <b>Loading...</b>,
            hasError: <b>Error</b>,
        }[profile.state]
    }</MainFrame>
  )
}

const MainFrame = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
  overflow-wrap: anywhere;
`
const IconsWarpper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`
const Icon = styled.a`
  text-decoration: none;
  color: black;
`
const Msg = styled.p`
  margin: 0;
  text-align: center;
`
const Nickanme = styled.h3`
  margin: 0;
`
export default memo(IntroductionComp)