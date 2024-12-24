import { useBlockProps, RichText } from '@wordpress/block-editor';

function save({ attributes }) {
    const { imageUrl, textBoxes = [] } = attributes;
    const blockProps = useBlockProps.save({
        className: 'image-textboxes'
    });

    return (
        <div {...blockProps}>
            <div className="image-container">
                {imageUrl && (
                    <div className="image-wrapper">
                        <img src={imageUrl} alt="" />
                        {textBoxes.map((textBox, index) => (
                            <div
                                key={index}
                                className="text-box"
                                style={{
                                    top: `${textBox.top}px`,
                                    right: `${textBox.right}px`
                                }}
                                data-top={textBox.top}
                                data-right={textBox.right}
                            >
                                <RichText.Content
                                    tagName="div"
                                    className="rich-text"
                                    value={textBox.content}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default save;
