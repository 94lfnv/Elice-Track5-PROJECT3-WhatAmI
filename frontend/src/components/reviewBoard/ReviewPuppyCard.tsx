import styled, { keyframes } from 'styled-components';
import ReviewLikeBtn from './ReviewLikeBtn';

interface PuppyCardProps {
  onCardModalClickEvent: () => void;
}
// 좋아요를 채워주는 함수 <= 자식 요소에서 프롭스를 건네 주는
// 좋아요를 누르면 useEffect를 실행하는

const ReviewPuppyCard = ({ onCardModalClickEvent }: PuppyCardProps) => {
  return (
    <PuppyCardBox onClick={onCardModalClickEvent}>
      <div className="like-icon">
        <ReviewLikeBtn />
      </div>
    </PuppyCardBox>
  );
};

export default ReviewPuppyCard;

const popup = keyframes`
  from {
    transform: translateY(0.3rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

const PuppyCardBox = styled.div`
  width: 14rem;
  height: 13rem;
  border: solid 1px black;
  border-radius: 10px;
  margin: 10px 10px;
  display: flex;
  justify-content: center;

  position: relative;
  overflow: hidden;
  .like-icon {
    position: absolute;
    z-index: 2;
    color: #fff;
    top: 150%;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;
    animation-name: ${popup};
    animation-fill-mode: forwards;
    cursor: pointer;

    .like-icon {
      top: 45%;
    }
  }
`;
