import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { font } from '../../assets/styles/common/fonts';
import { getUserReviews } from '../../apis/mypageFetcher';
import { ReviewType } from '../../types/reviewboard/reviewType';
import ResultCard from './ResultCard';

function Result() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    async function getReviews() {
      const response = await getUserReviews();
      setReviews(response);
    }
    getReviews();
  }, []);

  return (
    <div>
      {reviews.length ? (
        <ResultContainer>
          {reviews?.map((value: ReviewType) => (
            <ResultCard value={value} key={value.id} setReviews={setReviews} />
          ))}
        </ResultContainer>
      ) : (
        <div
          style={{
            textAlign: 'center',
            fontFamily: font.bold,
          }}
        >
          내 리뷰가 없습니다
        </div>
      )}
    </div>
  );
}

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  place-items: center; // grid 시 가로 가운데정렬
  margin-top: 50px;
`;
export default Result;
