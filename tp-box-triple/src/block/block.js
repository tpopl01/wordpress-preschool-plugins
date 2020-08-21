/**
 * BLOCK: tp-box-triple
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
registerBlockType( 'cgb/block-tp-box-triple', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tp-box-triple - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'tp-box-triple — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		link: {
			type: 'string',
		},
		icon: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		message: {
			type: 'array',
			source: 'children',
			selector: '.message-body',
		},
		link1: {
			type: 'string',
		},
		icon1: {
			type: 'string',
		},
		heading1: {
			type: 'string',
		},
		message1: {
			type: 'array',
			source: 'children',
			selector: '.message-body-1',
		},
		link2: {
			type: 'string',
		},
		icon2: {
			type: 'string',
		},
		heading2: {
			type: 'string',
		},
		message2: {
			type: 'array',
			source: 'children',
			selector: '.message-body-2',
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
		const { attributes: { link1, icon1, heading1, message1, link, icon, heading, message, link2, icon2, heading2, message2 }, className, setAttributes } = props;
		const onChangeMessage = message => { setAttributes( { message } ) };
		const onChangeHeading = heading => { setAttributes( { heading } ) };
		const onChangeIcon = icon => { setAttributes( { icon } ) };
		const onChangeLink = link => { setAttributes( { link } ) };

		const onChangeMessage1 = message1 => { setAttributes( { message1 } ) };
		const onChangeHeading1 = heading1 => { setAttributes( { heading1 } ) };
		const onChangeIcon1 = icon1 => { setAttributes( { icon1 } ) };
		const onChangeLink1 = link1 => { setAttributes( { link1 } ) };

		const onChangeMessage2 = message2 => { setAttributes( { message2 } ) };
		const onChangeHeading2 = heading2 => { setAttributes( { heading2 } ) };
		const onChangeIcon2 = icon2 => { setAttributes( { icon2 } ) };
		const onChangeLink2 = link2 => { setAttributes( { link2 } ) };

		return (
			<div>
			<div className={ className }>
				<RichText
					tagName="a"
					placeholder={ __( 'Add a link for the icon to take you to.', 'tp-box-triple' ) }
					onChange={ onChangeLink }
					value={ link }
				/>

				<RichText
					tagName="div"
					placeholder={ __( 'Add your custom icon from font awesome e.g. fa fa-calendar, for more visit https://www.w3schools.com/icons/fontawesome_icons_webapp.asp', 'tp-box-triple' ) }
					onChange={ onChangeIcon }
					value={ icon }
				/>

				<RichText
					tagName="h3"
					placeholder={ __( 'Add your custom heading', 'tp-box-triple' ) }
					onChange={ onChangeHeading }
					value={ heading }
				/>

				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add your custom message', 'tp-box-triple' ) }
					onChange={ onChangeMessage }
					value={ message }
				/>
			</div>
				<div className={ className }>
				<RichText
					tagName="a"
					placeholder={ __( 'Add a link for the icon to take you to.', 'tp-box-triple' ) }
					onChange={ onChangeLink1 }
					value={ link1 }
				/>

				<RichText
					tagName="div"
					placeholder={ __( 'Add your custom icon from font awesome e.g. fa fa-calendar, for more visit https://www.w3schools.com/icons/fontawesome_icons_webapp.asp', 'tp-box-triple' ) }
					onChange={ onChangeIcon1 }
					value={ icon1 }
				/>

				<RichText
					tagName="h3"
					placeholder={ __( 'Add your custom heading', 'tp-box-triple' ) }
					onChange={ onChangeHeading1 }
					value={ heading1 }
				/>

				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add your custom message', 'tp-box-triple' ) }
					onChange={ onChangeMessage1 }
					value={ message1 }
				/>
			</div>
			<div className={ className }>
				<RichText
					tagName="a"
					placeholder={ __( 'Add a link for the icon to take you to.', 'tp-box-triple' ) }
					onChange={ onChangeLink2 }
					value={ link2 }
				/>

				<RichText
					tagName="div"
					placeholder={ __( 'Add your custom icon from font awesome e.g. fa fa-calendar, for more visit https://www.w3schools.com/icons/fontawesome_icons_webapp.asp', 'tp-box-triple' ) }
					onChange={ onChangeIcon2 }
					value={ icon2 }
				/>

				<RichText
					tagName="h3"
					placeholder={ __( 'Add your custom heading', 'tp-box-triple' ) }
					onChange={ onChangeHeading2 }
					value={ heading2 }
				/>

				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add your custom message', 'tp-box-triple' ) }
					onChange={ onChangeMessage2 }
					value={ message2 }
				/>
			</div>
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
		const { attributes: { link, icon, heading, message, link1, icon1, heading1, message1, link2, icon2, heading2, message2 } } = props;
		return (
			<div>
				<section class="boxes">
					<div class="row">
						<div class="col-lg-4">
							<div class="box-auto shadow-sm">
								{ link != '' && link !='#' ? (
									<a href={link}>
										<div class="message-icon">
											<i class={ icon }></i>
										</div>
									</a>
									) :
									(
										<div class="message-icon">
											<i class={ icon }></i>
										</div>
									)
								}
								<h3 class="message-header"><RichText.Content tagName="h3" value={ heading } /></h3>
								<RichText.Content 
								tagName="div"
								format="string"
								class="message-body"
								multiline="p" 
								value={ message } 
							/>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box-auto shadow-sm">
							{ link1 != '' && link1!='#' ? (
									<a href={link1}>
										<div class="message-icon">
											<i class={ icon1 }></i>
										</div>
									</a>
									) :
									(
										<div class="message-icon">
											<i class={ icon1 }></i>
										</div>
									)
								}
								<h3 class="message-header"><RichText.Content tagName="h3" value={ heading1 } /></h3>
								<RichText.Content 
								tagName="div"
								format="string"
								class="message-body-1"
								multiline="p" 
								value={ message1 } 
							/>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box-auto shadow-sm">
							{ link2 != '' && link2!='#' ? (
									<a href={link2}>
										<div class="message-icon">
											<i class={ icon2 }></i>
										</div>
									</a>
									) :
									(
										<div class="message-icon">
											<i class={ icon2 }></i>
										</div>
									)
								}
								<h3 class="message-header"><RichText.Content tagName="h3" value={ heading2 } /></h3>
								<RichText.Content 
									tagName="div"
									format="string"
									class="message-body-2"
									multiline="p" 
									value={ message2 } 
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	},
} );
