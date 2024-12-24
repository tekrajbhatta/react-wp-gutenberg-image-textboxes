# Image Textboxes Gutenberg Block

A custom WordPress Gutenberg block that allows users to add an image and overlay it with multiple text boxes. Each text box can be positioned independently on the image, offering full control over placement and content.

## Features

- **Image Upload:** Select or upload an image to serve as the base layer.
- **Dynamic Text Boxes:** Add multiple text boxes over the image with customizable text.
- **Position Control:** Adjust the position of each text box with intuitive controls for `top` and `right` values.
- **Responsive Design:** Ensures the layout looks great across devices.

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/tekrajbhatta/react-wp-gutenberg-image-textboxes.git
  ```
2. Navigate to the plugin directory:
  ```bash
  cd react-wp-gutenberg-image-textboxes
  ```
3. Build the block: Ensure you have Node.js installed, then run:
  ```bash
  npm install
  npm run build
  ```
4. Copy the plugin folder to your WordPress installation under wp-content/plugins.
5. Activate the plugin from the WordPress admin dashboard.

## Usage

1. Navigate to the block editor in WordPress.
2. Add the Image Textboxes block from the "Custom Blocks" category.
3. Upload or select an image.
4. Use the "Add Text Box" button to overlay text boxes on the image.
5. Customize the position of each text box using the controls in the block inspector.

## Development

### File Structure

- **`block.json`**: Metadata and configuration for the block.
- **`edit.js`**: React component for the block editor.
- **`save.js`**: React component for the block frontend.
- **`index.js`**: Registers the block with WordPress.
- **`style.css`**: Styling for the block frontend.
- **`index.php`**: PHP code to register the block on the server.

### Scripts

- **`npm start`**: Starts a development build with watch mode.
- **`npm run build`**: Creates a production build.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
  ```bash
  git checkout -b feature/new-feature
  ```
3. Commit your changes:
  ```bash
  git commit -m "Add new feature"
  ```
4. Push to your branch:
  ```bash
  git push origin feature/new-feature
  ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
