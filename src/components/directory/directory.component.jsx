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
                    ImageName: 'image1',
                    id: 1
                },

                {
                    title: 'Sneakers',
                    ImageName: 'image2',
                    id: 2
                },

                {
                    title: 'Jackets',
                    ImageName: 'image3',
                    id: 3
                },

                {
                    title: 'Men',
                    ImageName: 'image4',
                    size: 'large',
                    id: 4
                },

                {
                    title: 'Women',
                    ImageName: 'image5',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, ImageName, id, size}) => (
                        <MenuItem key={id} title={title} ImageName={ImageName} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory