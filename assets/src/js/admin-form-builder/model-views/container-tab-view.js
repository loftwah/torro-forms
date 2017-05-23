( function( torroBuilder, torro ) {
	'use strict';

	/**
	 * Container tab view.
	 *
	 * @class
	 * @augments torro.Builder.BaseModelView
	 */
	torroBuilder.ContainerTabView = torroBuilder.BaseModelView.extend({

		/**
		 * Element tag name.
		 *
		 * @since 1.0.0
		 * @access public
		 * @type {string}
		 */
		tagName: 'button',

		/**
		 * Element class name.
		 *
		 * @since 1.0.0
		 * @access public
		 * @type {string}
		 */
		className: 'torro-form-canvas-tab',

		/**
		 * Template function.
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @type {function}
		 */
		template: torro.template( 'container-tab' ),

		/**
		 * Element attributes.
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @returns {object} Default attributes.
		 */
		attributes: function() {
			return {
				'type': 'button',
				'id': 'container-tab-' + this.model.get( 'id' ),
				'aria-controls': 'container-panel-' + this.model.get( 'id' ) + ' container-footer-panel-' + this.model.get( 'id' ),
				'aria-selected': this.model.get( 'id' ) === this.collection.props.get( 'selection' ) ? 'true' : 'false',
				'role': 'tab'
			};
		},

		/**
		 * View events.
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @type {object}
		 */
		events: {
			'click': 'selectTab'
		},

		/**
		 * Initializes the view.
		 *
		 * @since 1.0.0
		 * @access public
		 */
		initialize: function() {
			this.listenTo( this.collection.props, 'change:selection', this._toggleSelection );
		},

		/**
		 * Selects the element as the current tab.
		 *
		 * @since 1.0.0
		 * @access public
		 */
		selectTab: function() {
			if ( this.model.get( 'id' ) === this.collection.props.get( 'selection' ) ) {
				return;
			}

			this.collection.props.set( 'selection', this.model.get( 'id' ) );
		},

		/**
		 * Sets the aria-selected attribute depending on whether this is the currently selected tab.
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @param {Backbone.Model} props Collection properties.
		 */
		_toggleSelection: function( props ) {
			if ( this.model.get( 'id' ) === props.get( 'selection' ) ) {
				this.$el.attr( 'aria-selected', 'true' );
			} else {
				this.$el.attr( 'aria-selected', 'false' );
			}
		}
	});

})( window.torro.Builder, window.torro );
