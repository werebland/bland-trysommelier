import React, { Component } from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'
import Dropzone from 'react-dropzone'
import TextField from '@material-ui/core/TextField';

const MenuAdderContainer = styled.div`
  width: 100%;
  max-width: 720px;
  border: 2px dashed #dfdfdf;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fff;
`;

const PosedPaper = posed.div({

})

const StyledPaper = styled((props) => <PosedPaper {...props} />)`
  width: 100%;
  height: 128px;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const MenuUploadStatus = styled.div`

`;

const MenuUploadDetails = styled.div`

`;

const FileDropzone = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.isactive ? 'green' : '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 500;
  color: #9f9f9f;
`;

class MenuAdder extends Component {

  render() {
    return (
      <MenuAdderContainer>
        <PoseGroup>
          {this.props.menus.map((menu, i) =>
            <StyledPaper key={i}>
              <TextField
                variant="outlined"
                label="Menu name"
                value={menu.name} onChange={(e) => this.props.handleName(e.target.value)} margin="normal" />
              <div onClick={() => this.props.handleRemove(i)}>
                x
              </div>
            </StyledPaper>
          )}
          <StyledPaper key={-1}>
            <Dropzone onDrop={(accepted, rejected) => this.props.handleDrop(accepted, rejected)} multiple>
              {({getRootProps, getInputProps, isDragActive}) => {
                return (
                  <FileDropzone
                    {...getRootProps()}
                    isactive={isDragActive}
                  >
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop files here...</p> :
                        <p>Drop your menu(s) here</p>
                    }
                  </FileDropzone>
                )
              }}
            </Dropzone>
          </StyledPaper>
        </PoseGroup>

      </MenuAdderContainer>
    );
  }

}

export default MenuAdder;
