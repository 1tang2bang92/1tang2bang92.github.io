import { useRecoilValue } from 'recoil'
import { Paper } from '@mui/material'
import styled from '@emotion/styled'
import { profileSelector } from '../recoil/selector/profile.selector'
import { memo, Suspense } from 'react'
import { getIcons } from '../service/profile'

const IntroductionComp = () => {
  const RenderContent = () => {
    const { img, icons, msg } = useRecoilValue(profileSelector)
    const links = Object.entries(icons).filter(([site]) => site !== 'username')
    return (
      <>
        <img src={img} height={100} />
        <Nickanme>{icons.username}</Nickanme>
        <Msg>{msg}</Msg>
        <IconsWarpper>
          {links.map(([site, url]) => (
            <Icon key={site} href={url} about={site}>
              {getIcons(site)}
            </Icon>
          ))}
        </IconsWarpper>
      </>
    )
  }

  return (
    <MainFrame elevation={10}>
      <Suspense fallback={<b>Loading...</b>}>
        <RenderContent />
      </Suspense>
    </MainFrame>
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
  align-items: center;
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
