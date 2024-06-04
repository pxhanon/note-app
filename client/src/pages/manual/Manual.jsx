import "./manual.css";

export default function Manual() {
    return (
        <div className="manual">
            <main class="py-4">
                <div class="px-4">
                    <div class="block md:flex justify-between md:-mx-2">

                        <div class="w-full lg:w-1/5 ml-64 mt-52">
                            <div class="itemTrans bg-black-main rounded-lg overflow-hidden shadow border-2 border-gray-300 relative">
                                <img class="h-56 w-full object-cover object-center" src="/assets/feature/quickNote.png" alt="" />
                                <div class="p-4 h-auto md:h-40 lg:h-48">
                                    <p  class="block text-yellow-main font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                        Quick Note
                                    </p>
                                    <div class="text-gray-main font-medium text-sm leading-relaxed block md:text-xs lg:text-sm">
                                    Quick Note เป็น Notepad ง่ายๆ จะทำให้คุณสามารถบันทึกสิ่งต่างๆได้อย่างรวดเร็ว เช่น ไดอารี่สั้นๆ, อีเมล, ข้อความรายการช้อปปิ้ง เมื่อใช้เสร็จแล้วสามารถลบทิ้งได้เพื่อเป็นการบอกว่าได้ทำสิ่งนั้นไปแล้ว</div>
                                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/5 md:mx-2 mb-4 md:mb-0 mt-44">
                            <div class="itemTrans bg-black-main rounded-lg overflow-hidden shadow border-2 border-gray-300 relative">
                                <img class="h-56 w-full object-cover object-center" src="/assets/feature/weather.png" alt="" />
                                <div class="p-4 h-auto md:h-40 lg:h-48">
                                    <p class="block text-yellow-main font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                        Weather
                                    </p>
                                    <div class="text-gray-main font-medium text-sm leading-relaxed block md:text-xs lg:text-sm">
                                        Weather เป็นการบอกสภาพอากาศ ณ วันนั้น เวลานั้น ในรูปแบบของคำอธิบาย อุณหภูมิ และรูปภาพประกอบของสภาพอากาศ โดยใส่ชื่อเมืองของประเทศที่คุณอยู่ ซึ่งข้างใต้แบบฟอร์มมีลิงค์สำหรับเช็คชื่อเมืองภาษาอังกฤษให้เข้าไปเช็คได้
                                    </div>
                                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/5 md:mx-2 mb-4 md:mb-0 mt-52">
                            <div class="itemTrans bg-black-main rounded-lg overflow-hidden shadow border-2 border-gray-300 relative">
                                <img class="h-56 w-full object-cover object-center" src="/assets/feature/calendar.png" alt="" />
                                <div class="p-4 h-auto md:h-40 lg:h-48">
                                    <p class="block text-yellow-main font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                        Calendar
                                    </p>
                                    <div class="text-gray-main font-medium text-sm leading-relaxed block md:text-xs lg:text-sm">
                                        Calendar เป็น Planner สำหรับวางแผนสิ่งที่จะทำทั้งในปัจจุบันและอนาคต โดยมีรูปแบบเป็นเดือน และให้เติมรายการสิ่งที่จะทำในแต่ละวันที่ต้องการ สามารถแก้ไข และลบได้ รวมถึงมีการใส่สีพื้นหลังของข้อความเพื่อให้เกิดความเด่นชัดมากขึ้น
                                    </div>
                                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/5 md:mx-2 mb-4 md:mb-0 mt-44">
                            <div class="itemTrans bg-black-main rounded-lg overflow-hidden shadow border-2 border-gray-300 relative">
                                <img class="h-56 w-full object-cover object-center" src="/assets/feature/horoscope.png" alt="" />
                                <div class="p-4 h-auto md:h-40 lg:h-48">
                                    <p class="block text-yellow-main font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                        Horoscope
                                    </p>
                                    <div class="text-gray-main font-medium text-sm leading-relaxed block md:text-xs lg:text-sm">
                                    Horoscope เป็นการทำนายดวงในแต่ละเดือน ตามวันเกิดของบุคคลนั้นๆ โดยใส่วันเกิดในรูปแบบดังนี้ 10-12-2000 หมายถึง 10 ธันวาคม ค.ศ. 2000 ก็จะได้ข้อความสั้นๆ ตามราศีเกิด
                                    </div>
                                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
