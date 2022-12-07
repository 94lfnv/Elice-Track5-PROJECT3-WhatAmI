import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Modal } from '@mui/material';

import {
  CommonMyInput,
  EntryBtn,
  CreateBtn,
  CommonMyButton,
} from '../../assets/styles/common/commonComponentStyle';
import {
  EditUserData,
  EditUserImg,
  getUserData,
} from '../../apis/mypageFetcher';
import Storage from '../../storage/storage';

function Profile() {
  const [open, setOpen] = useState(false);
  const [profileImg, setProfileImg] = useState<string>('/');
  const [imgPreview, setImgPreview] = useState<string>(profileImg);
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function getData() {
      const response = await getUserData();
      setProfileImg(response.profileImg);
      setNickname(response.nickname);
    }
    getData();
  }, []);

  // TODO e type지정에 React.ChangeEvent<HTMLInputElement>가 아닌가?
  // TODO 왜 네트워크 응답에 profileImg가 undefined이지?
  async function EditImg(e: any) {
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    // await setProfileImg(e.target.files[0]);
    const response = await EditUserImg(e.target.files[0]);
    console.log(response);
  }

  async function EditData(e: any) {
    e.preventDefault();
    const response = await EditUserData(nickname, password);
    response.statusText === 'OK'
      ? (window.alert('성공적으로 수정되었습니다.'),
        Storage.setNicknameItem(response.data.nickname),
        location.reload())
      : window.alert('수정에 실패하였습니다.');
    console.log(response);
  }

  return (
    <Div>
      <ProfileImgContainer>
        <label htmlFor="ex_file">
          <Avatar
            className="btnStart"
            sx={{ width: 150, height: 150 }}
            src={imgPreview}
          />
        </label>
        <input
          type="file"
          id="ex_file"
          accept="image/jpg, image/png, image/jpeg"
          onChange={EditImg}
        />
      </ProfileImgContainer>

      <InputContainer>
        닉네임
        <CommonMyInput
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        ></CommonMyInput>
      </InputContainer>
      <ButtonContainer>
        <EditButton onClick={handleOpen}>수정</EditButton>
        {/* <EditButton onClick={EditData}>수정</EditButton> */}
        <DeleteButton>회원 탈퇴</DeleteButton>
      </ButtonContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          비밀번호를 입력해주세요{' '}
          <form onSubmit={EditData}>
            <CommonMyInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></CommonMyInput>
            <CommonMyButton type="submit">로그인</CommonMyButton>
          </form>
        </ModalContainer>
      </Modal>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

const InputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled(EntryBtn)`
  width: 290px;
  margin-left: 0px;
`;

const DeleteButton = styled(CreateBtn)`
  width: 290px;
  margin-left: 0px;
`;

const ProfileImgContainer = styled.div`
  label {
    display: inline-block;
    border-radius: 100%;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }

  input[type='file'] {
    :hover {
      background-color: black;
      border-radius: 100%;
    }
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  :hover {
    .wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 20px;
      box-shadow: 1px 2px 5px gray;
      transition: all 0.02s linear;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  padding: 20px 50px;
  border: 1px solid #000;
  background-color: white;
`;

export default Profile;
