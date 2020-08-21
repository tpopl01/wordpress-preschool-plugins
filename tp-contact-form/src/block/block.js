/**
 * BLOCK: tp-contact-form
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
registerBlockType( 'cgb/block-tp-contact-form', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tp-contact-form - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'tp-contact-form — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		message1: {
			type: 'array',
			source: 'children',
			selector: '.message-body',
		},
		message2: {
			type: 'array',
			source: 'children',
			selector: '.message-body1',
		},
		message3: {
			type: 'array',
			source: 'children',
			selector: '.message-body2',
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
		const { attributes: { message1, message2, message3 }, className, setAttributes } = props;
		const onChangeMessage1 = message1 => { setAttributes( { message1 } ) };
		const onChangeMessage2 = message2 => { setAttributes( { message2 } ) };
		const onChangeMessage3 = message3 => { setAttributes( { message3 } ) };

		return (
			<div className={ className }>
				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add your address', 'tp-contact-form' ) }
					onChange={ onChangeMessage1 }
					value={ message1 }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add your email', 'tp-contact-form' ) }
					onChange={ onChangeMessage2 }
					value={ message2 }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add your phone', 'tp-contact-form' ) }
					onChange={ onChangeMessage3 }
					value={ message3 }
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
		const { message1, message2, message3 } = props.attributes;
		return (
			<div className={ props.className }>
			<div class="row">
			<div class="col">
				<div class="card h-100">
					<div class="card-header bg-primary text-white"><i class="fa fa-envelope"></i> Contact us</div>
					<div class="card-body h-100">
						<form class="form">
							<div class="form-group">
								<label for="name">Name <span>*</span></label>
								<input name="message_name" type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required></input>
							</div>
							<div class="form-group">
								<label for="email">Email address <span>*</span></label>
								<input name="message_email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required></input>
							</div>
							<div class="form-group">
								<label for="message">Message <span>*</span></label>
								<textarea name="message_text" class="form-control" id="message" rows="6" required></textarea>
							</div>
							<div class="mx-auto">
							<button name="submitted" value="1" type="submit" class="btn btn-primary text-right">Submit</button></div>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-sm-4">
				<div class="card bg-light mb-3">
					<div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
					<div class="card-body">
						<RichText.Content 
							tagName="div"
							format="string"
							class="message-body"
							multiline="p" 
							value={ message1 } 
						/>
					</div>
				</div>
				<div class="card bg-light mb-3">
					<div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-envelope"></i> Email</div>
					<div class="card-body">
						<RichText.Content 
							tagName="div"
							format="string"
							class="message-body1"
							multiline="p" 
							value={ message2 } 
						/>
					</div>
				</div>
				<div class="card bg-light">
					<div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-phone"></i> Telephone</div>
					<div class="card-body">
						<RichText.Content 
							tagName="div"
							format="string"
							class="message-body2"
							multiline="p" 
							value={ message3 } 
						/>
					</div>
				</div>
			</div>
		</div>
		</div>
		);
	},
} );
