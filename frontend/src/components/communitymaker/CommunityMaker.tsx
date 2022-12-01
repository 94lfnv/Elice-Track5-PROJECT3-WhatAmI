import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createCommuRequest } from '../../apis/communityFetcher';
import { font } from '../../assets/styles/common/fonts';
import { theme } from '../../assets/styles/common/palette';

// TODO: 커뮤 이름, 소개글 안 적으면 버튼 비활성화
// 일단 alert으로 일러주기

const CommunityMaker = () => {
  const [communityImage, setCommunityImage] = useState<
    string | ArrayBuffer | null
  >(`${import.meta.env.VITE_PUBLIC_URL}/img/default_image3.png`);
  const [name, setName] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');

  const navigate = useNavigate();

  // 사진 미리보기
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setCommunityImage(reader.result);
      };
    }
  };

  const handleDeletePreviewFile = (e: React.MouseEvent) => {
    // URL.revokeObjectURL(communityImage);
    e.preventDefault();
    setCommunityImage(
      `${import.meta.env.VITE_PUBLIC_URL}/img/default_image3.png`,
    );
  };

  const handleCreateCommuFormClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCommuRequest('community', {
      name,
      communityImage,
      introduction,
    });
    // console.log(res.data);
    // navigate('/likedcommunity');
  };

  return (
    <CommuMakeModalWrapper onSubmit={handleCreateCommuFormClick}>
      <ModalHeader>커뮤니티 만들기</ModalHeader>
      <ModalContent>
        <AddImage>
          <ImageTextBox>
            <div className="image-text-box">
              커뮤니티 대표 이미지
              <button onClick={handleDeletePreviewFile}>삭제</button>
            </div>
            <input type="file" accept="image/*" onChange={handleChangeFile} />
          </ImageTextBox>
          <RoundImage>
            {communityImage && (
              <img src={communityImage.toString()} className="pre-img" />
            )}
          </RoundImage>
        </AddImage>
        <AddName>
          커뮤니티 이름
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </AddName>
        <AddIntro>
          커뮤니티 소개글
          <textarea
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </AddIntro>
      </ModalContent>
      <ModalBottom>
        <button type="submit">완료</button>
      </ModalBottom>
    </CommuMakeModalWrapper>
  );
};

export default CommunityMaker;

const CommuMakeModalWrapper = styled.form`
  width: 50%;
  height: 75%;
  max-width: 35rem;
  min-width: 30rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.backColor};
  border-radius: 3%;
  font-family: ${font.bold};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ModalHeader = styled.div`
  width: 15rem;
  height: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

const ModalContent = styled.div`
  max-width: 27rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const AddImage = styled.div`
  width: 27rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .image-text-box {
    button {
      margin-left: 5px;
    }
  }
  input {
    margin-top: 10px;
  }
`;

const RoundImage = styled.div`
  height: 8rem;
  width: 8rem;
  border: solid 1px black;
  border-radius: 50%;
  margin-left: 0.5rem;
  position: relative;
  overflow: hidden;

  .pre-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AddName = styled.div`
  width: 28rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  input {
    border: solid 1px black;
    width: 15rem;
    height: 2rem;
    margin-left: 30px;
    font-size: 15px;
    font-family: ${font.normal};
  }
`;

const AddIntro = styled.div`
  width: 28rem;
  height: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  textarea {
    border: solid 1px black;
    width: 15rem;
    height: 7rem;
    resize: none;
    margin-left: 15px;
    font-size: 15px;
    font-family: ${font.normal};
    line-height: 18px;
    padding: 3px;
  }
`;

const ModalBottom = styled.div`
  width: 15rem;
  height: 3rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  button {
    width: 12rem;
    height: 2.7rem;
    cursor: pointer;
    border: 0;
    color: white;
    background-color: ${theme.mainColor};
    border-radius: 20px;
    font-family: ${font.bold};
    font-size: 16px;
  }
`;
