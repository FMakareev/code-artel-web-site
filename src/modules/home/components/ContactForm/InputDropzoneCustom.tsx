import * as React from 'react';
import ReactDropzone from 'react-dropzone';
import { Box, Text } from 'code-artel-ui-lib';
import { FieldRenderProps } from 'react-final-form';

// import { Fiel } from 'final-form'

export const InputDropzoneCustom: React.FC<FieldRenderProps<any>> = ({
  input: { onChange },
}: FieldRenderProps<any>) => (
  <Box my={5}>
    <ReactDropzone
      onDrop={acceptedFiles => acceptedFiles && onChange(acceptedFiles[0])}
      maxSize={52428800}>
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
                  {file && file.path} ({file.size} bytes)
                </Text>
              ))}
            </div>
          </div>
        );
      }}
    </ReactDropzone>
  </Box>
);

export default InputDropzoneCustom;
