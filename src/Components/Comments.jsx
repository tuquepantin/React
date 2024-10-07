import React, { useState, useEffect } from 'react';

const messages = [
    '"I found a gem in this shop! The illustrations are simply wonderful, full of life and color. I purchased a custom piece and the artist was very kind and patient with me throughout the process. The illustration turned out perfect and now adorns my living room! I will definitely be buying again." - Maria',
    '"I was impressed with the quality of the print. The colors are vibrant and the details are incredible. The packaging was very careful and the illustration arrived in perfect condition. I highly recommend this shop!" - Ana',
    '"I was looking for a unique and original gift for a friend and I came across this shop. The artist was very attentive and helped me choose the perfect illustration. The purchase process was very simple and the delivery was super fast. My friend was thrilled with the gift!" - Juan',
    '"Im a big fan of art and this shop did not disappoint. The illustrations have a unique and very personal style. Plus, the customer service is excellent. They answer all questions quickly and advise you at all times. I am very happy with my purchase!" - Laura',
    '"I purchased a custom illustration for my new apartment and Im in love with the result. The artist perfectly captured the idea I had in mind. The process was a lot of fun and the final result exceeded my expectations!" - Pablo',
    // Agrega más mensajes aquí
];

function Comments() {
    const [message, setMessage] = useState(messages[0]);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * messages.length);
                setMessage(messages[randomIndex]);
                setIsFading(false);
            }, 600); // Duración de la transición (ajustable)
        }, 6660);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='p-3'>
            <div className='p-3' style={{width: '300px',height: '40px',backgroundColor: '#D9D9D9',margin: '0 auto'}}></div>
            <div className="container2 p-3" style={{ marginLeft: '25px', marginRight: '25px' }}>
                <h4 className={isFading ? 'fade-out' : ''}>{message}</h4>
            </div>
        </div>
    );
}

export default Comments;
