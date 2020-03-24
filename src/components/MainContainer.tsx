import React from "react";
import Greeting from "./Greeting";
import Card, { ICardContent } from "./Card";
import NumberCard from "./NumberCard";

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
                    {contents.map((content, index) => (
                        <Card key={index} content={content} />
                    ))}
                </div>
                <div className="row">
                    <div className="col">
                        <NumberCard />
                    </div>
                </div>
                <hr />
            </div>
        </main>

    );
};

export default MainContainer;
