import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 240px;
  margin: 20px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  color: #000;
`;
export const Description = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  background-color: #c3c3c3;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 8px;
`;
export const Tag = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 8px;
  font-weight: 500;
`;
export const Location = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
`;
export const Stats = styled.ul`
  background-color: #ccc;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > li {
    padding: 10px 0 10px 0;
    width: 34%;
    border: 1px solid #aaa;
  }
`;
export const Label = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  color: #666;
`;
export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
