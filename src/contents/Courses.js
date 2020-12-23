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
import entryImage from '../img/entryImage.png';
import arrow from '../img/arrow.png';

const Courses = () => {

    const courses = [{
        id: 1,
        header: "Sed ut perspiciatis unde omnis",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
        image: entryImage
    },
    {
        id: 2,
        header: "Sed ut perspiciatis unde omnis",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
        image: entryImage
    },
    {
        id: 3,
        header: "Sed ut perspiciatis unde omnis",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
        image: entryImage
    },
    {
        id: 4,
        header: "Sed ut perspiciatis unde omnis",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
        image: entryImage
    },
    {
        id: 5,
        header: "Sed ut perspiciatis unde omnis",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
        image: entryImage
    },
    {
        id: 6,
        header: "Sed ut perspiciatis unde omnis",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
        image: entryImage
    }];

    const listCourses = courses.map((it) =>
        <div className="item" key={it.id}>
            <div className="image-content">
                <img src={it.image} alt="entry" />
            </div>
            <div className="text-content">
                <h1> {it.header}</h1>
                <p>{it.content}</p>
            </div>
        </div>
    );

    useEffect(() => {
        $('.carousel li:nth-child(1)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(1)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(0)').addClass('active')
        })
        $('.carousel li:nth-child(2)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(2)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(1)').addClass('active');
        })
        $('.carousel li:nth-child(3)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(3)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(2)').addClass('active');
        })
        $('.carousel li:nth-child(4)').on('click', () => {
            $('li').removeClass('selected');
            $('li:nth-child(4)').addClass('selected');
            $('.show-image').removeClass('active');
            $('.show-image:eq(3)').addClass('active');
        })

        $('.arrow-right').on('click', () => {
            $('.pagination li.active').next().toggleClass('active');
            $('.pagination li.active').prevAll().removeClass('active');
        })

        $('.arrow-left').on('click', () => {
            $('.pagination li.active').prev().toggleClass('active');
            $('.pagination li.active').nextAll().removeClass('active');
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
                {listCourses}
                <div className="pagination">
                    <ul>
                        <img className="arrow-left" src={arrow} alt="arrow left" />
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <img className="arrow-right " src={arrow} alt="arrow right" />
                    </ul>
                </div>
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
