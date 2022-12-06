import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { font } from '../../assets/styles/common/fonts';
import { theme } from '../../assets/styles/common/palette';
import { EditDelBtn } from '../../assets/styles/common/commonComponentStyle';
import LikeBtn from '../common/LikeBtn';
import { ReviewTypeProps } from '../modal/ContentsModal';
import {
  createReviewCommentRequest,
  deleteReviewRequest,
  editReviewRequest,
  getReviewRequest,
} from '../../apis/reviewFetcher';
import MyModal from '../modal/MyModal';
import useModal from '../../hooks/modal/useModal';
import WritingEditor from '../writingeditor/WritingEditor';
import { useNavigate } from 'react-router-dom';
import { ReviewCommentType } from '../../types/reviewboard/reviewType';

const ContentsViewer = (props: ReviewTypeProps) => {
  // 그럼 필요한 거 아이디 프롭스로 보내기
  // 댓글/ 수정/ 삭제

  const [isOpen, modalHandler] = useModal();
  const [pages, setPages] = useState<number>(1);
  const [description, setDescription] = useState<string>('');
  const [comments, setComments] = useState<ReviewCommentType[]>([]);
  const [date, setDate] = useState(props.review?.createdAt);
  const newDate = date?.split(' ')[0];

  const navigate = useNavigate();

  // 리뷰 전체 댓글 가져오기
  const getReviewComments = async () => {
    const res = await getReviewRequest(
      `reviewComment/${props.review?.id}?page=${pages}`,
    );
    setComments(res.reverse());
  };

  // 리뷰 댓글 쓰기
  const postReviewComments = async (e: React.FormEvent) => {
    e.preventDefault();
    await createReviewCommentRequest(
      `reviewComment/${props.review?.id}`,
      description,
    );

    const res = await getReviewRequest(
      `reviewComment/${props.review?.id}?page=${pages}`,
    );
    setComments(res.reverse());
    setDescription('');
  };

  useEffect(() => {
    getReviewComments();
  }, []);

  // 리뷰 수정
  const handleEditMyReview = async (e: React.MouseEvent) => {
    e.preventDefault();
    await editReviewRequest(`review/${props.review?.id}`, description);
  };

  // 리뷰 삭제
  const handleDeleteMyReview = async () => {
    await deleteReviewRequest(`review/${props.review?.id}`);
    // navigate('/reviewboard');

    // if (confirm('작성하신 리뷰를 삭제하시겠습니까?') === true) {
    //   await deleteReviewRequest(`review/${review.reviewId}`);
    //   navigate('/reviewboard');
    // }
  };

  return (
    <>
      <MyModal isOpen={isOpen} onModalStateChangeEvent={modalHandler}>
        <WritingEditor review={props.review} mode="edit" />
      </MyModal>
      <ContentsModalWrapper>
        <AddImage></AddImage>
        <AddWriting>
          <TopDiv>
            <div className="user-name">유저 프로필 사진 + 닉네임</div>
            <ButtonBox>
              <EditDelBtn
                onClick={(e) => {
                  e.preventDefault();
                  modalHandler();
                  handleEditMyReview;
                }}
              >
                수정
              </EditDelBtn>
              <EditDelBtn onClick={handleDeleteMyReview}>삭제</EditDelBtn>
            </ButtonBox>
          </TopDiv>
          <ContentsBox>
            <div className="user-contents">{props.review?.description}</div>
            {comments?.map((comment) => (
              <div key={comment.id} className="user-comments">
                {comment.description}
              </div>
            ))}
          </ContentsBox>
          <BottomDiv>
            <div className="like">
              <LikeBtn />
            </div>
            <div className="date">{newDate}</div>
            <CommentBox>
              <input
                type="text"
                placeholder="댓글 달기..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button onClick={postReviewComments}>게시</button>
            </CommentBox>
          </BottomDiv>
        </AddWriting>
      </ContentsModalWrapper>
    </>
  );
};

export default ContentsViewer;

const ContentsModalWrapper = styled.form`
  width: 65%;
  height: 80%;
  max-width: 60rem;
  min-width: 40rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 2%;
  font-family: ${font.normal};
`;

const AddImage = styled.div`
  border-right: solid 1px lightgray;
`;

const AddWriting = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .user-name {
    height: 4.3rem;
    line-height: 5rem;
    padding-left: 3%;
  }
`;

const ContentsBox = styled.div`
  border: solid 1px lightgray;
  padding: 3% 2%;
  height: 70%;
  max-width: 29rem;
  max-height: 35rem;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -ms-overflow-style: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  .user-contents {
    border-bottom: solid 1px lightgray;
    padding-bottom: 10px;
    line-height: 22px;
  }

  .user-comments {
    padding-top: 10px;
    width: 100%;
    line-height: 20px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ButtonBox = styled.div`
  width: 8rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const BottomDiv = styled.div`
  .like {
    float: left;
    margin: 3px 5px;
    font-size: 1rem;
  }
  .date {
    font-size: 1rem;
    float: right;
    margin: 1% 2%;
  }
`;

const CommentBox = styled.div`
  border-top: solid 1px lightgray;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-width: 19rem;
  max-width: 50rem;
  height: 3rem;
  line-height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  input {
    height: 2.5rem;
    width: 100%;
    padding: 0 2%;
    border: 0;
    outline: 0;
    font-size: 15px;
  }
  button {
    width: 5.5rem;
    background: none;
    border: none;
    cursor: pointer;
    height: 3rem;
    line-height: 3rem;
    font-family: ${font.bold};
    border-left: 1px solid lightgray;
    color: ${theme.mainColor};
    font-size: 17px;
  }
`;
