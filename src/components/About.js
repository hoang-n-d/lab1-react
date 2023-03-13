import React from "react";
import { useEffect } from "react";
import {
    Container,
    Collapsible,
    CollapsibleItem,
    Icon,
} from "react-materialize";
export default function About() {
    useEffect(() => {
        document.title = "About us";
    }, []);
    return (
        <Container className="about-con">
            <h3>About us</h3>
            <Collapsible accordion>
                <CollapsibleItem
                    expanded={false}
                    header="Movies"
                    icon={<Icon>local_movies</Icon>}
                    node="div"
                >
                    Thousand films store and update hot films everyday for you to enjoy.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Download"
                    icon={<Icon>cloud_download</Icon>}
                    node="div"
                >
                    Also suport for downloading the films you like.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="High Quality"
                    icon={<Icon>hd</Icon>}
                    node="div"
                >
                    Watch sub movies with high quality and high speed.
                </CollapsibleItem>
            </Collapsible>
        </Container>
    );
}