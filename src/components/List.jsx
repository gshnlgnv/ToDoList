import React from 'react';
import trashik from './trashik.png'

export default class List extends React.Component {

    handleDeleteItem = (e) => {
        console.log(e);
        this.props.deletingItem(e);         // app props prokidka SMOTRI
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map(
                            (item, i) => {
                                return (

                                    <li key={i} id={item.id}>
                                        {item.text}
                                        <img
                                            alt="deletePic"
                                            src={trashik}
                                            width="20"
                                            height="20"
                                            title="Удаление элемента"
                                            onClick={() => {
                                                console.log(item.id)
                                                this.props.deletingItem(item.id)
                                            }}
                                        />
                                    </li>

                                )
                            }
                        )
                    }
                </ul>

            </div>
        )
    }
}