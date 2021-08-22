import React from 'react';
import styled from 'styled-components/native';
import { apiImage } from '../apis/api';

type PosterProps = {
  url: string;
};

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

export default ({ url }: PosterProps) => {
  return <Image source={{ uri: apiImage(url) }} />;
};
