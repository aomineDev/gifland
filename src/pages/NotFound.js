import { Title } from 'react-head'
import styled from '@emotion/styled'

import Container from 'components/layout/Container'
import Button from 'components/shared/Button'

export default function NotFound () {
  const gif = 'https://media0.giphy.com/media/14uQ3cOFteDaU/giphy-downsized.gif?cid=d056da6c962291dcdff17eb4299e904e4e22cbff1f07af7b&rid=giphy-downsized.gif'

  const ErrorCode = styled.h2`
    font-size: 5em;
    font-weight: bold;
    font-style: italic;
  `

  const ErrorMessage = styled.p`
    margin-bottom: 20px;
  `

  const ErrorGif = styled.img`
    display: block;
    margin-bottom: 20px;
    border-radius: 50%;
    transition: border-radius .5s;
    :hover {
      border-radius: 16px;
    }
  `
  
  return (
    <>
      <Title>Not Found | Gifland</Title>

      <Container center fullHeight>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Sometimes gettings lost isn't that bad</ErrorMessage>
        <ErrorGif src={gif} alt="gif" />
        <Button href="/">Go to home</Button>
      </Container>
    </>
  )
}
