import "./contact.css";
import { Adb, Copyright, Facebook, Instagram, Twitter, MailOutline} from "@mui/icons-material";

import { useState } from "react";

export default function Contact() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            contact: "./assets/demo10.png",
            title: "History",
            img: "./assets/demo11.jpeg"
        },
        {
            id: "2",
            contact: "./assets/demo12.png",
            title: "Goal",
            img: "./assets/demo14.jpeg"
        },
        {
            id: "3",
            contact: "./assets/demo13.png",
            title: "Develper",
            img: "./assets/demo15.jpeg"
        }
        
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const currentDay = weekday[currentDate.getDay()];


    return (
        <div className="contact" id="contact">
            <div className="w-2/3 h-1/2 mb-20">
                <div class="w-full bg-yellow-main rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full h-80">
                        <img class="object-center h-full" src="assets/demo14.jpeg" alt="4564" />
                    </div>
                    <div class="w-full md:w-5/5 text-left p-6 md:p-4 space-y-2">
                        <p class="text-xl tracking-wider text-black-main font-bold">Hello, Catlister</p>
                        <p class="text-base tracking-wider text-gray-500 font-medium">from organizer</p>
                        <p class="text-base tracking-wide leading-relaxed text-black-main font-medium">สร้าง To Do-List เพื่อกำหนดเวลาสำหรับแผนงานได้อย่างมืออาชีพ เหมาะอย่างยิ่งสำหรับผู้ใช้งานที่ต้องการกำหนดและติดตามภาระหน้าที่หรือสิ่งที่ตนเองต้องจัดการ และยังสร้างเป็นแบบแผนสิ่งที่ต้องทำได้แบบวันต่อวัน โฟกัสกับงานได้อย่างเป็นระบบและมีประสิทธิภาพ ช่วยประหยัดเวลาและเพิ่มคุณภาพชีวิตให้แก่คุณ</p>
                    </div>
                </div>
            </div>
            <Adb className="adb" />
            <h3 className="h3Contact">catlist</h3>
            <Copyright className="copyright" />
            <p class="copyrightText">copyright {currentYear}</p>
            {/* <MailOutline className="mailOutline"/>
            <Facebook className="facebook"/>
            <Instagram className="instagram"/>
            <Twitter className="twitter"/> */}
            <p class="enjoy">Enjoy with your {currentDay} !</p>
        </div>
    )
}
