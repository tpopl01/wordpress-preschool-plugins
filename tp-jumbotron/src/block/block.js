/**
 * BLOCK: tp-jumbotron
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
registerBlockType( 'cgb/block-tp-jumbotron', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tp-jumbotron - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'tp-jumbotron — CGB Block' ),
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
		const { attributes: { heading, message }, className, setAttributes } = props;
		const onChangeMessage = message => { setAttributes( { message } ) };
		const onChangeHeading = heading => { setAttributes( { heading } ) };

		return (
			<div className={ className }>
				<RichText
					tagName="h1"
					placeholder={ __( 'Add your custom heading', 'tp-jumbotron' ) }
					onChange={ onChangeHeading }
					value={ heading }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add your custom message', 'tp-jumbotron' ) }
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
		const { heading, message } = props.attributes;

		return (
			<div className={ props.className }>
				<div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
               <div class="col-md-8 px-0">
			   		<RichText.Content tagName="h1" class="message-header display-4 text-white" value={ heading } />
							
					<RichText.Content 
						tagName="div"
						format="string"
						class="message-body"
						multiline="p" 
						value={ message } 
					/>
				</div>
             </div>
			</div>
		);
	},
} );
