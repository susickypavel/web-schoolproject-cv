import * as React from "react";

interface IProps {

}

export  default class extends React.Component<IProps> {
    render() {
        return(
            <div>
                <div className="jumbotron">
                    Haha
                </div>
                <div className="row">
                    <div className="col-sm red">
                        TeST
                    </div>
                    <div className="col-sm lime">
                        TeST
                    </div>
                    <div className="col-sm blue">
                        BLUE
                    </div>
                </div>
            </div>
        );
    }
}
