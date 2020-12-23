import React from 'react'
import img1 from '../img/image1.png';
import img2 from '../img/image2.png';
import img3 from '../img/image3.png';
import img4 from '../img/image4.png';
import img5 from '../img/image5.png';
import img6 from '../img/image6.png';
import community from '../img/community.png';
import bike from '../img/bike.png';
import sky from '../img/sky.png';
import tree from '../img/tree.png';
import $ from 'jquery';
import { useEffect } from 'react'

const Courses = () => {

    useEffect(() => {
        $('li:nth-child(1)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(1)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(0)').addClass('active')
        })
        $('li:nth-child(2)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(2)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(1)').addClass('active');
        })
        $('li:nth-child(3)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(3)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(2)').addClass('active');
        })
        $('li:nth-child(4)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(4)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(3)').addClass('active');
        })
    })


    return (
        <div className="content">
            <div className="container summary-courses">
                <p className="header-summary">Our Courses</p>
                <p className="detail-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                <div className="list-image">
                    <img src={img1} alt="image1" />
                    <img src={img2} alt="image2" />
                    <img src={img3} alt="image3" />
                    <img src={img4} alt="image4" />
                    <img src={img5} alt="image5" />
                    <img src={img6} alt="image6" />
                </div>
            </div>

            <div className="container courses">

            </div>

            <div className="container-nopadding carousel">
                <ul>
                    <li className="selected"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="show-image active">
                    <img src={community} alt="community " />
                    <p className="detail-img">The largest community of photo enthusiasts </p>
                </div>
                <div className="show-image">
                    <img src={bike} alt="bike " />
                    <p className="detail-img">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className="show-image">
                    <img src={sky} alt="sky " />
                    <p className="detail-img">survived not only five centuries, but also the leap into electronic </p>
                </div>
                <div className="show-image">
                    <img src={tree} alt="tree " />
                    <p className="detail-img">Vivamus ipsum orci, consectetur ut sagittis et, volutpat quis erat.  </p>
                </div>

            </div>
        </div>
    )
}

export default Courses
