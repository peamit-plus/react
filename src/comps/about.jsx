import React from 'react'

export default function About() {
    return (
        <>
        <div>
            <div className="page-header">
                <h2 style={{textAlign:"center"}} id="demotext">אודותינו</h2>
            </div>
            <div className="BorderAbout" data-aos="zoom-in" data-aos-duration="2000">
                <p style={{fontSize:"30px",fontFamily:" Arial;"}}>
                    שיווק כלים ומוצרים חד פעמיים
                    <br /> עזרי ניקיון למטבח ולבית
                    <br /> מוצרי נייר וניילון
                    <br /> מוצרי אפיה חד פעמיים
                    <br /> ...ועוד
                    <br /> למוסדות ופרטיים
                    <br /><br /> כולל שירות משלוחים בירושלים
                    <br /> שירות איכות ואמינות
                </p>
                <p><b><a style={{textDecoration: "underline;" }} href="tel:+972-055-6610747">055-6610747</a> אברהם</b>
                    <br />
                    <a style={{textDecoration: "underline;"}} href="mailto:avizeev85@gmail.com" className="mobile-link"
                        target="_blank">avizeev85@gmail.com</a>
                    <a style={{textDecoration:"underline"}}
                        href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=avizeev85@gmail.com&hl=iw" className="desktop-link"
                        target="_blank">avizeev85@gmail.com</a>
                </p>
                <br />
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>שתפו איתנו
                ביקורת על האתר / השרות בקישור הבא
                <br/>
                    <a style={{textDecoration: "underline"}} href="https://g.page/r/CSWWTVep_ek9EBM/review" target="_blank">מתן ביקורת
                        לפעמית פלוס</a>
                    <br />
                    <br />
                    <a style={{textDecoration:"underline;"}} href="mailto:a0503436201@gmail.com" className="mobile-link" target="_blank">👉
                        a0503436201@gmail.com להערות שלחו לנו</a>
                    <a style={{textDecoration: "underline;"}}
                        href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=a0503436201@gmail.com&hl=iw" className="desktop-link"
                        target="_blank">👉 a0503436201@gmail.com להערות שלחו לנו</a>
                
            </div>
            <br />
        </div>
        </>
    
            )
}
