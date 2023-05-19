import { useRecoilValueLoadable } from "recoil";
import { Paper, styled } from "@mui/material";
import { profileSelector } from "../recoil/selector/profile.selector";

const IntroductionComp = () => {
  const profile = useRecoilValueLoadable(profileSelector);
  const { contents } = profile;
  const { img, txt } = contents;

  const renderContent = () => {
    const links = Object.entries(txt).filter(([site]) => site !== "username");
    return (
      <>
        <img src={img} height={100} />
        <p>{txt.username}</p>
        {links.map(([site, url]: any) => (
          <a key={site} href={url}>{site}</a>
        ))}
      </>
    );
  };

  return (
    <MainFrame elevation={10}> {{
            hasValue: renderContent(),
            loading:  <b>Loading...</b>,
            hasError: <b>Error</b>,
        }[profile.state]
    }</MainFrame>
  );
};

const MainFrame = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
`;

export default IntroductionComp;