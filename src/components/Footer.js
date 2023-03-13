import React, { Component } from 'react'
import { Footer } from 'react-materialize'
import { Link } from 'react-router-dom'
export default class film extends Component {
    render() {
        return (
            <Footer
                className="first"
                copyrights=" Copyright 2022 © CơmGà"
                links={<ul><li>
                    <a className="grey-text text-lighten-3" >Phim Mới</a></li>
                    <li><a className="grey-text text-lighten-3" >Phim Lẻ</a></li>
                    <li><a className="grey-text text-lighten-3" >Phim Bộ</a></li>
                    <li><a className="grey-text text-lighten-3" ><Link to="/about">Giới thiệu</Link></a></li></ul>}
                moreLinks={<a className="grey-text text-lighten-4 right" ><Link to="/contact">Liên hệ </Link></a>}
            >
                <h5 className="footer-text">
                   <img src='https://cdn-icons-png.flaticon.com/128/1038/1038100.png' width={50} height={50}/>
                   CơmGà
                </h5>
                <p className="grey-text text-lighten-4">
                    Vừa xem vừa ăn mới đã. Cho nên khi xem phim nhớ đặt thêm phần cơm gà để thưởng thức cùng bộ phim yêu thích !!
                </p>
            </Footer>
        )
    }
}