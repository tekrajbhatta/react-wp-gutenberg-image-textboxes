import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import {
    Button,
    PanelBody,
    __experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import tickIcon from './tick.svg';

function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageId, textBoxes = [] } = attributes;

    const blockProps = useBlockProps({
        className: 'image-textboxes'
    });

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
        });
    };

    const onRemoveImage = () => {
        setAttributes({
            imageUrl: '',
            imageId: null,
        });
    };

    const addTextBox = () => {
        const newTextBoxes = [
            ...textBoxes,
            {
                content: '',
                top: '0',
                right: '0'
            }
        ];
        setAttributes({ textBoxes: newTextBoxes });
    };

    const removeTextBox = (index) => {
        const newTextBoxes = textBoxes.filter((_, i) => i !== index);
        setAttributes({ textBoxes: newTextBoxes });
    };

    const updateTextBoxContent = (content, index) => {
        const newTextBoxes = [...textBoxes];
        newTextBoxes[index] = {
            ...newTextBoxes[index],
            content
        };
        setAttributes({ textBoxes: newTextBoxes });
    };

    const updateTextBoxPosition = (index, key, value) => {
        const newTextBoxes = [...textBoxes];
        newTextBoxes[index] = {
            ...newTextBoxes[index],
            [key]: value.toString()
        };
        setAttributes({ textBoxes: newTextBoxes });
    };

    return (
        <>
            <InspectorControls>
                {textBoxes.map((textBox, index) => (
                    <PanelBody
                        key={index}
                        title={__(`Text Box ${index + 1} Position`)}
                        initialOpen={false}
                    >
                        <NumberControl
                            label={__('Top Position (px)')}
                            value={parseInt(textBox.top) || 0}
                            onChange={(value) => updateTextBoxPosition(index, 'top', value)}
                            min={-500}
                            max={500}
                        />
                        <NumberControl
                            label={__('Right Position (px)')}
                            value={parseInt(textBox.right) || 0}
                            onChange={(value) => updateTextBoxPosition(index, 'right', value)}
                            min={-500}
                            max={500}
                        />
                    </PanelBody>
                ))}
            </InspectorControls>

            <div {...blockProps}>
                <div className="image-container">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <>
                                    {!imageUrl ? (
                                        <Button
                                            onClick={open}
                                            className="select-image-button"
                                            variant="secondary"
                                        >
                                            {__('Select Image')}
                                        </Button>
                                    ) : (
                                        <div className="image-wrapper">
                                            <img src={imageUrl} alt="" />
                                            <Button
                                                onClick={onRemoveImage}
                                                className="remove-image"
                                                variant="secondary"
                                            >
                                                {__('Remove Image')}
                                            </Button>
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
                                                    <img 
                                                        src={tickIcon} 
                                                        alt="Tick Icon" 
                                                        className="tick-icon"
                                                    />
                                                    <RichText
                                                        tagName="div"
                                                        value={textBox.content}
                                                        onChange={(content) => updateTextBoxContent(content, index)}
                                                        placeholder={__('Enter text...')}
                                                    />
                                                    <Button
                                                        onClick={() => removeTextBox(index)}
                                                        variant="secondary"
                                                    >
                                                        {__('Remove')}
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button
                                                onClick={addTextBox}
                                                variant="primary"
                                                className="add-text-box"
                                            >
                                                {__('Add Text Box')}
                                            </Button>
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
            </div>
        </>
    );
}

export default Edit;
