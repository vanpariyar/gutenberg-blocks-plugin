import { registerBlockType } from '@wordpress/blocks';

registerBlockType('guten/guten-box',{
    title: 'my cool Border box',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content:{type: 'string'},
        color: {type: 'string'}
    },
    edit: function( props ){

        function updateContent( event ){
            props.setAttributes({content: event.target.value})
        }
        function updateColor( value ){
            props.setAttributes( { color:value.hex } )
        }

        return wp.element.createElement(
            'div',
            null,
            wp.element.createElement(
                'h3',
                {style: { color: props.attributes.color } },
                'your cooll border box'
            ),
            React.createElement('input', {type: 'text' , value: props.attributes.content , onChange: updateContent}),
            React.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor }),
        );
    },
    save: function( props ){
        
        return wp.element.createElement(
            'div',
            null,
            wp.element.createElement(
                'h3',
                {style: { color: props.attributes.color } },
                'your cooll border box'
            ),
            React.createElement('input', {type: 'text', value: props.attributes.content})
        );
    },
})
