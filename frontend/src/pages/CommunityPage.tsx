import styled from 'styled-components';
import { font } from '../assets/styles/common/fonts';
import CommuRankingCard from '../components/community/CommuRankingCard';
import CommuListCard from '../components/community/CommuListCard';
import { SearchBox } from '../assets/styles/common/commonComponentStyle';
import { theme } from '../assets/styles/common/palette';
import MakingCommuModal from '../components/modal/MakingCommuModal';

const CommunityPage = () => {
  return (
    <CommuBox>
      <Header>
        다양한 댕댕이와 만나 보세요.
        <MakingCommuModal />
      </Header>
      <CommuContainer>
        <PopularCommuBox>
          <RankingHeader>인기 커뮤니티</RankingHeader>
          <RankingBox>
            <CommuRankingCard />
            <CommuRankingCard />
            <CommuRankingCard />
          </RankingBox>
        </PopularCommuBox>
        <ListsBox>
          <CommuListHeader>
            커뮤니티 목록
            <SearchBox style={{ marginLeft: '20px', width: '20rem' }}>
              <input type="text" placeholder="댕댕이 커뮤니티 찾아보기" />
              <button>검색</button>
            </SearchBox>
          </CommuListHeader>
          <CommuListsBox>
            <ScrollBox>
              <CommuListCard />
              <CommuListCard />
              <CommuListCard />
              <CommuListCard />
              <CommuListCard />
            </ScrollBox>
          </CommuListsBox>
        </ListsBox>
      </CommuContainer>
    </CommuBox>
  );
};

export default CommunityPage;

const CommuBox = styled.div`
  width: 100%;
  height: 87vh;
  font-family: ${font.bold};
`;

const Header = styled.div`
  font-size: 20px;
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  letter-spacing: 1px;
`;

const CommuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PopularCommuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingHeader = styled.div`
  width: 23rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  margin-top: 3rem;
  color: ${theme.mainColor};
  font-size: 20px;
`;

const RankingBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin-top: 1.5rem;
`;

const ListsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
`;

const CommuListHeader = styled.div`
  width: 50rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 3rem;
  color: ${theme.mainColor};
  font-size: 20px;
`;

const CommuListsBox = styled.div`
  height: 100%;
  width: 52rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* align-items: flex-end; */
  margin-top: 12px;
`;

const ScrollBox = styled.div`
  border: solid 2px ${theme.mainColor};
  border-radius: 10px;
  width: 50rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  // 스크롤 조절
  overflow-x: hidden;
  -ms-overflow-style: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
