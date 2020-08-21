/**
 * BLOCK: tp-text-left-picture-right
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor;
const {
    Editable,
    MediaUpload,
} = wp.blockEditor;
const {
    Button,
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-tp-text-left-picture-right', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tp-text-left-picture-right - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'tp-text-left-picture-right — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		heading: {
			type: 'string',
		},
		message: {
			type: 'array',
			source: 'children',
			selector: '.message-body',
		},
		imgURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		imgID: {
			type: 'number',
		},
		imgAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const { attributes: { heading, message, imgID, imgURL, imgAlt }, className, setAttributes, isSelected } = props;
		const onChangeMessage = message => { setAttributes( { message } ) };
		const onChangeHeading = heading => { setAttributes( { heading } ) };
		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			} );
		};
		const onRemoveImage = () => {
			setAttributes({
				imgID: null,
				imgURL: null,
				imgAlt: null,
			});
		}

		return (
			<div className={ className }>
				 { ! imgID ? (
					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ imgID }
						render={ ( { open } ) => (
							<Button
								className={ "button button-large" }
								onClick={ open }
							>
								Upload
								{ __( ' Upload Image', 'jsforwpblocks' ) }
							</Button>
						) }
					>
					</MediaUpload>

					) : (

					<p class="image-wrapper">
						<img
							src={ imgURL }
							alt={ imgAlt }
						/>

						{ isSelected ? (

							<Button
								className="remove-image"
								onClick={ onRemoveImage }
							>
								Remove
							</Button>

						) : null }

					</p>
				)}


				<RichText
					tagName="h1"
					placeholder={ __( 'Add your custom heading', 'tp-text-left-picture-right' ) }
					onChange={ onChangeHeading }
					value={ heading }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add your custom message', 'tp-text-left-picture-right' ) }
					onChange={ onChangeMessage }
					value={ message }
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const { heading, message, imgURL, imgAlt } = props.attributes;

		return (
			<div className={ props.className }>
				<section class="boxes">
					<div class="container marketing">
						<div class="row align-items-center">
						<div class="col-lg-6">
							<div class="align-right">
							<RichText.Content tagName="h1" class="message-header" value={ heading } />
							
							<RichText.Content 
								tagName="div"
								format="string"
								class="message-body"
								multiline="p" 
								value={ message } 
							/>
							</div>
						</div>
						<div class="col-lg-6">
							<img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"  src={imgURL} alt={imgAlt}></img>
						</div>
						</div>
					</div>
					</section>
			</div>
		);
	},
} );
