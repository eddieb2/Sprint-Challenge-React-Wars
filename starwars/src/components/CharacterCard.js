import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


// STYLES START HERE //
const CarBodyWrapper = styled.div`
  display:flex;
  justify-content: center;
`
const CardBodyStyle = styled.div`
  width: 60%
`
const AddtlCardStyle = styled(Card)`
  margin: 10% 0%;
  border: 10px solid black;
  border-radius: 15px;
  background: lightgray;
`
const CharacterName = styled.h1`
  font-style: italic;
`
const UlContainer = styled(CardText)`
  display: flex;
  justify-content: center;
`
const UlStyles = styled.ul`
  width: 50%;
`
const LiStyles = styled.li`
  text-align: left;
`
// STYLES END HERE //

const CharacterCard = (props) => {
  return(
    <CarBodyWrapper>
      <CardBodyStyle>
        <AddtlCardStyle>
          <CardBody>
            <CardTitle>
              <CharacterName>
                {props.name}
              </CharacterName>
            </CardTitle>
          </CardBody>
          <CardBody>
            <UlContainer>
              <UlStyles>
                <LiStyles><b>Height:</b> {props.height}</LiStyles>
                <LiStyles><b>Mass:</b> {props.mass}</LiStyles>
                <LiStyles><b>Hair Color:</b> {props.hair_color}</LiStyles>
                <LiStyles><b>Skin Color:</b> {props.skin_color}</LiStyles>
                <LiStyles><b>Eye Color:</b> {props.eye_color}</LiStyles>
                <LiStyles><b>Birth Year:</b> {props.birth_year}</LiStyles>
                <LiStyles><b>Gender:</b> {props.gender}</LiStyles>
              </UlStyles>
            </UlContainer>
          </CardBody>
       </AddtlCardStyle>
      </CardBodyStyle>
    </CarBodyWrapper>
  );
}

export default CharacterCard;