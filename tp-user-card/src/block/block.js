/**
 * BLOCK: tp-user-card
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
registerBlockType( 'cgb/block-tp-user-card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tp-user-card - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'tp-user-card — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		name: {
			type: 'string',
		},
		role: {
			type: 'string',
		},
		message: {
			type: 'array',
			source: 'children',
			selector: '.message-body',
		},
		imgURL: {
			type: 'string',
		},
		imgID: {
			type: 'number',
		},
		imgAlt: {
			type: 'string',
		},
		name1: {
			type: 'string',
		},
		role1: {
			type: 'string',
		},
		message1: {
			type: 'array',
			source: 'children',
			selector: '.message-body1',
		},
		imgURL1: {
			type: 'string',
		},
		imgID1: {
			type: 'number',
		},
		imgAlt1: {
			type: 'string',
		},
		name2: {
			type: 'string',
		},
		role2: {
			type: 'string',
		},
		message2: {
			type: 'array',
			source: 'children',
			selector: '.message-body2',
		},
		imgURL2: {
			type: 'string',
		},
		imgID2: {
			type: 'number',
		},
		imgAlt2: {
			type: 'string',
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
		const { attributes: { message, name, role, imgID, imgURL, imgAlt,
			message1, name1, role1, imgID1, imgURL1, imgAlt1,
			message2, name2, role2, imgID2, imgURL2, imgAlt2
		}, className, setAttributes, isSelected } = props;

		const onChangeMessage = message => { setAttributes( { message } ) };
		const onChangeName = name => { setAttributes( { name } ) };
		const onChangeRole = role => { setAttributes( { role } ) };
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
		};

		const onChangeMessage1 = message1 => { setAttributes( { message1 } ) };
		const onChangeName1 = name1 => { setAttributes( { name1 } ) };
		const onChangeRole1 = role1 => { setAttributes( { role1 } ) };
		const onSelectImage1 = img => {
			setAttributes( {
				imgID1: img.id,
				imgURL1: img.url,
				imgAlt1: img.alt,
			} );
		};
		const onRemoveImage1 = () => {
			setAttributes({
				imgID1: null,
				imgURL1: null,
				imgAlt1: null,
			});
		};
		
		const onChangeMessage2 = message2 => { setAttributes( { message2 } ) };
		const onChangeName2 = name2 => { setAttributes( { name2 } ) };
		const onChangeRole2 = role2 => { setAttributes( { role2 } ) };
		const onSelectImage2 = img => {
			setAttributes( {
				imgID2: img.id,
				imgURL2: img.url,
				imgAlt2: img.alt,
			} );
		};
		const onRemoveImage2 = () => {
			setAttributes({
				imgID2: null,
				imgURL2: null,
				imgAlt2: null,
			});
		};

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
					tagName="h3"
					placeholder={ __( 'Add the persons name', 'tp-jumbotron' ) }
					onChange={ onChangeName }
					value={ name }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add a description', 'tp-jumbotron' ) }
					onChange={ onChangeMessage }
					value={ message }
				/>

				<RichText
					tagName="p"
					placeholder={ __( 'Add the persons role', 'tp-jumbotron' ) }
					onChange={ onChangeRole }
					value={ role }
				/>

				{ ! imgID1 ? (
					<MediaUpload
						onSelect={ onSelectImage1 }
						type="image"
						value={ imgID1 }
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
							src={ imgURL1 }
							alt={ imgAlt1 }
						/>

						{ isSelected ? (

							<Button
								className="remove-image"
								onClick={ onRemoveImage1 }
							>
								Remove
							</Button>

						) : null }

					</p>
				)}
				<RichText
					tagName="h3"
					placeholder={ __( 'Add the persons name', 'tp-jumbotron' ) }
					onChange={ onChangeName1 }
					value={ name1 }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add a description', 'tp-jumbotron' ) }
					onChange={ onChangeMessage1 }
					value={ message1 }
				/>

				<RichText
					tagName="p"
					placeholder={ __( 'Add the persons role', 'tp-jumbotron' ) }
					onChange={ onChangeRole1 }
					value={ role1 }
				/>


				{ ! imgID2 ? (
					<MediaUpload
						onSelect={ onSelectImage2 }
						type="image"
						value={ imgID2 }
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
							src={ imgURL2 }
							alt={ imgAlt2 }
						/>

						{ isSelected ? (

							<Button
								className="remove-image"
								onClick={ onRemoveImage2 }
							>
								Remove
							</Button>

						) : null }

					</p>
				)}
				<RichText
					tagName="h3"
					placeholder={ __( 'Add the persons name', 'tp-jumbotron' ) }
					onChange={ onChangeName2 }
					value={ name2 }
				/>

				<RichText
					tagName="div"
					multiline="p"
					format="string"
					placeholder={ __( 'Add a description', 'tp-jumbotron' ) }
					onChange={ onChangeMessage2 }
					value={ message2 }
				/>

				<RichText
					tagName="p"
					placeholder={ __( 'Add the persons role', 'tp-jumbotron' ) }
					onChange={ onChangeRole2 }
					value={ role2 }
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
		const { message, name, role, imgURL, imgAlt,
			message1, name1, role1, imgID1, imgURL1, imgAlt1,
			message2, name2, role2, imgID2, imgURL2, imgAlt2 } = props.attributes;
		return (
			<div className={ props.className }>
			<section class="boxes">
			<div class="row">
			  <div class="col-lg-4">
				<div class="team-box shadow-sm mb-4">
                  <div class="team-img-container">
				  <img src={imgURL} alt={imgAlt} style="width:100%"></img>
				  </div>
					<div class="team-box-lower">
					<RichText.Content tagName="h3" value={ name } />
					<RichText.Content tagName="p" class="title" value={ role } />
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
			{ imgID1 ? (
					<div class="col-lg-4">
					<div class="team-box shadow-sm mb-4">
                  <div class="team-img-container">
							<img src={imgURL1} alt={imgAlt1} style="width:100%"></img>
							</div>
							<div class="team-box-lower">
							<RichText.Content tagName="h3" value={ name1 } />
							<RichText.Content tagName="p" class="title" value={ role1 } />
							<RichText.Content 
								tagName="div"
								format="string"
								class="message-body1"
								multiline="p" 
								value={ message1 } 
							/>
						</div>
					</div>
				</div>
			):("")}

			{ imgID2 ? (
			 <div class="col-lg-4">
			   <div class="team-box shadow-sm mb-4">
                  <div class="team-img-container">
			   		<img src={imgURL2} alt={imgAlt2} style="width:100%"></img>
					   </div>
					<div class="team-box-lower">
						<RichText.Content tagName="h3" value={ name2 } />
						<RichText.Content tagName="p" class="title" value={ role2 } />
						<RichText.Content 
							tagName="div"
							format="string"
							class="message-body2"
							multiline="p" 
							value={ message2 } 
						/>
				  </div>
			 </div>
		   </div>
			):("")}
			  </div>
		  </section>
		  </div>
		);
	},
} );
