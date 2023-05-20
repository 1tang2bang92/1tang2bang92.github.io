import LanguageIcon from '@mui/icons-material/Language'
import Blog from '../assets/naver_blog_icon.png'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import styled from '@emotion/styled'

export const getProfile = () => {
  return {
    username: '1tang2bang92',
    github: 'https://github.com/1tang2bang92',
    youtube: 'https://www.youtube.com/c/1tang2bang92',
    naverBlog: 'https://blog.naver.com/shpark0906',
  }
}

export const getProfileMsg = () => {
  return 'Hello world!'
}

export const getIcons = (site: string) => {
  switch (site) {
    case 'github':
      return <GitHubIcon />
    case 'youtube':
      return <YouTubeIcon />
    case 'naverBlog':
      return <BlogImage src={Blog} />
    default:
      return <LanguageIcon />
  }
}

const BlogImage = styled.img`
  height: 16px;
`
