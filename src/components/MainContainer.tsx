import React from "react";
import Greeting from "./Greeting";
import Card, { ICardContent } from "./Card";

const contents: ICardContent[] = [
    {
        heading: "Heading1",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
    },
    {
        heading: "Heading2",
        description: "In excepteur consequat Lorem sunt velit consectetur sint magna magna magna sunt duis ad."
    },
    {
        heading: "Heading3",
        description: "Lorem nostrud reprehenderit sit culpa excepteur minim."
    }
];

const MainContainer: React.FunctionComponent = () => {
    return (
        <main role="main">
            <Greeting />

            <div className="container">
                <div className="row">
                    {contents.map(content => (
                        <Card content={content} />
                    ))}
                </div>

                <hr />
            </div>
        </main>

    );
};

export default MainContainer;