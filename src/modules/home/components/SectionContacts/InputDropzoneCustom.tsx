import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Box, Text } from 'code-artel-ui-lib';

export const InputDropzoneCustom = () => (
  <Box my={5}>
    <Dropzone maxSize={52428800}>
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        return (
          <div className={'container'}>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <Text variant={'body1_normal'} color={'black'}>
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  Прикрепить файл
                </span>
                (до 50мб)
              </Text>
            </div>
            <div>
              {acceptedFiles.map(file => (
                <Text variant={'body1_normal'} color={'black'} key={file.path}>
                  {file.path} ({file.size} bytes)
                </Text>
              ))}
            </div>
          </div>
        );
      }}
    </Dropzone>
  </Box>
);

export default InputDropzoneCustom;
