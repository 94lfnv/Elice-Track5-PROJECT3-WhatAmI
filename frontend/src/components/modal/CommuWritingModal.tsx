import MyModal from './MyModal';
import useModal from '../../hooks/modal/useModal';
import { CreateBtn } from '../../assets/styles/common/commonComponentStyle';
import CommuWritingEditor from '../writingeditor/CommuWritingEditor';
import { CurrentCommuityProps } from './CommuContentsModal';
import { useEffect } from 'react';

const CommuWritingModal = ({ commuInfo }: CurrentCommuityProps) => {
  const [isOpen, modalHandler] = useModal();

  return (
    <>
      <MyModal isOpen={isOpen} onModalStateChangeEvent={modalHandler}>
        <CommuWritingEditor commuInfo={commuInfo} />
      </MyModal>
      <CreateBtn onClick={modalHandler}> 글쓰기 </CreateBtn>
    </>
  );
};

export default CommuWritingModal;
