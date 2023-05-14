import styled from '@emotion/styled'

import PostComp from "../component/post.comp"
import IntroductionComp from "../component/introduction.comp"
import FootComp from "../component/footer.comp"
import CategoryComp from "../component/category.comp"

const MainFrame = styled.div`
  display: flex;
  flex-direciotn: row;
`
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

`
const InfoWarpper = styled.div`
  display: flex;
  flex-direction: row;
`

const IndexPage = () => {
  return (
    <MainFrame>
      <BodyContainer>
        <InfoWarpper>
          <IntroductionComp/>
          <CategoryComp/>
        </InfoWarpper>
        <PostComp/>
      </BodyContainer>
      <FootComp/>
    </MainFrame>
  )
}

export default IndexPage
