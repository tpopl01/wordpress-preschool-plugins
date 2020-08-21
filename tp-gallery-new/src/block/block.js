/**
 * BLOCK: tp-gallery-new
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
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


registerBlockType( 'cgb/block-tp-gallery-new', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'tp-gallery-new - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'tp-gallery-new — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		imgURL: {
			type: 'array',
		},
		bID: {
			type: 'integer',
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
	edit: (props) => {
		const { attributes: { imgURL, bID/*images*/ },
			className, setAttributes, isSelected } = props;

		const onSelectImage = newImages => {
			setAttributes({
				imgURL: newImages.map((newImage) => ({
					newImage,
					}
				),
			),
			bID: Math.floor(Math.random()*100000),
		} );
		};
		const onRemoveImage = () => {
			setAttributes({
				imgURL: null,
				bID: "",
			});
		}

		return (
			<div className={ className }>

				{ ! imgURL || !bID ? (

					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						multiple={ true }
						gallery={ true }
						value={ imgURL, bID }
						render={ ( { open } ) => (
							<Button
								className={ "button button-large" }
								onClick={ open }
							>
								Upload
								{ __( ' Upload Image' ) }
							</Button>
						) }
					>
					</MediaUpload>

				) : (
					<div>
							<div class="grid-container">
									{
										(imgURL.map((image)=> 
										{
											return(
												<div class="grid-item">
													<img class="img-fluid" src={ image.newImage.url }
														alt={ image.newImage.alt }></img>
												</div>
											);
										}
									))}
									<p>ID = { bID }</p>
							</div>

							{ isSelected ? (

								<Button
								className={ "button button-large" }
									onClick={ onRemoveImage }
								>
									Remove
								</Button>

							) : null }

					</div>
				)}

			</div>
		);
	},
	save: (props) => {
		const { imgURL } = props.attributes;
		const { bID } = props.attributes;
		console.log(JSON.stringify(bID));
		console.log(props.bID);
		//const { images } = props.attributes;
		return (
			<div>
			<div id={"multi-item-example"+bID} class="carousel slide carousel-multi-item carousel-multi-item-2" data-interval="10000000">
			<div class="row">
				<div class="col-md-1 my-auto">
					<a class="black-text" href={"#multi-item-example"+ bID} data-slide="prev"><i class="fa fa-angle-left"></i></a>
				</div>
				<div class="col-md-10 carousel-inner" role="listbox">
				{
					(imgURL.map((image, i)=> 
					{
						return(
							//start inner loop
							i % 3 == 0?(
								i == 0?(
									<div class="carousel-item active">
										<div class="row">
										{
											(imgURL.map((im, n)=> 
											{		
												return(
													n>=i && n<i+3?(
														<div class="col-md-4 mb-3">
															<div class="card car-clamp-height">
															<a href="#" >
															<img class="img-fluid" src={ im.newImage.url } alt={ im.newImage.alt }></img>
															</a>
															</div>
														</div>
													):("")
												);
											}))
										}
										</div>
									</div>
								):
								(
									<div class="carousel-item">
										<div class="row">
										{
											(imgURL.map((ima, n)=> 
											{		
												return(
													n>=i && n<i+3?(
														<div class="col-md-4 mb-3">
															<div class="card car-clamp-height">
																<a href="#" >
																<img class="img-fluid" src={ ima.newImage.url }
																	alt={ ima.newImage.alt }></img>
																</a>
															</div>
														</div>
													):("")
												);
											}))
										}
										</div>
									</div>
								)
							):("")
						);
					}
				))}
			</div>
			<div class="col-md-1 my-auto">
				<a class="black-text" href={"#multi-item-example"+bID} data-slide="next"><i class="fa fa-angle-right"></i></a>
			</div>
			</div>
		</div>
		</div>

		);

	},
},
);