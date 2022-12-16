import useModal from '../../hooks/modal/useModal';
import MyModal from './MyModal';
import ReviewPuppyCard from '../reviewBoard/ReviewPuppyCard';
import ReviewContentsViewer from '../reviewBoard/ReviewContentsViewer';
import { ReviewPostType, ReviewType } from '../../types/reviewboard/reviewType';
import { UserInfoType } from '../../types/auth/authType';
import { useEffect } from 'react';

export interface ReviewTypeProps {
  userId?: string;
  review?: ReviewType;
  mode?: string;
  getReviews?: () => Promise<void>;
  modalHandler?: () => void;
  currentUser?: string;
  userInfo?: UserInfoType;
  onCardModalClickEvent?: () => void;
  reviewPost?: ReviewPostType;
}

const ReviewContentsModal = ({
  review,
  getReviews,
  currentUser,
  userInfo,
}: ReviewTypeProps) => {
  const [isOpen, modalHandler] = useModal();

  return (
    <>
      <MyModal isOpen={isOpen} onModalStateChangeEvent={modalHandler}>
        <ReviewContentsViewer
          review={review}
          getReviews={getReviews}
          currentUser={currentUser}
          userInfo={userInfo}
        />
      </MyModal>
      <ReviewPuppyCard
        review={review}
        onCardModalClickEvent={modalHandler}
      ></ReviewPuppyCard>
    </>
  );
};

export default ReviewContentsModal;
