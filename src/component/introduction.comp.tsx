import { useRecoilValueLoadable } from "recoil"
import { Paper } from "@mui/material"
import styled from '@emotion/styled'
import { profileSelector } from "../recoil/selector/profile.selector"
import { useEffect, useState, memo } from "react"

const IntroductionComp = () => {
  const profile = useRecoilValueLoadable(profileSelector)
  const { contents } = profile
  const { img, txt } = contents
  const [renderedContent, setRenderedContent] = useState(null)

  useEffect(() => {
    const renderContent = (): any => {
        const links = Object.entries(txt).filter(([site]) => site !== "username")
        return (
            <>
                <img src={img} height={100} />
                <p>{txt.username}</p>
                <IconsWarpper>
                    {links.map(([site, url]: any) => (
                    <a key={site} href={url} about={site}>
                        ㅁ
                    </a>
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

const MainFrame = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
`
const IconsWarpper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export default memo(IntroductionComp)