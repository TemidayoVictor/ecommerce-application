import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Hats',
                    ImageName: '/images/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },

                {
                    title: 'Sneakers',
                    ImageName: '/images/sneakers.png',
                    id: 2,
                    linkUrl: ''
                },

                {
                    title: 'Jackets',
                    ImageName: '/images/jackets.png',
                    id: 3,
                    linkUrl: ''
                },

                {
                    title: 'Men',
                    ImageName: '/images/men.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },

                {
                    title: 'Women',
                    ImageName: '/images/womens.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    // this.state.sections.map(({title, ImageName, id, size}) => (
                    //     <MenuItem key={id} title={title} ImageName={ImageName} size={size} />
                    // ))

                    // an alternate method of mapping, instead of destructuring.
                    // this.state.sections.map( section => (
                    //     <MenuItem key={section.id} title={section.title} ImageName={section.ImageName} size={section.size} />
                    // ))

                    // an alternate method of mapping;
                    this.state.sections.map( ({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory