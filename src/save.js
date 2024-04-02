import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { text } = attributes;
  const blockProps = useBlockProps.save();
  return <RichText.Content {...blockProps} tagName="h1" value={text} />;
}
