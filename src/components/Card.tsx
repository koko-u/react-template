import React from "react";

export interface ICardContent {
    heading: string;
    description: string;
}

interface IProp {
    content: ICardContent;
}

const Card: React.FunctionComponent<IProp> = ({ content }: IProp) => {
    return (
        <div className="col-md-4">
            <h2>{content.heading}</h2>
            <p>{content.description}</p>
            <p>
                <a className="btn btn-secondary" href="#" role="button">
                    View details &raquo;
                </a>
            </p>
        </div>
    ); 
};

export default Card;