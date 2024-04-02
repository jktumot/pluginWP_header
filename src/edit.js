import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const { text } = attributes;
  const blockProps = useBlockProps();
  return (
    <RichText
      {...blockProps}
      tagName="h1"
      value={text}
      onChange={(value) => setAttributes({ text: value })}
      placeholder={'Напишите заголовок'}
      allowedFormats={['core/bold']}
    />
  );
}
