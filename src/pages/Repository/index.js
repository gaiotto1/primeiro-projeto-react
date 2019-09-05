import React from 'react';

// import { Container } from './styles';

export default function Repository(props) {
  return (
    <h1>Repository: {decodeURIComponent(props.match.params.repository)}</h1>
  );
}
