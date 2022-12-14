import React from 'react'
import { useFormik } from 'formik'
import { LinkContainer } from 'react-router-bootstrap'
import { validationSchema, initialValues, contactFields } from './const'
import {
  StyledBox,
  StyledButton,
  StyledContactContainer,
  StyledContactTitle,
  StyledDonationContainer,
  StyledDonationTitle,
  StyledErrorText,
  StyledForm,
  StyledFormContainer,
  StyledHomeButton,
  StyledInput,
  StyledWrapper
} from './styles'

const Contact = () => {
  const formik = useFormik({
    validationSchema,
    initialValues
  })

  return (
    <StyledContactContainer>
      <StyledDonationContainer>
        <StyledDonationTitle>¿Queres contribuir?</StyledDonationTitle>
        <StyledButton>Contribuir</StyledButton>
      </StyledDonationContainer>
      <StyledWrapper>
        <StyledContactTitle>¡Contactate con nosotros!</StyledContactTitle>
        <StyledFormContainer>
          <StyledForm>
            {contactFields.map(({ name, placeholder, id }) => (
              <StyledBox key={id}>
                <StyledInput
                  name={name}
                  placeholder={placeholder}
                  autoComplete='off'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched[name] && formik.errors[name] && (
                  <StyledErrorText>{formik.errors[name]}</StyledErrorText>
                )}
              </StyledBox>
            ))}
            <StyledButton isSubmit={true}>Enviar consulta</StyledButton>
          </StyledForm>
        </StyledFormContainer>
      </StyledWrapper>

      <LinkContainer to='/'>
        <StyledHomeButton>Ir al inicio</StyledHomeButton>
      </LinkContainer>
    </StyledContactContainer>
  )
}

export default Contact
