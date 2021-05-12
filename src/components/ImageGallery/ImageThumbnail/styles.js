import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 1px solid ${props => (props.isActive ? '#0e73ad' : '#eee')};
`;
