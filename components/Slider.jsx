import React from 'react';
import Image from "next/image"
import styles from "../styles/Slider.module.css"

const Slider = () => {



    const images = [
        "/Image/pizza1.jpg",
         "/Image/pizza2.jpg",
          "/Image/pizza3.jpg",

    ]
    return (
        <div className={styles.container}>
            {/* <div className={styles.arrowContainer} style={{left:0}}>
                  <Image src="/Image/arrowl.png" alt="" layout='fill'/>

            </div> */}
          
            <div className={styles.wrapper}>
                <div>
                    <h2 className='pizza-title'>Best Pizza in Town</h2>
                    <h3>Grab your delicious pizza. We have the best pizza with best taste.</h3>
                    <button className={styles.bannerorderbutton}>Order Now</button>
                </div>
                {/* {
                    images.map((img,i) => (
                     <div className={styles.imgContainer} key={i}>
                
                      <Image src="/Image/sawsage-pizza.png"  alt="" width="1200" height="500px"/>

                  </div>

                    ))
                } */}
                <div className='Image'>
                      <Image src="/Image/sawsage-pizza.png"  alt="" width="600" height="500px"/>

                </div>
                
                    

            </div>
            {/* <div className={styles.arrowContainer} style={{right:0}}>
                  <Image src="/Image/arrowr.png" alt="" layout='fill'/>

            </div> */}
        </div>
    );
};

export default Slider;


