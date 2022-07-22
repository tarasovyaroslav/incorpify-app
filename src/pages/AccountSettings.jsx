import React, { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

import Card from 'common/Card';

import { ReactComponent as IconShow } from 'components/Main/Content/AccountSettings/assets/show.svg';
import { ReactComponent as IconHide } from 'components/Main/Content/AccountSettings/assets/hide.svg';
import SettingsNav from 'components/Main/Content/SettingsNav';
import Button from 'common/Button';

const ContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 658px;

  gap: 19px;
`;

const ChangeInfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ChangePasswordCard = styled(ChangeInfoCard)``;

const CardHeader = styled.div`
  padding: 30px;
  /* border-bottom: 1px solid #dbe4f0; */
  color: #7c8db5;
  font-weight: 500;
  font-size: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px;
  /* overflow-y: scroll; */
  flex-grow: 1;
  padding-bottom: 30px;
  /* width: */
`;

const CardItemStyled = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  color: #25396f;
  position: relative;

  input {
    width: 440px;
    border: 1px solid #bdc6da;
    border-radius: 8px;
    padding: 9px 20px;
    color: #25396f;
    font-family: inherit;
    font-weight: 400;
    outline: none;
  }
`;

// const CardItemInput = styled.input`
//   width: 440px;
//   border: 1px solid #bdc6da;
//   border-radius: 8px;
//   padding: 9px 20px;
//   color: #25396f;
//   font-family: inherit;
//   font-weight: 400;
//   outline: none;
// `;

// const CardItemInputPhone = styled(InputMask)`
//   width: 440px;
//   border: 1px solid #bdc6da;
//   border-radius: 8px;
//   padding: 9px 20px;
//   color: #25396f;
//   font-family: inherit;
//   font-weight: 400;
//   outline: none;
// `;

const HideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  right: 21px;
  border: none;
  /* border-radius: 50%; */
  /* padding: px; */
  width: 30px;
  height: 30px;
  outline: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// const accountItems = [
//   { id: 1, title: 'First Name', value: 'Bill' },
//   { id: 2, title: 'Last Name', value: 'Smith' },
//   { id: 3, title: 'Email', value: 'billsmith@gmail.com' },
//   { id: 4, title: 'Phone Number', value: 'Phone Number' },
// ];

// const passwordItens = [
//   { id: 1, title: 'Current Password', value: 'billsmith4860' },
//   { id: 2, title: 'New Password', value: '******' },
//   { id: 3, title: 'Change Password', value: '******' },
// ];

const CardPasswordItem = ({
  title,
  text,
  inputtype,
  handler,
  show,
  showHandler,
}) => {
  return (
    <CardItemStyled>
      {title}
      <input
        type={show ? 'text' : inputtype}
        value={text}
        onChange={(e) => handler(e.target.value)}
        // {...otherProps}
      />
      {inputtype === 'password' ? (
        <HideButton onClick={() => showHandler(!show)}>
          {show ? (
            <IconHide style={{ color: '#7C8DB5' }} />
          ) : (
            <IconShow style={{ color: '#7C8DB5' }} />
          )}
        </HideButton>
      ) : (
        ''
      )}
    </CardItemStyled>
  );
};

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonStyled = styled(Button)`
  width: 180px;
  height: 44px;
`;

const CancelButton = styled(ButtonStyled)`
  background-color: white;
  border: 1px solid #0181b6;
  color: #0181b6;
`;
const SubmitButton = styled(ButtonStyled)`
  background-color: #07cea4;
  /* border: 1px solid #0181b6; */
  color: white;
`;

const CardItem = ({
  title,
  text,
  inputtype,
  handler,
  // ...otherProps
}) => {
  // const pattern = [/^\+?\d{1,2}\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/];

  const mask = '+99 (999) 999 99 99';

  return (
    <CardItemStyled>
      {title}
      {/* <CardItemTitle></CardItemTitle> */}
      {inputtype === 'tel' ? (
        <InputMask
          // mask={pattern}
          // mask={'999 - 999 - 999'}
          mask={mask}
          maskPlaceholder="_"
          // alwaysShowMask={true}
          onChange={(e) => handler(e.target.value)}
          value={text}
          required
        />
      ) : (
        <input
          type={inputtype}
          value={text}
          onChange={(e) => handler(e.target.value)}
          required
          // {...otherProps}
        />
      )}
    </CardItemStyled>
  );
};

const AccountSettings = () => {
  const [firstName, setFirstName] = useState('Bill');
  const [secondName, setSecondName] = useState('Smith');
  const [email, setEmail] = useState('billsmith@gmail.com');
  const [phone, setPhone] = useState('+45 (986) 456 55 66');

  const [currentPassword, setCurrentPassword] =
    useState('billsmith4860');
  const [newPassword, setNewPassword] = useState('666billsmith666');
  const [changePassword, setChangePassword] =
    useState('666billsmith666');

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <>
      {/* <CompanyInfo /> */}
      <SettingsNav />
      <ContentContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submited');
        }}
        onReset={(e) => {
          e.preventDefault();
          console.log('Form reset');
        }}
      >
        <ChangeInfoCard>
          <CardHeader>Account information</CardHeader>
          <CardContent>
            <CardItem
              title="First Name"
              text={firstName}
              inputtype="text"
              handler={setFirstName}
            />
            <CardItem
              title="Last Name"
              text={secondName}
              inputtype="text"
              handler={setSecondName}
            />
            <CardItem
              title="Email"
              text={email}
              inputtype="email"
              handler={setEmail}
            />
            <CardItem
              title="Phone Number"
              text={phone}
              inputtype="tel"
              handler={setPhone}
            />
          </CardContent>
        </ChangeInfoCard>
        <ChangePasswordCard>
          <CardHeader>Change password</CardHeader>
          <CardContent>
            <CardPasswordItem
              title="Current Password"
              text={currentPassword}
              inputtype="password"
              handler={setCurrentPassword}
              show={showCurrentPassword}
              showHandler={setShowCurrentPassword}
            />
            <CardPasswordItem
              title="New Password"
              text={newPassword}
              inputtype="password"
              handler={setNewPassword}
              show={showNewPassword}
              showHandler={setShowNewPassword}
            />
            <CardPasswordItem
              title="Change Password"
              text={changePassword}
              inputtype="password"
              handler={setChangePassword}
              show={showChangePassword}
              showHandler={setShowChangePassword}
            />
          </CardContent>
        </ChangePasswordCard>
        <Buttons>
          <CancelButton type="reset">Cancel</CancelButton>
          <SubmitButton type="submit">Save</SubmitButton>
        </Buttons>
      </ContentContainer>
    </>
  );
};

export default AccountSettings;
