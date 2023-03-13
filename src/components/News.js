import React from "react";
import { Container, Tabs, Tab, Button, Icon } from "react-materialize";
import { FilmsNews } from "../Share/FilmNewsList";
import { Link } from "react-router-dom";
import { useState } from 'react'
export default function News() {
    const [, setFilm] = useState([])
    return (
        <Container>
            <h3><Icon left>whatshot</Icon>Upcomming News</h3>
            <Tabs
                className="tab-demo z-depth-2"
                options={{
                    swipeable: true,
                }}
                scope="tabs-33"
            >
                {FilmsNews.map((filmNew) => {
                    return (

                        <Tab
                            className="pink lighten-3"

                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false,

                            }}

                            title={(filmNew.title)}
                        >
                            <img
                                src={filmNew.img}
                                alt=""
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 2,
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 3,
                                    color: "white",
                                    padding: "1rem 2rem",
                                }}
                            >
                                <h4 className="red-text text-accent-1">
                                    {filmNew.title}
                                </h4>
                                <p>{filmNew.description}</p>
                                <p>{filmNew.timerelease}</p>
                                <Link to={`detail/${filmNew.id}`}>
                                    <p className="butp"><button className="newbut" onClick={() => { setFilm(filmNew) }}>
                                        <a ><Icon right>more_vert</Icon>Detail</a></button></p>
                                </Link>
                            </div>
                        </Tab>
                    );
                })}
            </Tabs>
        </Container>
    );
}