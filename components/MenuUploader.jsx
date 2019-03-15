import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone'
import posed, {PoseGroup} from 'react-pose'
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  width: 100% !important;
  border-radius: 8px !important;
  font-family: 'Source Sans Pro', sans-serif !important;

  & fieldset {
    border: 2px solid #1f1f1f !important;
    border-radius: 8px !important;
  }

  & input {
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`;

const MenuUploaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
  position: relative;
  z-index: 3;
`;

const MenuUploaderDropzone = styled.div`
  width: 100%;
  height: 172px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #dcdcdc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const MenuUploaderFiles = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
`;

const PosedMenuUploaderFile = posed.li({
  enter: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
  preEnter: {
    y: -32,
    opacity: 0,
  }
})

const MenuUploaderFile = styled(props => <PosedMenuUploaderFile {...props} />)`
  list-style: none;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 16px;
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
`;

const MenuUploaderFileRemove = styled.div`
  width: 40px;
  height: 56px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuUploader = ({ files, handleDrop, handleRemove, handleMenuName }) => (
  <MenuUploaderContainer>
    <Dropzone onDrop={(accepted, rejected) => handleDrop(accepted, rejected)}>
      {({getRootProps, getInputProps}) => (
        <MenuUploaderDropzone {...getRootProps({ refKey: 'innerRef' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </MenuUploaderDropzone>
      )}
    </Dropzone>
    <MenuUploaderFiles>
      {files.map((file, i) =>
        <MenuUploaderFile key={file.name} >
          <StyledTextField variant="outlined" label="Menu name" value={file.name} onChange={(e) => handleMenuName(e.target.value, i)}/>
          <MenuUploaderFileRemove onClick={() => handleRemove(i)}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>
            </svg>
          </MenuUploaderFileRemove>
        </MenuUploaderFile>
      )}
    </MenuUploaderFiles>
  </MenuUploaderContainer>
);

export default MenuUploader;
