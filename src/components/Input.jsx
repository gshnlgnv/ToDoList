import React from "react";
import "./input_css.css";

export default class Input extends React.Component {
    handleClick = () => {
        const {newListItems} = this.props;               // props i state 4erez desrtryktorizaciu
        const hyita = this.myRef.current.value;

        if (hyita) {                                  // privodit k boolean
            newListItems(hyita);
            this.clearInput();
        }
    }

    clearInput() {
        this.myRef.current.value = "";
    }

    handleKeyDown = (event) => {
        let hyita = this.myRef.current.value;

        if (hyita && event.key === "Enter") {       // privodit k boolean
            this.props.newListItems(hyita);
            this.clearInput();
        }
    }

    myRef = React.createRef();   // ссылки (реф) оставляем у рендера

    render() {
        return (
            <div class="text_input">
                <input
                    class="input" 
                    onKeyDown={this.handleKeyDown}
                    ref={this.myRef}
                />
                {/* this tk sozdal v metode klass, this kak obrashenie  */}
                <button
                className="button"             
                onClick={this.handleClick}>Add new item</button>
                {/* // handle nado veshat na obrabot4ik gde eto hyita renderitsia */}
            </div>
        )
    }
}