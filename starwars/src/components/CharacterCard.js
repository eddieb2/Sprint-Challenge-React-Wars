import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


const CharacterCard = (props) => {
  return(
    <div>
    <Card>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
      </CardBody>
      <CardBody>
        <CardText>
          <ul>
            <li>Height: {props.height}</li>
            <li>Mass: {props.mass}</li>
            <li>Hair Color: {props.hair_color}</li>
            <li>Skin Color: {props.skin_color}</li>
            <li>Eye Color: {props.eye_color}</li>
            <li>Birth Year: {props.birth_year}</li>
            <li>Gender: {props.gender}</li>
          </ul>
        </CardText>
      </CardBody>
    </Card>
  </div>
  );
}

export default CharacterCard;