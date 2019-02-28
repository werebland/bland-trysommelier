import React, { Component } from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'
import Dropzone from 'react-dropzone'
import TextField from '@material-ui/core/TextField';

const MenuAdderContainer = styled.div`
  width: 100%;
  max-width: 720px;
`;

const StyledTextField = styled(TextField)`
  width: 100% !important;
  border-radius: 8px !important;
  font-family: 'Source Sans Pro', sans-serif !important;

  & fieldset {
    border-radius: 0 !important;
    border: 4px solid #1f1f1f !important;
  }

  & input {
    border-radius: 0 !important;
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`;

const DropzoneContainer = styled.div`
  width: 100%;
  height: 140px;
  border: 2px dashed ${props => props.active ? '#1f1f1f' : '#9f9f9f'};
  padding: 24px;
  box-sizing: border-box;
  border-radius: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  transition: 0.2s ease-out all;

  & .initiate-dropzone {
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%:
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const PosedFilesContainer = posed.div({
  enter: {
    staggerChildren: 300,
  },
  exit: {
    staggerChildren: 300,
  }
})

const FilesContainer = styled((props) => <PosedFilesContainer {...props} />)`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 16px;
`;

const PosedFile = posed.div({
  enter: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "32px",
    opacity: 0,
  },
  preEnter: {
    y: "32px",
    opacity: 0,
  }
})

const File = styled((props) => <PosedFile {...props} />)`
  width: 100%;
  border: 4px solid #1f1f1f;
  box-sizing: border-box;
  margin-bottom: 8px;
  padding: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  opacity: 0;
  transform: translate(0,32px);

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FileRemove = styled.span`
  padding: 16px;
`;


const MenuAdder = ({handleDrop, files, handleName, handleRemove}) => (
  <MenuAdderContainer>
      <Dropzone onDrop={(accepted,rejected) => handleDrop(accepted, rejected)}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <DropzoneContainer
              {...getRootProps({ refKey: 'innerRef' })}
              className="initiate-dropzone"
              active={isDragActive}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </DropzoneContainer>
          )
        }}
      </Dropzone>
    <FilesContainer>
        {files.map((file, i) =>
          <File key={i}>
            <StyledTextField
              label='Menu name'
              variant="outlined"
              onChange={(e) => handleName(e.target.value, i)}
              value={file.name}/>
            <FileRemove onClick={() => handleRemove(i)}>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </FileRemove>
          </File>
        )}
    </FilesContainer>
  </MenuAdderContainer>
);

export default MenuAdder;
