import styled, { keyframes } from 'styled-components';
import { CommunityProps } from './Community';
import {
  EntryBtn,
  CreateBtn,
} from '../../assets/styles/common/commonComponentStyle';
import { font } from '../../assets/styles/common/fonts';
import { theme } from '../../assets/styles/common/palette';

interface Props {
  value: CommunityProps;
  mode: string;
}

function CommunityCard(props: Props) {
  async function deleteReview() {
    const response = await deleteUserCommunites(props.value.id);
    console.log(response);
  }

  const deleteConfirm = () => (deleteReview(), window.alert('삭제했습니다.'));
  const cancelConfirm = () => window.alert('취소했습니다.');

  const confirmDelete = useConfirm(
    '삭제하시겠습니까?',
    deleteConfirm,
    cancelConfirm,
  );
  return (
    <Card>
      <Content>
        <Img alt="room_img" src={props.value.communityImage}></Img>
        <RoomName>{props.value.name}</RoomName>
      </Content>
      {props.mode == 'MyCommunity' ? (
        <ButtonContainer>
          <EntryBtn>수정</EntryBtn>
          <CreateBtn onClick={confirmDelete}>삭제</CreateBtn>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <EntryBtn>내가 쓴 글</EntryBtn>
          <CreateBtn>나가기</CreateBtn>
        </ButtonContainer>
      )}
    </Card>
  );
}

const animation = keyframes`
  50% {
    transform: scale(1.02);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100px;
  box-shadow: 1px 2px 5px gray;
  border-radius: 20px;
  padding: 20px;
  background-color: ${theme.lightColor};
  :hover {
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-name: ${animation};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover; // 이미지 확대하여 비율유지
`;

const RoomName = styled.div`
  text-align: center;
  font-family: ${font.bold};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default CommunityCard;
