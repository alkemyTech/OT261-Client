import styled from 'styled-components'
import { Stack } from 'react-bootstrap'

const StyledAboutContainer = styled(Stack)`
  font-family: var(--font-poppins);
  row-gap: ${({ isUpper1024px }) => isUpper1024px && '77px !important'};
`

const StyledTitle = styled('h2')`
  text-align: center;
  font-weight: 600;
  font-size: ${({ isUpper768px }) => (isUpper768px ? '3rem' : '2.5rem')};
  margin: 0;
  margin-top: ${({ isUpper1024px }) => (isUpper1024px ? '58px' : '1.5rem')};
`

const StyledMemberContainer = styled(Stack)`
  padding: ${({ isUpper768px }) => (isUpper768px ? '0' : '0 0.75rem')};
  row-gap: ${({ isUpper768px }) => (isUpper768px ? '0' : '0.5rem')};
  max-width: ${({ isUpper768px }) => (isUpper768px ? '81rem' : '25rem')};
  max-height: ${({ isUpper1024px }) => (isUpper1024px ? '27.5rem' : 'auto')};
  margin: auto;
  align-items: flex-start;
`

const StyledLeftWrapper = styled(Stack)`
  padding: 0 0.75rem;
  row-gap: 0.5rem;
  max-width: ${({ isUpper768px }) => (isUpper768px ? 'auto' : '25rem')};
  flex-basis: 55%;
`

const StyledRightWrapper = styled('div')`
  flex-basis: 45%;
  max-width: 27.5rem;
`

const StyledMemberTitle = styled('h3')`
  text-align: ${({ isUpper768px }) => (isUpper768px ? 'left' : 'center')};
  font-weight: 600;
  font-size: ${({ isUpper1024px }) => (isUpper1024px ? '2.5rem' : '1.8rem')};
  margin: 0;
`

const StyledMemberRole = styled('h4')`
  font-size: ${({ isUpper1024px }) => (isUpper1024px ? '2.5rem' : '1.8rem')};
  margin: 0;
`

const StyledMemberDescription = styled('p')`
  font-size: 1.25rem;
  margin: 0;
  font-family: var(--font-mulish);
  margin-bottom: ${({ isUpper768px }) => (isUpper768px ? '1em' : '0')}; ;
`

const StyledMemberButton = styled('button')`
  font-weight: 600;
  font-size: ${({ isUpper1024px }) => (isUpper1024px ? '2rem' : '1.5rem')};
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  background-color: red;
  color: white;
  width: ${({ isUpper1024px }) => (isUpper1024px ? '20.4375rem' : '18.75rem')};
  height: ${({ isUpper1024px }) => (isUpper1024px ? '4.25rem' : '3.5rem')};
  margin-top: ${({ isUpper768px }) => (isUpper768px ? 'auto' : '1.5rem')};
`

const StyledMemberMobileImage = styled('img')`
  width: 12.5rem;
  height: 12.5rem;
  margin: auto;
  border-radius: 1rem;
`

const StyledMemberDesktopImage = styled('img')`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 440px;
  border-radius: 2.75rem;
`

export {
  StyledAboutContainer,
  StyledTitle,
  StyledMemberContainer,
  StyledMemberTitle,
  StyledMemberRole,
  StyledMemberDescription,
  StyledMemberButton,
  StyledMemberMobileImage,
  StyledMemberDesktopImage,
  StyledLeftWrapper,
  StyledRightWrapper,
}
