import styled from '@emotion/styled';

export const FriendListBlock = styled.div`
  max-width: fit-content;
  background-color: #888;
  color: #000;
  display: block;
  padding: 12px;
  margin: 20px;
  border-radius: 2px;
`;
export const Title = styled.h2`
  text-align: center;
`;
export const FriendlistMarkup = styled.ul``;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 240px;
  padding: 5px 5px 5px 15px;
  margin: 5px;
  border: 2px solid black;
  background-color: #e6e6e6;
`;
export const Name = styled.p``;
export const Avatar = styled.img`
  margin-right: 10px;
`;
export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? ' #00ff00' : '#ff0000';
  }};
`;
