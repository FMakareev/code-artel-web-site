import * as React from 'react';
import htmlReactParser from 'html-react-parser';
import showdown from 'showdown';

export enum StringToReactEnum {
  HTML = 'html',
  MARKDOWN = 'markdown',
}

interface IStringToReactProps {
  type?: StringToReactEnum;
  content: string;
}
const MD2HTMLConverter = new showdown.Converter();

export const StringToReact: React.FC<IStringToReactProps> = ({
  type,
  content,
}: IStringToReactProps) => {
  if (type === StringToReactEnum.HTML) {
    return <React.Fragment>{htmlReactParser(content)}</React.Fragment>;
  }
  if (type === StringToReactEnum.MARKDOWN) {
    return <React.Fragment>{htmlReactParser(MD2HTMLConverter.makeHtml(content))}</React.Fragment>;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

StringToReact.defaultProps = {
  type: StringToReactEnum.MARKDOWN,
};

export default StringToReact;
