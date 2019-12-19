wp.blocks.registerBlockType('guten/guten-box',{
    title: 'my cool Border box',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content:{type: 'string'},
        color: {type: 'string'}
    },
    edit: function(props){
        return wp.element.createElement(
            'div',
            null,
            wp.element.createElement(
                'h3',
                null,
                'your cooll border box'
            ),
            React.createElement('input', {type: 'text'})
        );
    },
    save: function(props){

    },
})
