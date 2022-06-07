import React, { useEffect, useState } from "react";
import "./style.css"



const SecondPage = () => {
    const [oldPosition, setOldPosition] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const touch = {
        "top" : scrollPosition + "px"
    }
    const message = {
        "top" : -scrollPosition*2.7 + "px"
    }
    const handleTouch = (event) => {
        const actualPosition = Math.floor(event.changedTouches[0].clientY) 
        if (actualPosition > 340 && actualPosition < 670 ) {
            if (oldPosition - actualPosition < 0){
                setScrollPosition(prev => prev - (oldPosition > 0 ? oldPosition - actualPosition : 0))        
                setOldPosition(actualPosition)
            } else {
                setScrollPosition(prev => prev - (oldPosition > 0 ? oldPosition - actualPosition : 0))
                setOldPosition(actualPosition)
            }
        }
    }   
    return (
        <section className="child child_2">
            <div className="second-page-content">
                <div className="title">
                    <p>Текст <br/>сообщения</p>   
                </div> 
                
                <div className="message-container">

                    <div className="scroll">
                        <div className="track"></div>
                        <div 
                            style={touch}
                            onTouchMoveCapture={event => handleTouch(event)}
                            className="button-track"></div>
                    </div>

                    <div className="message-text">
                        <div className="message" style={message}>
                            <p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Dignissimos ut expedita ratione consequuntur nam nobis repudiandae, placeat explicabo recusandae, dicta eligendi atque iste minima, numquam optio rerum quae incidunt iure natus maxime impedit quia! Animi vero, aperiam ipsam corrupti voluptatibus atque corporis inventore temporibus, et tenetur possimus dignissimos sunt, quam quod? Cum minus, saepe modi dolores totam quam sunt facere dolore id necessitatibus, fugiat cupiditate optio ipsa non magni amet consequatur tempora ullam. Alias, perspiciatis labore. A aliquam officiis maiores atque, nam repellendus nostrum quam, dolores consequatur optio voluptatum esse exercitationem quod sint facilis odio porro nobis! Nemo voluptate sequi fugit, consequuntur, iste facilis ullam et, iure temporibus itaque obcaecati autem minus unde sed beatae sit quisquam. Quia eum natus, atque veniam excepturi tempora consequatur, dolorem mollitia nam eligendi, fuga ratione ullam suscipit dicta reprehenderit esse perferendis illo explicabo nulla eveniet minus. Possimus, dolorem quas consequuntur, cumque eos saepe natus nam assumenda, recusandae animi tempora? Aperiam earum eligendi autem velit provident omnis excepturi molestias deleniti ipsa, beatae temporibus sapiente officia adipisci dolorem, consequuntur repellat ex odit sunt nisi porro iusto tempora. Eaque assumenda quas sequi! Neque, id quas. Ab dolores animi saepe, velit eum soluta id dolorem vel earum aperiam!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio, eveniet in ad fugiat aliquid asperiores vitae voluptatum qui ratione, itaque accusantium molestias nisi iusto laborum exercitationem harum consectetur sed, obcaecati rem nihil tempora cum. Dolor, eligendi beatae, excepturi quas error, ex minus dolorem aliquam voluptatum veniam aperiam repudiandae eveniet laboriosam. Consequatur quas sequi similique veritatis cum voluptates voluptatibus delectus impedit, earum ipsam, optio omnis quis culpa libero est! Obcaecati qui architecto similique aperiam in laborum voluptatem, voluptatibus ducimus quasi sequi corporis numquam non delectus, maxime quod? Temporibus pariatur ipsam consectetur. Dolor, accusantium repellat quod nam ut quidem hic temporibus officia assumenda officiis iure ducimus! Non asperiores suscipit vero ab iste. Nihil unde assumenda reiciendis! Ea tempore incidunt quo doloribus provident recusandae blanditiis pariatur quasi, molestiae accusamus. Est, corporis odit! Consectetur inventore facilis ab repellat excepturi ad veritatis placeat a accusantium, ea laudantium ullam, eveniet fugit officia ex cum perspiciatis, hic eos quibusdam dolor id quo rerum. Quae eum molestiae, dolorum voluptates adipisci tenetur at debitis ad aliquam. Doloremque, perspiciatis impedit iusto est praesentium architecto laudantium. Sunt minus, quidem maxime voluptate quibusdam exercitationem aspernatur quisquam odit, ex error porro odio, reprehenderit at sapiente corrupti perspiciatis! Adipisci beatae earum repellendus velit.</p>
                        </div>
                    </div>

                </div>
                <img src={require("../../img/firstPage/pink_sperm_1.png")} alt="icon" className="icon-bg-2 static animate-page2-1" />
                <img src={require("../../img/firstPage/pink_sperm_1.png")} alt="icon" className="icon-bg-2 static animate-page2-2" />
                <img src={require("../../img/firstPage/pink_sperm_1.png")} alt="icon" className="icon-bg-2 static animate-page2-3" />
                <img src={require("../../img/firstPage/pink_sperm_1.png")} alt="icon" className="icon-bg-2 static animate-page2-4" />
                <img src={require("../../img/firstPage/pink_sperm_1.png")} alt="icon" className="icon-bg-2 static animate-page2-5" />


            </div>      
        </section>
    );
};

export default SecondPage;