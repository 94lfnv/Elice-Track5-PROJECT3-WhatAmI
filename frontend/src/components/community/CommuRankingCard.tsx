import styled, { keyframes } from 'styled-components';

const CommuRankingCard = () => {
  return (
    <>
      <CommuRankingCardBox>
        <CommuImage></CommuImage>
        <CommuDesc>
          <CommuName>댕댕이를 사랑하는 일산인들의 모임</CommuName>
          <CheckBtn>💙10</CheckBtn>
        </CommuDesc>
      </CommuRankingCardBox>
    </>
  );
};

export default CommuRankingCard;

const popup = keyframes`
  from {
    transform: translateY(0.25rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

const CommuRankingCardBox = styled.div`
  width: 11rem;
  height: 17rem;
  border: solid 1px black;
  border-radius: 20px;
  margin: 1rem 0.5rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;
    animation-name: ${popup};
    animation-fill-mode: forwards;
    cursor: pointer;
  }
`;

const CommuImage = styled.div`
  height: 50%;
  border: solid 1px black;
  margin: 0.8rem 0.8rem;
  border-radius: 50%;
`;

const CommuDesc = styled.div`
  height: 40%;
  margin-top: 1rem;
  padding: 0 0.8rem;
`;

const CommuName = styled.div`
  width: 100%;
  height: 4rem;
  letter-spacing: 1px;
`;

const CheckBtn = styled.div`
  height: 2rem;
  width: 3rem;
  float: right;
`;
