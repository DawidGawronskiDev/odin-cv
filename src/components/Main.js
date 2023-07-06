import React, {Component} from "react";

import Form from "./Form";
import Prev from "./Prev";

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <main>
                <Form />
                <Prev />
            </main>
        )
    }
}

export default Main